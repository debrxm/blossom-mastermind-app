import firebase, { auth, firestore } from "./config";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log("It's a wrap bois");
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const usersRef = firebase.database().ref("users");
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, emailVerified, phoneNumber, uid } = userAuth;
    const joined = new Date();
    const data = {
      id: uid,
      email,
      emailVerified,
      phoneVerified: true,
      joined,
      location: "",
      gender: "",
      ...additionalData,
    };
    try {
      await userRef.set(data);
    } catch (error) {
      auth.currentUser.delete();
      console.log("Error creating user profile");
    }
  }
  return userRef;
};
