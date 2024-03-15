import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';

const logoutUser = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      alert("An error happened.", error);
    });
}

export default logoutUser
