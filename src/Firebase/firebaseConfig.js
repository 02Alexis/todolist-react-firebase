// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkBFVAtQ8f-rmvg6CUw032w-BlPule_QE",
  authDomain: "example-front4.firebaseapp.com",
  projectId: "example-front4",
  storageBucket: "example-front4.appspot.com",
  messagingSenderId: "671096662584",
  appId: "1:671096662584:web:f9d61ff191a3120af714cd",
  // measurementId: "G-NT334YYGSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);