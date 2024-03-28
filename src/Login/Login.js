import React, { useEffect, useState } from "react";
import RegisterUser from "../Utils/Auth/RegisterUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import logoutUser from "../Utils/Auth/logoutUser";
import LoginUser from "../Utils/Auth/LoginUser";
import { useNavigate } from "react-router-dom";
import EmailValidation from "../Utils/Validation/EmailValidation";
import Loading from "../components/Loading/Loading";


const Login = () => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(['Something Went Wrong..'])
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
    const [loginLoader, setLoginLoader] = useState(false)
    const navigate = useNavigate();
    const loginClickHandle = (e) => {
      e.preventDefault();
      const email = e.target["email"].value;
      const password = e.target["password"].value;
      if (EmailValidation(email)) {
        LoginUser(email, password, navigate, setErrorMsg, setError, setLoginLoader);
      } else {
        setError(true)
        setErrorMsg(['invalid Email'])
      }

    };
    return (
      <> <div className="z-[1000]">{loginLoader && <Loading />}</div>
        <div className="bg-slate-50 h-screen flex justify-center items-center">
          <div className={`bg-white shadow-xl p-8 rounded w-96  ${error && 'border border-red-600'}`}>
            <h2 className={`text-2xl font-bold mb-4 font-mono ${error && 'text-red-500'} `}>Login</h2>

            <form onSubmit={loginClickHandle}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium text-gray-600 ${error && 'text-red-500'}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 p-2 w-full border rounded-md ${error && 'border border-red-600 text-red-600'}`}
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium text-gray-600 ${error && 'text-red-500 '}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`mt-1 p-2 w-full border rounded-md ${error && 'border border-red-600 text-red-600'}`}
                />
              </div>
              {/* error Message Display */}
              {error && <div className="flex justify-center mt-[-20px] p-1  text-red-500">
                {errorMsg.map((ele, index) => <p key={index}>{ele}</p>)}
              </div>}


              {/* Login Button  */}

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white  p-2 rounded w-full"
                type="submit"
              >
                Login
              </button>

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
      </>

    );
  };

  // ********************** ******************************************Register **************************************

  const RegisterComponent = () => {
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState([])
    const [regLoadin, setRegLoading] = useState(false)
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




      if (password === cpassword) {
        if (EmailValidation(email)) {
          RegisterUser(email, password, name, address, mobile, profile, navigate, setErrorMsg, setError, setRegLoading);
        } else {
          setError(true)
          setErrorMsg(['Invalid Email !'])
        }
      } else {
        setError(true)
        setErrorMsg(['Password not match !'])

      }
    };

    console.log('errorMsg.......', errorMsg)

    return (
      <>

        <div className="z-[1000]">{regLoadin && <Loading />}</div>
        <div className="bg-gray-200 h-screen flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <hr className="border-solid border-t-2 border-black" />

            <form className="mt-2" onSubmit={registerHandle}>
              <section id="section_1">
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
                    placeholder="Enter Your Name"
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
                  onBlur={((e)=>{
                    if(!(EmailValidation(e.target.value))){
                      setError(true)
                      setErrorMsg([e.target.value,'invalid Email ..!'])
                    }
                  })}
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter Your Email"
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
                    placeholder="Enter Your Address"
                  />
                </div>
                {/* register Button  */}
                <div className="flex justify-end">
                  <button
                    className=" bg-white hover:opacity-[0.5] text-black border-2 border-black font-semibold p-1 w-[30%] rounded-lg opacity-1.5 "
                    onClick={() => {
                      document.getElementById('section_1').style.display = 'none'
                      document.getElementById('section_2').style.display = 'block'
                    }}

                  >
                    Next
                  </button>

                </div>

              </section>


              <section className="hidden  " id="section_2">
                {/* MobileNumber Input */}
                <div className="mb-4 mt-2">
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
                    placeholder="Enter Your Mobile Number"

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
                    placeholder="Enter Your Profile Image Url"
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
                    placeholder="Password"
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
                    placeholder="Re-Type Password"
                  />
                </div>
                {/* register Button  */}
                <div className="flex justify-between">
                  <button
                    className=" bg-white hover:opacity-[0.5] text-black border-2 border-black font-semibold p-1 w-[30%] rounded-lg opacity-1.5 "
                    onClick={() => {
                      document.getElementById('section_1').style.display = 'block'
                      document.getElementById('section_2').style.display = 'none'
                    }}

                  >
                    Back
                  </button>
                  <button
                    onClick={() => registerHandle}
                    className=" bg-white hover:opacity-[0.5] text-black border-2 border-black font-semibold p-1 w-[30%] rounded-lg opacity-1.5 "

                  >
                    Register
                  </button>
                </div>

              </section>


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
              <div>{error&& errorMsg.map((ele,index)=><p className="text-red-500 mt-1" key={index}>{ele}</p>)}</div>
            </div>
          </div>
        </div>
      </>
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
