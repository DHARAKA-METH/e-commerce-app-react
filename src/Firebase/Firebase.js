// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZ0mr24Gq-BC06E763KSrfAfIO2dYVc8",
  authDomain: "e-commerce-app-972e8.firebaseapp.com",
  projectId: "e-commerce-app-972e8",
  storageBucket: "e-commerce-app-972e8.appspot.com",
  messagingSenderId: "907205048606",
  appId: "1:907205048606:web:3afb7afc0af9db2610b10f",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
