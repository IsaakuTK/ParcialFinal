import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Formi } from "../types/Formi";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveform = async (form: Formi) => {
    try {
        const where = collection(db, "Forms");
        await addDoc(where, form);

        console.log("se añadió");
       
      } catch (error) {
        console.error(error);

      }
};

const getform = async (): Promise<Formi[]> => {
  const r: Formi[]=[];
  const querySnapshot = await getDocs(collection(db, "Forms"));
  querySnapshot.forEach((doc : any) => {
    console.log(`${doc.id} => ${doc.data()}`);
    r.push({
      ...doc.data(),

    } as Formi)
  });
  return r;
};

export default {
    saveform,
    getform
}