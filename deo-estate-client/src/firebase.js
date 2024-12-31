// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deo-estate.firebaseapp.com",
  projectId: "deo-estate",
  storageBucket: "deo-estate.firebasestorage.app",
  messagingSenderId: "606240955535",
  appId: "1:606240955535:web:c241badc916bc95261e4fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
