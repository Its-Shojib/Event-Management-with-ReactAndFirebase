// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyASFUGKAwn6q_1ADsYlaqpVZiXkG5XkNgI",
  // authDomain: "event-management-e5ed0.firebaseapp.com",
  // projectId: "event-management-e5ed0",
  // storageBucket: "event-management-e5ed0.appspot.com",
  // messagingSenderId: "882043287116",
  // appId: "1:882043287116:web:9f89044bd6a052c14b66e9"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;