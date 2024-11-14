// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTo3NkNQ-0gIoO67ds4-RVTvAMKJwxOc0",
  authDomain: "auth-moha-milon-4d99a.firebaseapp.com",
  projectId: "auth-moha-milon-4d99a",
  storageBucket: "auth-moha-milon-4d99a.firebasestorage.app",
  messagingSenderId: "890045610415",
  appId: "1:890045610415:web:f3291fa7ed37504bac975a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);