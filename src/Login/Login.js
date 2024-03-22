import React, { useEffect, useState } from "react";
import RegisterUser from "../Utils/Auth/RegisterUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import logoutUser from "../Utils/Auth/logoutUser";
import LoginUser from "../Utils/Auth/LoginUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // *****************************************is registered user


  // useEffect(() => {
  //   const isRegisterdUser = () => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/auth.user
  //         const uid = user.uid;
  //         console.log("user ID-", uid);
  //         // ...
  //       } else {
  //         console.log("User is signed out or not registered");
  //         // ...
  //       }
  //     });
  //   };
  //   //isRegisterdUser();
  //   return () => isRegisterdUser();
  // }, []);

  // ***********************************************  Login**********

  const LoginComponent = () => {
    const navigate = useNavigate();
    const loginClickHandle = (e) => {
      e.preventDefault();
      const email = e.target["email"].value;
      const password = e.target["password"].value;

      LoginUser(email, password, navigate);

    };
    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 font-mono">Login</h2>

          <form onSubmit={loginClickHandle}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Login Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-full"
              type="submit"
            >
              Login
            </button>
            {/* logout Button */}
          </form>
          {/* <button
            onClick={() => logoutUser()}
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 rounded w-full"
            type="submit"
          >
            Log Out
          </button> */}

          {/* Not Registered? */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Not registered?{" "}
              <span
                className="text-blue-500 hover:text-blue-800 cursor-pointer "
                onClick={() => setSelectUi("register")}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ********************** ******************************************Register **************************************

  const RegisterComponent = () => {
    const navigate = useNavigate();
    const registerHandle = (e) => {
      e.preventDefault();

      const name = e.target["name"].value;
      const email = e.target["email"].value;
      const address = e.target["address"].value;
      const mobile = e.target["mobile"].value;
      const profile = e.target["profile"].value;
      const password = e.target["password"].value;
      const cpassword = e.target["repassword"].value;
      //console.log(name,email,address,password,cpassword)

      if (password === cpassword) {
        RegisterUser(email, password, name, address, mobile, profile, navigate);
      }
    };

    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>

          <form onSubmit={registerHandle}>
            <div className="flex flex-row gap-4">
              <div>
                {/* Name Input */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                {/* user address Input */}
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                {/* MobileNumber Input */}
                <div className="mb-4">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                {/* Profile Image Input */}
                <div className="mb-4">
                  <label
                    htmlFor="profile"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Profile Image
                  </label>
                  <input
                    type="text"
                    id="profile"
                    name="profile"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div>
                {/* Password Input */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                {/* re-Password Input */}
                <div className="mb-6">
                  <label
                    htmlFor="repassword"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Re-Password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-full"
              type="submit"
            >
              Register
            </button>
          </form>

          {/* Alredy Registered? */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Alredy registered?{" "}
              <span
                className="text-blue-500 hover:text-blue-800 cursor-pointer "
                onClick={() => setSelectUi("login")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ****************************************  return componenets *************

  const [selectUi, setSelectUi] = useState("login");
  return (
    <div>
      {selectUi === "login" ? <LoginComponent /> : <RegisterComponent />}
    </div>
  );
};

export default Login;
