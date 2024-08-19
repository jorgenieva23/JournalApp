import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB6q0dhgGsWmO0OD22kKoI44dpDcA5T9fU",
  authDomain: "marine-proposal-365513.firebaseapp.com",
  projectId: "marine-proposal-365513",
  storageBucket: "marine-proposal-365513.appspot.com",
  messagingSenderId: "197992556721",
  appId: "1:197992556721:web:c65cfb6c02b27ff4be9a90",
  measurementId: "G-FXRFTW84Z7",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, db, auth, googleAuthProvider };
