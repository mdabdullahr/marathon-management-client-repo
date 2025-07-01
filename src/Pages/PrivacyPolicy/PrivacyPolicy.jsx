import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Marathon Management | Privacy-Policy";
  }, []);
  
  return (
    <div data-aos="zoom-in" className="py-24 bg-white dark:bg-gray-900 px-5 lg:px-0">
      <div
        className="max-w-[1320px] mx-auto text-gray-300 p-6 space-y-4 mt-10 lg:mt-20 min-h-screen"
      >
        <h3
          className="text-2xl md:text-3xl specific-text font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Privacy Policy
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          At Marathon Management, we respect your privacy. This policy outlines what
          data we collect and how we use it.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-400">
          <li>
            We collect basic information such as name, email, and profile
            picture during registration.
          </li>
          <li>Your data is stored securely using Firebase Authentication.</li>
          <li>
            We do not sell or share your personal information with third
            parties.
          </li>
          <li>We use cookies to enhance your user experience and analytics.</li>
          <li>
            You have the right to request deletion of your account and data at
            any time.
          </li>
        </ul>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
          For any privacy-related concerns, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
