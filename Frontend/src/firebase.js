import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyCGgkhDgMwqG8BCeCF7Hu4zc7Wy2eBoWRk",
  authDomain: "chat-app-d088c.firebaseapp.com",
  projectId: "chat-app-d088c",
  storageBucket: "chat-app-d088c.firebasestorage.app",
  messagingSenderId: "543266376660",
  appId: "1:543266376660:web:9ba58465f654d7e4ece441",
  measurementId: "G-JNE0EDK28E"
};
=======
    apiKey: "AIzaSyA2Jgrf76jC9aVbhuFs2l2cs9T0cNTSkrk",
    authDomain: "chat-app-60fb9.firebaseapp.com",
    projectId: "chat-app-60fb9",
    storageBucket: "chat-app-60fb9.firebasestorage.app",
    messagingSenderId: "630548682032",
    appId: "1:630548682032:web:d745645f4324470ef9a4f5",
    measurementId: "G-5HCB7TK5V4"
  };
>>>>>>> 45dc142 (this is my first commit)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

<<<<<<< HEAD
export { app, auth, db, rtdb };
=======
export {app, auth, db, rtdb };
>>>>>>> 45dc142 (this is my first commit)
