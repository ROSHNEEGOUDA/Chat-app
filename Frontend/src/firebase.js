import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGgkhDgMwqG8BCeCF7Hu4zc7Wy2eBoWRk",
  authDomain: "chat-app-d088c.firebaseapp.com",
  projectId: "chat-app-d088c",
  storageBucket: "chat-app-d088c.firebasestorage.app",
  messagingSenderId: "543266376660",
  appId: "1:543266376660:web:9ba58465f654d7e4ece441",
  measurementId: "G-JNE0EDK28E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, auth, db, rtdb };


