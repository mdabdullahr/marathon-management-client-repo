import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAllMarathons from "../../Api/useAllMarathons";
import noData from "../../assets/Annimations/nodata.json"
import Lottie from "lottie-react";

const Marathons = () => {
  const { allMarathonsPromise } = useAllMarathons();
  const [allMarathons, setAllMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allMarathonsPromise(sortOrder).then((data) => {
      setAllMarathons(data);
      setLoading(false)
    });
  }, [allMarathonsPromise, sortOrder]);

  useEffect(() => {
    document.title = "Marathon Management | Marathons";
  }, []);

  if(loading){
    return <div className="flex justify-center items-center min-h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
</div>
  }

  return (
    <>
    {
      allMarathons.length > 0 ? 
      <div className="min-h-screen py-32">
      {/* Sorting Dropdown */}
      <div className="mb-10 text-center">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="
      border 
      border-gray-300 
      dark:border-gray-600 
      rounded-md 
      p-2 
      bg-white 
      dark:bg-gray-700 
      text-gray-900 
      dark:text-gray-100
      focus:outline-none 
      focus:ring-2 
      focus:ring-indigo-600 
      dark:focus:ring-purple-600
      transition
      duration-200
    "
          aria-label="Sort marathons"
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      {/* Marathons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-[1300px] mx-auto">
        {allMarathons.map((marathon) => (
          <div
            key={marathon._id}
            data-aos="fade-up"
            className="relative group bg-white dark:bg-gray-800 rounded-3xl rounded-tl-none rounded-br-none shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col h-full overflow-hidden"
          >
            {/* Shadow overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-300 pointer-events-none z-10 bg-indigo-400"></div>

            {/* Image */}
            {marathon.marathonImage && (
              <div
                data-aos="zoom-in"
                className="w-full h-56 overflow-hidden rounded-t-3xl rounded-tl-none"
              >
                <img
                  src={marathon.marathonImage}
                  alt={marathon.marathonTitle}
                  className="w-full h-full object-cover rounded-t-3xl rounded-tl-none transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex flex-col justify-between flex-1 p-6 z-20 relative">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                  {marathon.marathonTitle}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-lg">
                  📍 {marathon.location}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg">
                  📅 Registration Start:{" "}
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    {new Date(
                      marathon.startRegistrationDate
                    ).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg">
                  📅 Registration End:{" "}
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
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

                <p className="text-gray-500 dark:text-gray-400 hidden lg:block">
                  🏁 Marathon Start Date:{" "}
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    {new Date(marathon.marathonStartDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>
                </p>
              </div>

              <Link
                to={`/marathon/${marathon._id}`}
                className="mt-2 lg:mt-6 block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-normal lg:font-semibold py-2 lg:py-3 text-sm lg:text-lg rounded-xl rounded-br-none transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
     : 
      <div className="pb-10 flex flex-col items-center justify-center min-h-screen">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <Lottie animationData={noData} loop={true} />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium text-gray-600 dark:text-gray-300 mt-4">
             No Available Marathon Here.
          </p>
          <p className="text-sm lg:text-lg 2xl:text-xl text-gray-400 dark:text-gray-500 mb-4 text-center my-4">
            Add a marathon to see marathons here.
          </p>
          <Link to="/dashboard/addMarathon">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded cursor-pointer">
              Add Marathon
            </button>
          </Link>
        </div>
    }
    </>
  );
};

export default Marathons;

