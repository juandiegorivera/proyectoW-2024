// firebase.tsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, updateEmail, updatePassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCunCoky9_hTl_b_6Y-ghM8rTFMXg_bqS8",
  authDomain: "securoserv-76bfa.firebaseapp.com",
  databaseURL: "https://securoserv-76bfa-default-rtdb.firebaseio.com",
  projectId: "securoserv-76bfa",
  storageBucket: "securoserv-76bfa.firebasestorage.app",
  messagingSenderId: "216499257638",
  appId: "1:216499257638:web:90e39ffd44feda804cc1e7",
  measurementId: "G-K7GVM1MSPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Analytics

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, updateEmail, updatePassword, updateDoc, onAuthStateChanged };
