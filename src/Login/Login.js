import { useRef } from "react";
import { useDispatch } from "react-redux";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../Firebase/Firebase";
import { addUser } from "../Store/ReduxSlice/UserSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const loginSubmit = () => {
    const q = query(collection(db, "users"), where("username", "==", "admin"));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dispatch(addUser(doc.data()))
        navigate("/admin")
        
      });
    });
  };
  const usernameRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="mt-5 flex flex-col items-center space-y-4">
      <input
        ref={usernameRef}
        type="text"
        placeholder="Username"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={loginSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
