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
  navigate,
  setErrorMsg,
  setError
  

) => {
  createUserWithEmailAndPassword(auth, email, password, navigate)
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
        role: 'user'
      };
      SetDataDocument("users", user.uid, userDataSet);
      navigate("/")
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      if(error.message==='Firebase: Error (auth/email-already-in-use).'){
        setError(true)
        setErrorMsg(['Email already in use !'])
      }else if(error.message==='Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setError(true)
        setErrorMsg(['Password should be at least 6 characters !'])
      }else{
        setError(true)
        setErrorMsg([errorMessage])
      }
      console.log(errorMessage);
      // ..
    });
};

export default RegisterUser;
