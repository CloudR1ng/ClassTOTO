import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw4wFYBpW--wse_hrFUpcSLKPPQIkvMXg",
  authDomain: "classtoto3-9.firebaseapp.com",
  projectId: "classtoto3-9",
  storageBucket: "classtoto3-9.firebasestorage.app",
  messagingSenderId: "522595238940",
  appId: "1:522595238940:web:0eb8848d0617ec90ad8bd9",
  measurementId: "G-PQ3EWX23W9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addStudent() {
  try {
    const docRef = doc(db, "students", "30717");
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log("Adding student 30717 to Firestore...");
      await setDoc(docRef, {
        id: "30717",
        name: "30717 학생",
        password: "30717",
        tokens: 1000,
        bets: {
          "1": 0, "2": 0, "3": 0, "4": 0, "5": 0,
          "6": 0, "7": 0, "8": 0, "9": 0, "10": 0
        }
      });
      console.log("Student 30717 added successfully!");
    } else {
      console.log("Student 30717 already exists in Firestore.");
    }
  } catch (error) {
    console.error("Error updating database:", error);
  }
  process.exit(0);
}

addStudent();
