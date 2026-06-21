import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNn0HaZLX-21vNSnXhxZ8CUPS-uxQDFE8",
  authDomain: "ecomap-611ab.firebaseapp.com",
  projectId: "ecomap-611ab",
  storageBucket: "ecomap-611ab.firebasestorage.app",
  messagingSenderId: "548409473929",
  appId: "1:548409473929:web:ea360b0256a5414542bf58",
  measurementId: "G-SCZQP8TQ87"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);