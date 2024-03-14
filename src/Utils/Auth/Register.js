import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import SetDataDocument from "../DataFetch/SetDataDocument";

const Register = (
  email,
  password,
  name,
  address,
  phoneNumber,
  profileImage
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      //console.log(user)
      const userDataSet = {
        name,
        address,
        phoneNumber,
        profileImage,
        uid: user.uid,
      };
      SetDataDocument("users", user.uid, userDataSet);
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

export default Register;
