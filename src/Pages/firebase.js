import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0LUy-FZq-eaFeQu9WbxFBaM4BQSLFSfU",
  authDomain: "clone-558c5.firebaseapp.com",
  projectId: "clone-558c5",
  storageBucket: "clone-558c5.appspot.com", // updated value
  messagingSenderId: "939646833407",
  appId: "1:939646833407:web:5d1259879df41a2671f2ca",
  measurementId: "G-FTMNXSJGXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
