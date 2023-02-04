import { initializeApp } from "firebase/app";

// firestore
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from "firebase/firestore";
import { BaseType } from "../../types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI2-oy3e6YiTVLXLGoupjKhRR3CkQKMZk",
  authDomain: "portfolio-db-cd506.firebaseapp.com",
  projectId: "portfolio-db-cd506",
  storageBucket: "portfolio-db-cd506.appspot.com",
  messagingSenderId: "45711969279",
  appId: "1:45711969279:web:42f03d80d720037fc9b5ca",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export const getDocuments = async <T>(
  collectionKey: string
): Promise<T[] | void> => {
  try {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapShot) => docSnapShot.data() as T);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getProfileFromFirebase = async <T>(): Promise<T | void> => {
  try {
    const collectionRef = collection(db, "profile");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.reduce((acc, curr) => {
      acc[curr.id] = curr.data();
      return acc;
    }, {} as any);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const addCollectionAndDocuments = async <T extends BaseType>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.id);
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Done");
  } catch (error) {
    console.log("error: ", error);
  }
};
