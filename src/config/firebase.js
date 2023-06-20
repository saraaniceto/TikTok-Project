import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAX7Jo3dtQhfUncFUG5I0wlpFVPBim48jY",
  authDomain: "tiktok---jornada-2e344.firebaseapp.com",
  projectId: "tiktok---jornada-2e344",
  storageBucket: "tiktok---jornada-2e344.appspot.com",
  messagingSenderId: "1068676420604",
  appId: "1:1068676420604:web:b70b2f42207107fd5ad879"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;