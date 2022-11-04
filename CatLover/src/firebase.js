import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMap5bhYRrp4bXGjPurBCaV6jUnSzc9vc",
  authDomain: "challenge-9e9bc.firebaseapp.com",
  databaseURL: "https://challenge-9e9bc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challenge-9e9bc",
  storageBucket: "challenge-9e9bc.appspot.com",
  messagingSenderId: "896340948476",
  appId: "1:896340948476:web:cab2ce3784ce86876e2e79",
  measurementId: "G-RE1XKLQ5QQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };