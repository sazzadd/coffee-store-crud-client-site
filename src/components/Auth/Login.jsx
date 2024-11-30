import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md p-8 shadow-lg border border-gray-300 rounded-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center text-sm">
          Please enter your details to sign in.
        </p>

        {/* Form */}
        <form className="mt-6">
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

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-sm font-medium text-purple-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500 mx-4">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Sign In with Google */}
          <button
            type="button"
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <img
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 font-medium">
              Sign in with Google
            </span>
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
