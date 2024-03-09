import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const GetDataFromCollection = (collectionName,setFunction) => {
  getDocs(collection(db, collectionName))
    .then((querySnapshot) => {
        const dataArr=[]
        querySnapshot.forEach((doc) => {
            dataArr.push({...doc.data(),categoryId:doc.id})
            //console.log(doc.id, " => ", doc.data());
        // doc.data() is never undefined for query doc snapshots
        
    });
    console.log(dataArr)
    setFunction(dataArr)
})
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export default GetDataFromCollection;
