import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0lIboMbbrUM2hpk-RhyU6NkhEjJIBdj8",
  authDomain: "food-recipe-60e82.firebaseapp.com",
  projectId: "food-recipe-60e82",
  storageBucket: "food-recipe-60e82.appspot.com",
  messagingSenderId: "759320591567",
  appId: "1:759320591567:web:6893781272157ab71e4bba",
  measurementId: "G-6458QSHPG9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 