import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkfpgLkwjFvcps8AlVEexss1WaSeTWDfY",
  authDomain: "reactchat-6b6d6.firebaseapp.com",
  projectId: "reactchat-6b6d6",
  storageBucket: "reactchat-6b6d6.appspot.com",
  messagingSenderId: "1001371103605",
  appId: "1:1001371103605:web:bcb7bd80c30edfb0a8a33c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
