import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9si1CZ2qkA9YvsRY_UKW3zSqfVyK4ebQ",
  authDomain: "clone-react-1f23c.firebaseapp.com",
  projectId: "clone-react-1f23c",
  storageBucket: "clone-react-1f23c.appspot.com",
  messagingSenderId: "760814295302",
  appId: "1:760814295302:web:e99c0a75528628fd252687",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
