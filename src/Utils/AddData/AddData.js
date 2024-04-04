import { doc, setDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

//"Category/Category5/Category5"
const addData = (
  path,
  title,
  description,
  img,
  img1,
  img2,
  img3,
  Rating,
  price,
  setLoading,
  setAdddataError
) => {
  setLoading(true);
  setDoc(doc(db, path, title), {
    description,
    title,
    img,
    img3,
    img2,
    img1,
    Rating,
    price,
  })
    .then(() => {
      console.log("Document written with ID: ");
      setAdddataError(["Document written with ID:"]);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      setAdddataError([error]);
    })
    .finally(() => {
      setLoading(false);
    });
};

export default addData;
