import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";
const dbData = {};

const GetDataFromCollection = (collectionName, setFunction) => {
  if (dbData[collectionName] && dbData[collectionName].length > 0) {
    setFunction(dbData[collectionName]);
  } else {
    getDocs(collection(db, collectionName))
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
        dbData[collectionName] = dataArr;
      })
      .catch((error) => {
         console.log("Error getting documents: ", error);
      });
  }
};

export default GetDataFromCollection;
