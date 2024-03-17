import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const LoginUser = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password, navigate)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/");
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export default LoginUser;
