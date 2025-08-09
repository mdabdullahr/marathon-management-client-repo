import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import animation from "../../assets/Annimations/Animation - 1750046473761.json";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully Login!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error("Login fail" + error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          title: "Google Login Successfully...!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error("Google Login fail " + err.message);
      });
  };

  useEffect(() => {
    document.title = "Marathon Management | Login";
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Left Panel */}
      <div
        data-aos="fade-right"
        className="md:w-1/2 bg-indigo-200 text-white flex flex-col justify-center items-center p-10 text-center relative overflow-hidden"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl mb-5 font-semibold text-white mt-16 md:mt-0 h-[60px]">
          <Typewriter
            words={["Welcome to your Login Page"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <h1 className="text-4xl font-bold leading-tight mb-5 bg-teal-600 bg-clip-text text-transparent">
          Marathon Management System
        </h1>

        <p className="text-lg max-w-md mb-3 text-black h-[40px]">
          <Typewriter
            words={[
              "Join the best marathon event in your city!",
              "Easily register, track, and see results.",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <Lottie animationData={animation} loop={true}></Lottie>
      </div>

      {/* Right Panel */}
      <div
        data-aos="fade-left"
        className="md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <div className="bg-white dark:bg-gray-900 max-w-md w-full rounded-3xl shadow-lg p-6 lg:p-8 m-4 lg:m-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <div className="mb-6 text-center">
            <h2 className=" text-xl md:text-2xl lg:text-3xl font-extrabold text-teal-600 dark:text-teal-400">
              Login to your account
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm: lg:text-lg">
              Login with your information.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-teal-600 dark:text-teal-400">
                  <FaEnvelope />
                </span>
                <input
                  name="email"
                  ref={emailRef}
                  type="email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 font-medium">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-teal-600 dark:text-teal-400">
                  <FaLock />
                </span>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-teal-600 dark:text-teal-400"
                >
                  {showPassword ? <RiEyeCloseFill /> : <ImEye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:shadow-xl transition cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-teal-600 hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="divider text-gray-500 before:bg-gray-300 after:bg-gray-300 my-6">
            OR
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-700 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 512 512">
              <g>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
