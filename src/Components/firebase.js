// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIcmF7WFTKVsYdRZ3DWqNufXMgzVqBy0",
  authDomain: "gigo-store.firebaseapp.com",
  projectId: "gigo-store",
  storageBucket: "gigo-store.appspot.com",
  messagingSenderId: "883731533471",
  appId: "1:883731533471:web:876bcce31dec4d396d9caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get fireStoore 
export const db = getFirestore(app);