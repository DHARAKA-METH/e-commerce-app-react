import React, { useEffect } from "react";
import AppRouter from "./Routers/AppRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import getDataFromDocument from "./Utils/DataFetch/getDataFromDocument";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Store/ReduxSlice/UserSlice";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.UserSlice.user);
  console.log("userDataOnStore...", userData);
  useEffect(() => {
    const isRegisterdUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log("user ID-", uid);
          getDataFromDocument("users", uid, (dataSet) => {
            dispatch(addUser(dataSet));
          });

        } else {
          console.log("User is signed out or not registered");
          dispatch(removeUser());

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
