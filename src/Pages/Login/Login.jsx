import React, { useState } from "react";
import { Link } from "react-router";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ImEye } from 'react-icons/im';
import { RiEyeCloseFill } from 'react-icons/ri';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/KjBqJPg2/marathons2.jpg')`, // scenic bg
      }}
    >
      <div
        data-aos="zoom-in"
        className="transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md text-white shadow shadow-white "
      >
        <div className=" mb-4">
          <h2 className="text-2xl text-center font-bold">Login</h2>
        </div>

        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block mb-1">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-white opacity-70">
                <FaEnvelope />
              </span>
              <input
                name="email"
                type="email"
                className="w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-white opacity-70">
                <FaLock />
              </span>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-4 py-2 rounded-md border bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white absolute top-4 right-3 cursor-pointer"
                >
                  {showPassword ? <RiEyeCloseFill /> : <ImEye size={15} />}
                </button>
              </div>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-400" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="underline font-semibold">
            Register
          </Link>
        </p>
        <div className="divider text-white before:bg-white after:bg-white">
          OR
        </div>

        {/* Google Login */}
        <button
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
