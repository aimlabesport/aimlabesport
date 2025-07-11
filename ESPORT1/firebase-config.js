// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ839gLGlK3hk64lYqvLEJsKn-LG30CJU",
  authDomain: "aimlab-esport-55fa5.firebaseapp.com",
  projectId: "aimlab-esport-55fa5",
  storageBucket: "aimlab-esport-55fa5.firebasestorage.app",
  messagingSenderId: "899900958561",
  appId: "1:899900958561:web:e3f85c907963e312ea0720",
  measurementId: "G-037GSX60KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);