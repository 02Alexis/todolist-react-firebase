import {
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../../Firebase/firebaseConfig";

  
const coleccionUsuarios = collection(db, "todos");