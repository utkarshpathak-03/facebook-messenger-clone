import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyD0Qa1mACNRzEWU2d5gB6Els6fJNNy3-WQ",
  authDomain: "facebook-messenger-clone-b679c.firebaseapp.com",
  projectId: "facebook-messenger-clone-b679c",
  storageBucket: "facebook-messenger-clone-b679c.appspot.com",
  messagingSenderId: "5150370785",
  appId: "1:5150370785:web:56589762432e1af4fe80a0",
  measurementId: "G-ZLFYLFQF6L",
});

const db = firebaseApp.firestore();

export default db;
