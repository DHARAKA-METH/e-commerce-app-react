import React, { useEffect } from "react";
import AppRouter from "./Routers/AppRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";

const App = () => {
  useEffect(() => {
    const isRegisterdUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log("user ID-", uid);
          // ...
        } else {
          console.log("User is signed out or not registered");
          // ...
        }
      });
    };
    //isRegisterdUser();
    return () => isRegisterdUser();
    // eslint-disable-next-line
  }, []);

  return <AppRouter />;
};

export default App;
