import { FaEnvelope, FaLock, FaPhotoVideo, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import animation from "../../assets/Annimations/Animation - 1750046473761.json";
import Lottie from "lottie-react";

const Register = () => {
  const { createUser, updateUser, setUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              title: "Register Successfully...!",
              icon: "success",
              draggable: true,
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Register fail" + errorMessage);
      });
  };

  useEffect(() => {
    document.title = "Marathon Management | Register";
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Left Panel */}
      <div data-aos="fade-right" className="md:w-1/2 bg-indigo-200 text-white flex flex-col justify-center items-center p-10 text-center relative overflow-hidden">
        {/* Black overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-30 z-10"></div> */}

        <p className="text-2xl md:text-3xl lg:text-4xl mb-5 font-semibold text-white mt-16 md:mt-0 h-[60px]">
          <Typewriter
            words={[
              "Welcome to your Registration Page",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        
        <h1 className="text-4xl font-bold leading-tight mb-5 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Marathon Management System
        </h1>

        <p className="text-lg max-w-md mb-3 text-black h-[40px]">
          <Typewriter
            words={[
              "Open a new account",
              "Participate in the marathon",
              "Track results",
              "Register and get started",
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
      <div data-aos="fade-left" className="md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-900 max-w-md w-full rounded-3xl shadow-lg p-6 lg:p-8 m-4 lg:m-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-600 dark:text-purple-400">
              Create a new account
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm lg:text-xl">
             Register by filling out the form below.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 font-medium">Name</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-indigo-600 dark:text-purple-400">
                  <FaUser />
                </span>
                <input
                  name="name"
                  type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                Photo URL
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-indigo-600 dark:text-purple-400">
                  <FaPhotoVideo />
                </span>
                <input
                  name="photo"
                  type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your photo URL"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-indigo-600 dark:text-purple-400">
                  <FaEnvelope />
                </span>
                <input
                  name="email"
                  type="email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 font-medium">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-indigo-600 dark:text-purple-400">
                  <FaLock />
                </span>
                <input
                  name="password"
                  type="password"
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-xl transition cursor-pointer"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-purple-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
