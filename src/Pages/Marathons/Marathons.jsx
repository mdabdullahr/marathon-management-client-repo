import React from "react";
import { Link, useLoaderData } from "react-router";

const Marathons = () => {
  const allMarathons = useLoaderData();

  return (
    <div className="min-h-scree py-32 w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allMarathons.map((marathon) => (
          <div
            key={marathon._id}
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            {marathon.marathonImage && (
              <div
                data-aos="zoom-in"
                className="w-full h-48 overflow-hidden rounded-xl"
              >
                <img
                  src={marathon.marathonImage}
                  alt="card image"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-95"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="space-y-3 px-1 mt-2">
              {/* Card Heading */}
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white specific-text">
                {marathon.marathonTitle}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                📍 {marathon.location}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                📅 Registration Start : {marathon.startRegistrationDate} 
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                📅 Registration End : {marathon.endRegistrationDate} 
              </p>

              {/* View Details Button */}
              <Link
                to={`/marathon/${marathon._id}`}
                className="inline-block w-full text-center bg-gray-700 hover:bg-gray-900 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-300 dark:text-gray-800 font-medium py-2 rounded-lg transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
