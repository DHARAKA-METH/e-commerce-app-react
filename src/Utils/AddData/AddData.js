import { doc, setDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const addData = () => {
    setDoc(doc(db, "Category/Category5/Category5", "Category5_item2"), {
      title: "Category5_item2",
      description:"Essential T-Shirt Shirt - Pure White Cotton Jersey",
      
      img: "https://www.batchmens.com/cdn/shop/files/EssentialWhiteJerseySpread_720x.jpg?v=1686752412",
      img3:"https://www.batchmens.com/cdn/shop/files/EssentialWhiteJerseySitting_720x.jpg?v=1686752412",
      img2:"https://www.batchmens.com/cdn/shop/products/Essential-LS-Shirt-White-Jersey_720x.jpg?v=1673645522",
      img1:"https://www.batchmens.com/cdn/shop/products/Essential-LS-Shirt-White-Jersey-Close-Up_720x.jpg?v=1686752412",
      Rating: "4",
      price:"1000"
    })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  export default addData;