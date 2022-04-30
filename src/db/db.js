import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYfe0_o2umRP5x2We8QcLlchNnK-wb8pg",
  authDomain: "game-store-e4771.firebaseapp.com",
  projectId: "game-store-e4771",
  storageBucket: "game-store-e4771.appspot.com",
  messagingSenderId: "293628807745",
  appId: "1:293628807745:web:3362d4f0d17257dc7cd4c0",
  measurementId: "G-SG72017V5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;