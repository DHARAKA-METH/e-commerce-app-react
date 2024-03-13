import React, { useState } from "react";

const Login = () => {
  // ***********************************************  Login**********

  const LoginComponent = () => {
    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>

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

    const registerHandle=(e)=>{

      e.preventDefault()
      console.log(e.target[0].value)
    }

    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>

          <form onSubmit={registerHandle}>
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
