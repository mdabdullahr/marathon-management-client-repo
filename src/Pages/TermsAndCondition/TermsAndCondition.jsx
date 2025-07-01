import React, { useEffect } from "react";

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = "Marathon Management | Terms-&-Condition";
  }, []);
  return (
    <div  data-aos="zoom-in" className="py-24 bg-white dark:bg-gray-900 px-5 lg:px-0">
      <div
        className="max-w-[1320px] mx-auto text-gray-300 p-6 space-y-4 mt-10 lg:mt-20 min-h-screen"
      >
        <h3
          className="text-2xl md:text-3xl specific-text font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Terms and Conditions
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Welcome to Event Explore. By accessing or using our website, you agree
          to be bound by these terms. Please read them carefully.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-400">
          <li>You must be at least 13 years old to use our platform.</li>
          <li>
            All content and materials on this platform are protected by
            copyright laws.
          </li>
          <li>
            You may not use the website for any illegal or unauthorized purpose.
          </li>
          <li>
            We reserve the right to terminate access to any user who violates
            these terms.
          </li>
          <li>
            All event details are for informational purposes only. We are not
            responsible for any inaccuracies or changes.
          </li>
        </ul>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
          If you have any questions about our terms, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
