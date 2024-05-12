import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "secret-chat-c8a24.firebaseapp.com",
  projectId: "secret-chat-c8a24",
  storageBucket: "secret-chat-c8a24.appspot.com",
  messagingSenderId: "677362463005",
  appId: "1:677362463005:web:a3e8649cbbe00adb78b1f4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()