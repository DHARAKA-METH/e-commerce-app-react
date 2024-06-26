import { doc, getDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const getDataFromDocument = (collactionPath, docID, setFunction) => {
  const docRef = doc(db, collactionPath, docID);
  getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        // console.log("Document data:", doc.data());
        setFunction(doc.data());
      } else {
        // doc.data() will be undefined in this case

        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default getDataFromDocument;
