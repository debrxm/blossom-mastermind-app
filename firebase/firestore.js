import { firestore } from "./config";
import { SendNotification } from "../utils/helper";

// const salesRef = firestore.doc(`sales/${userId}/sales/${id}`);
// const userRef = firestore.doc(`users/${userId}`);
const adminRef = firestore.collection(`admins`).where("name", "==", "BMI Dev");

export const UpdateDatabaseNotification = (ownerId, notificationData) => {
  const notificationRef = firestore
    .collection("notifications")
    .doc(ownerId)
    .collection("notifications")
    .doc();
  try {
    notificationRef.set({
      ...notificationData,
      created_at: Date.now(),
      viewed: false,
    });
  } catch (error) {
    console.log(error);
  }
};
export const UpdateNotification = (
  ownerId,
  notificationData,
  pushNotificationData
) => {
  const notificationRef = firestore
    .collection("notifications")
    .doc(ownerId)
    .collection("notifications")
    .doc();
  try {
    notificationRef.set({
      ...notificationData,
      created_at: Date.now(),
      viewed: false,
    });
    SendNotification(pushNotificationData);
  } catch (error) {
    console.log(error);
  }
};

export const OnPaymentSuccessful = async (
  user,
  trxData,
  investmentPackage,
  cleanUp
) => {
  const batch = firestore.batch();
  const adminMessage = `${user.first_name} ${user.last_name} just deposited ₦${trxData.amount} for ${investmentPackage.name} plan.`;
  const investorMessage = `₦${trxData.amount} has been deposited to BMI for ${investmentPackage.name} investment plan. We will get back to you soon with payment dates`;
  const adminSnap = await adminRef.get();
  const adminSnapshot = adminSnap.docs[0];
  if (adminSnapshot.exists) {
    UpdateNotification(
      adminSnapshot.data().id,
      {
        title: "Payment Alert!!!",
        adminMessage,
        trxData,
        username: `${user.first_name} ${user.last_name}`,
        userPhone: user.phone,
        userId: user.id,
      },
      {
        token: adminSnapshot.data().notificationToken,
        channelId: "paymentAlert",
        title: "Payment Alert!!!",
        body: adminMessage,
      }
    );
  }
  // UPDATE INVESTMENTS
  const packageRef = await firestore
    .doc(`packages/${investmentPackage.code}`)
    .get();
  const allInvestmentRef = firestore
    .collection("all_investments")
    .doc(`${trxData.trxref}`);
  const investmentRef = firestore
    .collection("investments")
    .doc(user.id)
    .collection("investments")
    .doc(`${trxData.trxref}`);
  const hasInvestedBefore = investmentPackage.investors[user.id] === true;
  if (!hasInvestedBefore) {
    const oldInvestors = investmentPackage.investors;
    oldInvestors[user.id] = true;
    batch.update(packageRef.ref, {
      investors: oldInvestors,
      no_of_investors: packageRef.no_of_investors + 1,
    });
  }
  const invest_date = Date.now();
  batch.set(investmentRef, {
    ...investmentPackage,
    invest_date,
    confirmed: false,
  });
  batch.set(allInvestmentRef, {
    ...investmentPackage,
    invest_date,
    confirmed: false,
  });
  const userRef = firestore.doc(`users/${user.id}`);
  const previousInvestment = user.total_invested * 1 + trxData.amount * 1;
  batch.update(userRef, {
    total_invested: previousInvestment,
    investments: user.investments
      ? [
          ...user.investments,
          {
            code: investmentPackage.code,
            cost: investmentPackage.cost,
            invest_date,
          },
        ]
      : [
          {
            code: investmentPackage.code,
            cost: investmentPackage.cost,
            invest_date,
          },
        ],
  });
  // UPDATE TRANSACTION & SELF NOTIFICATION
  UpdateDatabaseNotification(user.id, {
    title: "Payment Alert!!!",
    investorMessage,
  });

  try {
    await batch.commit();
    cleanUp();
  } catch (error) {
    console.log("error creating sales", error.message);
    cleanUp();
  }
};

export const OnSendInvestorPaymentDates = async (
  investor,
  investment,
  cleanUp
) => {
  const batch = firestore.batch();
  const investmentRef = firestore
    .doc(`investments`)
    .collection(investor.id)
    .doc(investment.trxref);
  batch.update(investmentRef, investment);
  try {
    await batch.commit();
    cleanUp();
  } catch (error) {
    console.log(error.message);
  }
};
