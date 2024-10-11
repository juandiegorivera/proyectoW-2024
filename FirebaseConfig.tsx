// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCunCoky9_hTl_b_6Y-ghM8rTFMXg_bqS8",
  authDomain: "securoserv-76bfa.firebaseapp.com",
  projectId: "securoserv-76bfa",
  storageBucket: "securoserv-76bfa.appspot.com",
  messagingSenderId: "216499257638",
  appId: "1:216499257638:web:90e39ffd44feda804cc1e7",
  measurementId: "G-K7GVM1MSPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
