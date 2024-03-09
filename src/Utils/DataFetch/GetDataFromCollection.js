import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const GetDataFromCollection = (collectionName) => {
  getDocs(collection(db, collectionName))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export default GetDataFromCollection;
