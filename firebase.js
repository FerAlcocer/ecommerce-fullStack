// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiprrmcFyNds_jpmMJRBAK68VkpjU1WEg",
  authDomain: "next-ecommerce-387215.firebaseapp.com",
  projectId: "next-ecommerce-387215",
  storageBucket: "next-ecommerce-387215.appspot.com",
  messagingSenderId: "99355855863",
  appId: "1:99355855863:web:45e70c8855138d081cbcf2",
  measurementId: "G-JGFSWDWG6W",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
