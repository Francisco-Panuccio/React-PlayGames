import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsfXrU0pvZR8uRtpb58IKdOFrN1MGq_vQ",
  authDomain: "react-playgames.firebaseapp.com",
  projectId: "react-playgames",
  storageBucket: "react-playgames.appspot.com",
  messagingSenderId: "112675504428",
  appId: "1:112675504428:web:1232e969efb7da25846c89"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
