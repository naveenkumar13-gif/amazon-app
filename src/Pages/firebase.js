import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0LUy-FZq-eaFeQu9WbxFBaM4BQSLFSfU",
  authDomain: "clone-558c5.firebaseapp.com",
  projectId: "clone-558c5",
  storageBucket: "clone-558c5.firebasestorage.app",
  messagingSenderId: "939646833407",
  appId: "1:939646833407:web:5d1259879df41a2671f2ca",
  measurementId: "G-FTMNXSJGXB",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
