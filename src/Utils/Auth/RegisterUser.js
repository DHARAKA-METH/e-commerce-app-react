import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import SetDataDocument from "../DataFetch/SetDataDocument";

const RegisterUser = (
  email,
  password,
  name,
  address,
  phoneNumber,
  profileImage,
  navigate
) => {
  createUserWithEmailAndPassword(auth, email, password,navigate)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      //console.log(user)
      const userDataSet = {
        name,
        address,
        email,
        phoneNumber,
        profileImage,
        uid: user.uid,
        role:'user'
      };
      SetDataDocument("users", user.uid, userDataSet);
      navigate("/")
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

export default RegisterUser;
