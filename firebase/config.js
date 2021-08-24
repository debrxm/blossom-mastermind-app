import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM7dhWUH3wIHov9tZ7km-2vMQbyPe81s8",

  authDomain: "blossom-mastermind.firebaseapp.com",

  projectId: "blossom-mastermind",

  storageBucket: "blossom-mastermind.appspot.com",

  messagingSenderId: "375477053204",

  appId: "1:375477053204:web:cf2023cf3de92540148401",

  measurementId: "G-FWF39DDLJF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
// firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
firestore.enableNetwork();
export default firebase;
