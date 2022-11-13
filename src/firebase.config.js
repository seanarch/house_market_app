// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxVsIuxOQkZQ-uiTf_EXfZk5OFGU5gVdQ",
  authDomain: "house-marketplace-app-88ee1.firebaseapp.com",
  projectId: "house-marketplace-app-88ee1",
  storageBucket: "house-marketplace-app-88ee1.appspot.com",
  messagingSenderId: "429010428190",
  appId: "1:429010428190:web:5ff59e6ac05edf30e7e90f"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig)
export const db = getFirestore()