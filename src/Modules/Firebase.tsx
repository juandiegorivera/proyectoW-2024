// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, updateEmail, updatePassword, onAuthStateChanged } from "firebase/auth"; //importa el auth de firebase
import { getFirestore, updateDoc } from "firebase/firestore"; // importa el Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCunCoky9_hTl_b_6Y-ghM8rTFMXg_bqS8",
  authDomain: "SecuroServ-76bfa.firebaseapp.com",
  projectId: "SecuroServ-76bfa",
  storageBucket: "SecuroServ-76bfa.appspot.com",
  messagingSenderId: "216499257638",
  appId: "1:216499257638:web:90e39ffd44feda804cc1e7",
  measurementId: "G-K7GVM1MSPL"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Inicializa Firebase Authentication
const auth = getAuth(app);

// Inicializa Firestore
const db = getFirestore(app); // Instancia de Firestore
const googleProvider = new GoogleAuthProvider();
export { auth, db, googleProvider, updateEmail, updatePassword, updateDoc, onAuthStateChanged}; // Exporta tanto auth como db
