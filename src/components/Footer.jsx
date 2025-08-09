import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import footerImage from "../assets/running.png";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDark(classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-teal-600"
    >
      <div
        data-aos="fade-up"
        className="w-11/12 lg:w-8/12 mx-auto pt-10 md:pt-20 pb-6 md:pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 xl:gap-32 2xl:gap-42 items-start mt-20"
      >
        {/* 1. Left Section */}
        <div>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              src={footerImage}
              alt="Marathon Logo"
            />
            <h4 className="text-2xl font-bold bg-teal-600 bg-clip-text text-transparent specific-text">
              Marathon's Management
            </h4>
          </div>
          <p
            className="text-gray-200"
          >
            Marathon Management System is a full-featured platform for
            organizing, managing, and registering for marathon events.
          </p>
        </div>

        {/* 2. Useful Links */}
        <div className="flex flex-col space-y-2 mt-0 md:mt-5 text-gray-200">
          <h3
            className="text-lg md:text-xl font-semibold mb-4 text-white"
          >
            Useful Links
          </h3>
          <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/marathons">Marathons</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>

        {/* 3. Contact Section */}
        <div className="mt-0 lg:mt-5">
          <h3
            className="text-lg md:text-xl font-semibold mb-4 text-white"
          >
            Connect With Us
          </h3>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 rounded-full p-2"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <div
            className="space-y-4 text-gray-200"
          >
            <div className="flex items-center gap-3">
              <MdPhone className="text-xl" />
              <span className="text-sm md:text-base">+880 1927-785731</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-xl" />
              <span className="text-sm md:text-base">marathons@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-xl" />
              <span className="text-sm md:text-base">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* 4. Follow Us Section */}
        <div className="mt-0 lg:mt-5">
          {/* Email and Message Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Swal.fire({
                title: "Thanks for Messaging!",
                icon: "success",
                draggable: true,
              });
              e.target.reset();
            }}
            className="space-y-4"
          >
            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className={`w-full rounded-lg p-3 text-sm outline-none ${
                  isDark
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-200 text-gray-800 placeholder-gray-500"
                }`}
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                rows="3"
                placeholder="Type your message here..."
                required
                className={`w-full rounded-lg p-3 text-sm outline-none resize-none ${
                  isDark
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-200 text-gray-800 placeholder-gray-500"
                }`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-5 py-2 bg-teal-900 hover:opacity-90 text-white font-medium rounded-lg transition duration-300 text-sm cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`bg-cover bg-center ${
          isDark ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h5 className="text-xs md:text-lg text-gray-600 dark:text-gray-400 text-center py-5">
          © Marathons — All Rights Reserved
        </h5>
      </div>
    </div>
  );
};

export default Footer;
