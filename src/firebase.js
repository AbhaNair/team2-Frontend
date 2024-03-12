// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCes4mz1ivehiKHYtwenB6CwDpiLH4EirA",
  authDomain: "employeeportal-b2fa9.firebaseapp.com",
  projectId: "employeeportal-b2fa9",
  storageBucket: "employeeportal-b2fa9.appspot.com",
  messagingSenderId: "395795390253",
  appId: "1:395795390253:web:f0cee3e37b39f25d79bda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)