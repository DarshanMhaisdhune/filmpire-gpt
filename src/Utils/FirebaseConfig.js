// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVO1X9fBcHLzT3B_sDYiAHgvIzKbjkVBg",
  authDomain: "filmpire-gpt.firebaseapp.com",
  projectId: "filmpire-gpt",
  storageBucket: "filmpire-gpt.appspot.com",
  messagingSenderId: "461084813535",
  appId: "1:461084813535:web:770082ed38032dd9b2616a",
  measurementId: "G-VMFGFX8ZTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();