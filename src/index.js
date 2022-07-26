// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/firebase-app";
import { getAuth, onAuthStateChanged } from "firebase/firebase-auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU_B08AaxyNhKWqMBvYuNtMFE3ZnYwbhI",
  authDomain: "continuity-80115.firebaseapp.com",
  projectId: "continuity-80115",
  storageBucket: "continuity-80115.appspot.com",
  messagingSenderId: "355254181169",
  appId: "1:355254181169:web:2f858d11c93f35dcdee410",
  measurementId: "G-VNSSMN25DW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});

module.exports = { db };
