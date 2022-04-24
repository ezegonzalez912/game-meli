import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfm8zNhWZ-YNP5qpdDlYvEShSak7M4RPI",
  authDomain: "meligame-82631.firebaseapp.com",
  projectId: "meligame-82631",
  storageBucket: "meligame-82631.appspot.com",
  messagingSenderId: "465396801539",
  appId: "1:465396801539:web:e0e276ea5ab9b1847f2e36",
  measurementId: "G-9VLD3WTTC4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);