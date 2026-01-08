// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1wspVo74rAmgS3PWdabSKcTEFPiuaJXg",
  authDomain: "netflix-gpt-d3465.firebaseapp.com",
  projectId: "netflix-gpt-d3465",
  storageBucket: "netflix-gpt-d3465.firebasestorage.app",
  messagingSenderId: "602457537888",
  appId: "1:602457537888:web:ec51ed70b5d7155e263205",
  measurementId: "G-RGXVCN4TC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();