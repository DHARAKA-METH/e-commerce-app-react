import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";
const dbData = {};

const GetDataFromSubCollection = (
  collectionName,
  documentId,
  subcollectionName,
  setFunction,
  setFunction2
) => {
  if (
    dbData[collectionName] &&
    dbData[collectionName][documentId] &&
    dbData[collectionName][documentId][subcollectionName] &&
    dbData[collectionName][documentId][subcollectionName].length > 0
  ) {
    setFunction(dbData[collectionName][documentId][subcollectionName]);
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
        // dbData[subcollectionName] = dataArr;

        if (dbData[collectionName]) {
          dbData[collectionName][documentId] = {
            ...dbData[collectionName][documentId],
            [subcollectionName]: dataArr,
          };
        } else {
          dbData[collectionName] = {
            ...dbData[collectionName],
            [documentId]: {
              [subcollectionName]: dataArr,
            },
          };
        }

        setFunction(dataArr);
        setFunction2(dbData);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  // if (dbData[subcollectionName] && dbData[subcollectionName].length > 0) {
  //   setFunction(dbData[subcollectionName]);
  // } else {
  //   getDocs(
  //     collection(db, `${collectionName}/${documentId}/${subcollectionName}`)
  //   )
  //     .then((querySnapshot) => {
  //       const dataArr = [];
  //       querySnapshot.forEach((doc) => {
  //         dataArr.push({ ...doc.data(), categoryId: doc.id });
  //         //console.log(doc.id, " => ", doc.data());
  //         // doc.data() is never undefined for query doc snapshots
  //       });
  //       //console.log("db data reading.....");
  //       //console.log(dataArr);
  //       dbData[subcollectionName] = dataArr;
  //       setFunction(dataArr);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // }
};

export default GetDataFromSubCollection;
