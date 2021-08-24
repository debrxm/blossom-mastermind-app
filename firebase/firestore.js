import { firestore } from "./config";
import { SendNotification } from "../utils/helper";

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
