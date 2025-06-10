import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const MarathonDetails = () => {
  const marathon = useLoaderData();
  const navigate = useNavigate();

  const isRegistrationOpen =
    new Date() >= new Date(marathon.startRegistrationDate) &&
    new Date() <= new Date(marathon.endRegistrationDate);
  return (
    <div
      data-aos="fade-up"
      className="py-32 px-5 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 lg:gap-8"
    >
      <div className="flex-1">
        <img
          className="w-full h-full md:h-[450px] object-cover rounded-2xl"
          src={marathon.marathonImage}
          alt="group"
        />
      </div>
      <div className="space-y-3 flex-1">
        <h3 className="text-2xl dark:text-gray-300 text-gray-800 md:text-3xl specific-text font-bold">
          {marathon.marathonTitle}
        </h3>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <tbody>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Location
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.location}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Start Registration Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.startRegistrationDate}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                End Registration Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.endRegistrationDate}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Marathon Start Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.marathonStartDate}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Running Distance
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.runningDistance}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Total Registrations
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.registrationsCount}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Organizer Name
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.organizerName}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Organizer Email
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.organizerEmail}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-600 dark:text-gray-200 text-sm lg:text-lg max-h-26 overflow-y-auto pr-2">
          <strong>Description :</strong> {marathon.description}
        </p> 

        <button
          disabled={!isRegistrationOpen}
          onClick={() => navigate(`/registration/${marathon._id}`)}
          className={`mt-4 px-4 py-2 text-gray-300 dark:text-gray-800 specific-text text-sm md:text-xl rounded w-full ${
            isRegistrationOpen
              ? "bg-gray-800 dark:bg-gray-300 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isRegistrationOpen ? "Register Now" : "Registration Closed"}
        </button>
      </div>
    </div>
  );
};

export default MarathonDetails;
