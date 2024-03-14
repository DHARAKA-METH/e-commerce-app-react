import { doc, setDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const SetDataDocument = (collectionPath, docId, dataSet) => {
  setDoc(doc(db, collectionPath, docId), dataSet)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export default SetDataDocument;
