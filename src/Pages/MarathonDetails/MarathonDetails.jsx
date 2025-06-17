import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useMarathonDetail from "../../Api/useMarathonDetail";
import MarathonCountdown from "./MarathonCountdown";

const MarathonDetails = () => {
  const { id } = useParams();
  const { marathonDetailPromise } = useMarathonDetail();
  const [marathon, setMarathon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    marathonDetailPromise(id)
      .then((data) => setMarathon(data))
      .catch((err) => console.log(err));
  }, [id, marathonDetailPromise]);

  const isRegistrationOpen =
    new Date() >= new Date(marathon.startRegistrationDate) &&
    new Date() <= new Date(marathon.endRegistrationDate);

  const startDateTime = marathon?.marathonStartDate
  ? new Date(marathon.marathonStartDate + "T00:00:00")
  : null;

   useEffect(() => {
    document.title = "Marathon Management | Marathon-Details";
  }, []);
  

  return (
    <div
      data-aos="fade-up"
      className="py-32 px-5 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-8 overflow-x-hidden"
    >
      <div className="flex-1">
        <img
          className="w-full h-full md:h-[450px] lg:h-[570px] object-cover rounded-2xl"
          src={marathon.marathonImage}
          alt="group"
        />
      </div>

      <div className="space-y-3 flex-1 px-2 lg:px-0">
        <h3 className="text-xl lg:text-2xl dark:text-purple-200 text-gray-600 md:text-3xl specific-text font-bold">
          {marathon.marathonTitle}
        </h3>

        {/* Countdown Timer */}
        
          {startDateTime && <MarathonCountdown startDate={startDateTime} />}
        

        <table className="w-full text-left border-separate border-spacing-y-2">
          <tbody>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Location
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.location}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Start Registration Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.startRegistrationDate}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                End Registration Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.endRegistrationDate}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Marathon Start Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.marathonStartDate}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Marathon Create Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.createdAt}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Running Distance
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.runningDistance}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Total Registrations
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {marathon.registrationsCount}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg ">
              <td className="font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                Organizer Name
              </td>
              <td className="text-gray-600 dark:text-gray-200 hidden lg:table-cell">
                : {marathon.organizerName}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                Organizer Email
              </td>
              <td className="text-gray-600 dark:text-gray-200 hidden lg:table-cell">
                : {marathon.organizerEmail}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-600 dark:text-gray-200 text-sm lg:text-lg max-h-20 overflow-y-auto pr-2">
          <strong>Description :</strong> {marathon.description}
        </p>

        <button
          disabled={!isRegistrationOpen}
          onClick={() =>
            navigate(`/registration/${marathon._id}`, {
              state: {
                title: marathon.marathonTitle,
                startDate: marathon.marathonStartDate,
                id: marathon._id,
              },
            })
          }
          className={`mt-4 px-4 py-3 text-white font-semibold specific-text text-sm md:text-xl rounded w-full ${
            isRegistrationOpen
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 cursor-pointer hover:from-purple-700 hover:to-indigo-700 rounded-2xl rounded-tl-none rounded-br-none"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isRegistrationOpen ? "Registration Now" : "Registration Closed"}
        </button>
      </div>
    </div>
  );
};

export default MarathonDetails;
