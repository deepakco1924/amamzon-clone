import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDmzdRBMPFyTyKp_XsrSlURNHWB16Lyx0",
  authDomain: "clone-ca8fa.firebaseapp.com",
  projectId: "clone-ca8fa",
  storageBucket: "clone-ca8fa.appspot.com",
  messagingSenderId: "637014799098",
  appId: "1:637014799098:web:3b142b0381eb3541968f43",
  measurementId: "G-FZGS6KS3B0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
