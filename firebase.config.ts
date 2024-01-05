// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJXEp1WRmmLPtIsea2t9rOaHltigYmXE",
  authDomain: "beereport-9666b.firebaseapp.com",
  projectId: "beereport-9666b",
  storageBucket: "beereport-9666b.appspot.com",
  messagingSenderId: "587303788007",
  appId: "1:587303788007:web:8b7117a90a78cb1391b142",
  measurementId: "G-4HY0SSG6B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };