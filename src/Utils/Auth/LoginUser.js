import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const LoginUser = (email, password, navigate, setErrorMsg, setError, setLoginLoader) => {
  setLoginLoader(true)

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

      if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
        setError(true)
        setErrorMsg(['Password Incorrect or Email Not Registered!'])
      }
      //console.log(errorMessage);
    })
    .finally(() => {
      setLoginLoader(false)
    })

};

export default LoginUser;
