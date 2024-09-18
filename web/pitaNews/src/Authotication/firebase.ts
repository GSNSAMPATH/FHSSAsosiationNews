import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKGFeAN17spgHYAYP0xuo_cGnyFaEr308",
  authDomain: "fhssassosiationnews.firebaseapp.com",
  projectId: "fhssassosiationnews",
  storageBucket: "fhssassosiationnews.appspot.com",
  messagingSenderId: "591570581742",
  appId: "1:591570581742:web:2af0a0d2582098b4601bff",
  measurementId: "G-DVSC8Y51CH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
