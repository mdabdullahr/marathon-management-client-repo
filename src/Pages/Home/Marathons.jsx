import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/marathons")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching marathons:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading marathons...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {marathons.map((marathon) => (
        <div
          key={marathon._id}
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
        >
          {/* Image */}
          {marathon.image && (
            <div
              data-aos="zoom-in"
              className="w-full h-48 overflow-hidden rounded-xl"
            >
              <img
                src={marathon.image}
                alt="card image"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-95"
              />
            </div>
          )}

          {/* Text Content */}
          <div className="space-y-3 px-1 mt-2">
            {/* Card Heading */}
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white specific-text">
              {marathon.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              📍 {marathon.location}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              📅 Registration: {marathon.registrationStart} –{" "}
              {marathon.registrationEnd}
            </p>

            {/* View Details Button */}
            <Link
              to={`/marathon-details/${marathon._id}`}
              className="inline-block w-full text-center bg-gray-700 hover:bg-gray-900 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-300 dark:text-gray-800 font-medium py-2 rounded-lg transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marathons;
