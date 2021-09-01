import firebase, { auth, firestore } from "./config";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, uid } = userAuth;
    const joined = new Date();
    const data = {
      id: uid,
      email,
      isAccountReady: false,
      phoneVerified: false,
      joined,
      location: "",
      gender: "",
      total_invested: 0,
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
export const onSubmitSetupForm = async (id, data, setLoading) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    try {
      await userRef.update(data);
      setLoading(false);
    } catch (error) {
      console.log("Error setting up user profile");
    }
  }
  return userRef;
};
