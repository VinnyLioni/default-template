// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3VAgeGrgAl7V9nIydUeW-bIDwyCOY0sg",
  authDomain: "gataticos-timetrack.firebaseapp.com",
  projectId: "gataticos-timetrack",
  storageBucket: "gataticos-timetrack.firebasestorage.app",
  messagingSenderId: "963082797008",
  appId: "1:963082797008:web:feafef4cd27f015ca1c3d5",
  measurementId: "G-NGQ765HJ58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
