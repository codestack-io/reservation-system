// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3IiZqcJ_0MhRMUUJnbOiWaYhOH2qD5Yc",
  authDomain: "reservation-system-dd05a.firebaseapp.com",
  projectId: "reservation-system-dd05a",
  storageBucket: "reservation-system-dd05a.firebasestorage.app",
  messagingSenderId: "849460832724",
  appId: "1:849460832724:web:4ef75d61e45a9b53038e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);