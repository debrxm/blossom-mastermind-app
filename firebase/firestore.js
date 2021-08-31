import { firestore } from "./config";
import { SendNotification } from "../utils/helper";

// const salesRef = firestore.doc(`sales/${userId}/sales/${id}`);
// const userRef = firestore.doc(`users/${userId}`);
const adminRef = firestore.doc(`admins/blossom_mastermind`);

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
  // const adminSnap = await adminRef.get();
  // if (adminSnap.exists) {
  //   console.log("got userRef");
  //   sent = true;
  //   UpdateNotification(
  //     "blossom_mastermind",
  //     { title: "Payment Alert!!!", adminMessage },
  //     {
  //       token: adminSnap.data().notificationToken,
  //       channelId: "paymentAlert",
  //       title: "Payment Alert!!!",
  //       body: adminMessage,
  //     }
  //   );
  // }
  // UPDATE INVESTMENTS
  // const packageRef = firestore.doc(`package/${investmentPackage.code}`).get();
  const investmentRef = firestore
    .collection("investments")
    .doc(user.id)
    .collection("investments")
    .doc();
  const hasInvestedBefore = investmentPackage.investors[user.id] === true;
  // if (!hasInvestedBefore) {
  //   const oldInvestors = investmentPackage.investors
  //   oldInvestors[user.id] = true
  //   batch.update(packageRef.ref, {
  //     investors: oldInvestors,
  //     no_of_investors: packageRef.no_of_investors + 1,
  //   });
  // }
  batch.set(investmentRef, investmentPackage);
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

// SendNotification("pushNotificationData");
// UpdateNotification("userToNotifyId", "notificationDataForDatabase", "phoneNotificationData")
// UpdateNotification(
//   ownerId,
//   { title: "Product Alert!!!", message },
//   {
//     token: userSnap.data().notificationToken,
//     channelId: "productAlert",
//     title: "Product Alert!!!",
//     body: message,
//   }
// );
