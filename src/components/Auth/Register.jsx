import React, { useContext, useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLock,
  AiOutlineUser,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { createNewUser } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // handle submeet button
  const handleSignUp = (e) => {
    e.preventDefault();
    // const form = new FormData(e.target);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password, name);
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        const newUser = { name, email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log(`user created db `, data);
          });
      })
      .catch((error) => {
        console.log("errror", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md p-8 shadow-lg border border-gray-300 rounded-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create an Account
        </h1>
        <p className="text-gray-600 text-center text-sm">
          Please fill in your details to register.
        </p>

        {/* Form */}
        <form onSubmit={handleSignUp} className="mt-6">
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <AiOutlineUser
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Enter your username"
                className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <MdEmail
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <AiOutlineLock
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-400 focus:outline-none"
              >
                {passwordVisible ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>

            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Sign In with Google */}
          {/* <button
            type="button"
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <img
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button> */}
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
