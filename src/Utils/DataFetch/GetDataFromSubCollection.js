import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";
const dbData = {};

const GetDataFromSubCollection = (
  collectionName,
  documentId,
  subcollectionName,
  setFunction
) => {
  if (dbData[subcollectionName] && dbData[subcollectionName].length > 0) {
    setFunction(dbData[subcollectionName]);
  } else {
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
        dbData[subcollectionName] = dataArr;
        setFunction(dataArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
};

export default GetDataFromSubCollection;
