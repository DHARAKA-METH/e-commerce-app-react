import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";
//const dbData = {};

const GetDataFromSubCollection = (
  collectionName,
  documentId,
  subcollectionName,
  setFunction
) => {
  getDocs(
    collection(db, `${collectionName}/${documentId}/${subcollectionName}`)
  )
    .then((querySnapshot) => {
      const dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), categoryId: doc.id });
        //console.log(doc.id, " => ", doc.data());
        // doc.data() is never undefined for query doc snapshots
      });
      //console.log("db data reading.....");
      //console.log(dataArr);
      setFunction(dataArr);
      //dbData[collectionName] = dataArr;
    })
    .catch((error) => {
      // console.log("Error getting documents: ", error);
    });
};

export default GetDataFromSubCollection;
