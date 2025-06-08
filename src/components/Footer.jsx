import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router";
import footerImage from "../assets/marathons-logo.png";

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
      className={`bg-cover bg-center ${
        isDark
          ? "bg-gradient-to-r from-gray-900 to-gray-800"
          : "bg-gradient-to-r from-white to-gray-100"
      }`}
    >
      <div
        data-aos="fade-up"
        className="w-11/12 lg:w-8/12 mx-auto pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-52"
      >
        {/* Left Section */}
        <div>
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              src={footerImage}
              alt=""
            />
            <h4
              className={`text-2xl md:text-4xl font-bold text-green-700 specific-text ${
                isDark ? "text-gray-400" : ""
              }`}
            >
              Marathon's Management
            </h4>
          </div>
          <p
            className={`text-xs md:text-lg mt-4 mb-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Marathon Management System is a full-featured platform for
            organizing, managing, and registering for marathon events. It
            supports role-based access, real-time updates, and a smooth
            experience for admins, organizers, and participants.
          </p>
        </div>

        {/* middle Section */}
        <div className="flex flex-col space-y-2">
          <h3
            className={`text-lg md:text-2xl font-semibold mt-8 mb-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Useful Links
          </h3>
          <p
            className={`text-sm md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
          </p>
          <p
            className={`text-sm md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </p>
          <p
            className={`text-sm md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <NavLink to="/">Home</NavLink>
          </p>
          <p
            className={`text-sm md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <NavLink to="/marathons">Marathons</NavLink>
          </p>
          <p
            className={`text-sm md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <NavLink to="/dashboard">Dashboard</NavLink>
          </p>
        </div>

        {/* Right section */}
        {/* Social Links */}
        <div>
          <h3
            className={`text-lg md:text-2xl font-semibold mt-8 mb-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Follow Us
          </h3>
          <div className="flex items-center gap-4 mt-4">
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
          <div>
            <h3
              className={`text-lg md:text-2xl font-semibold mt-8 mb-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get in Touch
            </h3>
            <div
              className={`space-y-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <MdPhone
                  className={`text-sm md:text-lg lg:text-2xl ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span className="text-sm md:text-lg">+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail
                  className={`text-sm md:text-lg lg:text-2xl ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span className="text-sm md:text-lg">hobbyhub@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn
                  className={`text-sm md:text-lg lg:text-2xl ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span className="text-sm md:text-lg">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
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
