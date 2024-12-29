import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQUw8Kgz4-b9dtFtt6YAhN6NoyFF15Beg",
  authDomain: "entregareactcoder.firebaseapp.com",
  projectId: "entregareactcoder",
  storageBucket: "entregareactcoder.firebasestorage.app",
  messagingSenderId: "847185957139",
  appId: "1:847185957139:web:2d8a9241a45d0cdfbdcae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
