// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

