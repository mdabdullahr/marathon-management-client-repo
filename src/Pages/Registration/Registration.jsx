import React, { useContext } from "react";
import { useLocation } from "react-router";
import {AuthContext} from "../../Provider/AuthProvider.jsx"
import axios from "axios";

const Registration = () => {
    const {user} = useContext(AuthContext);
  const location = useLocation();
  const { title, startDate } = location.state || {};
  
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const RegistrationObj = Object.fromEntries(formData.entries());
    console.log(RegistrationObj);

    // Sent data to db
    axios.post("")
  }
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 shadow-md shadow-gray-300 dark:shadow-gray-800 rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white specific-text">
            Marathon Registration
          </h2>

          <form onSubmit={handleRegistration} className="space-y-5">
            {/* Row 1: Email */}
            <div className="w-full">
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                readOnly
                className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Row 2: Marathon Title + Start Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="marathonTitle"
                  value={title || ""}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Start Date
                </label>
                <input
                  type="text"
                  name="startDate"
                  value={startDate || ""}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Row 3: First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Row 4: Contact Number */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                required
                className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Row 5: Additional Info */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Additional Info (optional)
              </label>
              <textarea
                name="additionalInfo"
                rows="4"
                placeholder="Mention any medical info, preferences, or message to organizer..."
                className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-medium transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
