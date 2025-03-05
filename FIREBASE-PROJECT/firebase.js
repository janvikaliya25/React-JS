// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhz4q3XdLHeCWIJid-t-4CfRoqxH20AVk",
  authDomain: "react-5f368.firebaseapp.com",
  projectId: "react-5f368",
  storageBucket: "react-5f368.firebasestorage.app",
  messagingSenderId: "83426999960",
  appId: "1:83426999960:web:ce8a07a4916c66c4095aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
export {auth,db}