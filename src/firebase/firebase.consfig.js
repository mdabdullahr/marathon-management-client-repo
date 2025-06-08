
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAeOb2t7IgU_RZN8NtxGZF7Mobuy80y2IA",
  authDomain: "marathons-management.firebaseapp.com",
  projectId: "marathons-management",
  storageBucket: "marathons-management.firebasestorage.app",
  messagingSenderId: "1064699316639",
  appId: "1:1064699316639:web:f95e845adcebcaf977d5aa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);