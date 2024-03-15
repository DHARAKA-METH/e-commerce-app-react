import { doc, getDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const getDataFromDocument = (collactionID,setFunction) => {
  const docRef = doc(db, "users", collactionID);
  getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        setFunction(doc.data())
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default getDataFromDocument;
