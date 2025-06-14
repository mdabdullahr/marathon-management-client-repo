import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAllMarathons from "../../Api/useAllMarathons";

const Marathons = () => {
  const { allMarathonsPromise } = useAllMarathons();
  const [allMarathons, setAllMarathons] = useState([]);

  useEffect(() => {
    allMarathonsPromise()
    .then(data => {
      setAllMarathons(data)
    });
  }, [allMarathonsPromise]);

  useEffect(() => {
      document.title = "Marathon Management | Marathons";
    }, []);

  return (
    <div className="min-h-scree py-32 w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allMarathons.map((marathon) => (
          <div
            key={marathon._id}
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            {marathon.marathonImage && (
              <div
                data-aos="zoom-in"
                className="w-full h-56 overflow-hidden rounded-t-3xl"
              >
                <img
                  src={marathon.marathonImage}
                  alt={marathon.marathonTitle}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {marathon.marathonTitle}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 font-medium">
                📍 {marathon.location}
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                📅 Registration:{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  {new Date(marathon.startRegistrationDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}{" "}
                  –{" "}
                  {new Date(marathon.endRegistrationDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </span>
              </p>

              {/* View Details Button */}
              <Link
                to={`/marathon/${marathon._id}`}
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
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
