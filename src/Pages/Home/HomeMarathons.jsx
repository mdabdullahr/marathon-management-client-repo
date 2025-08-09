import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import noData from "../../assets/Annimations/nodata.json";

const HomeMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://marathone-management-server.vercel.app/limit-marathons")
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-teal-500 border-t-transparent"></div>
      </div>
    );
  }
  return (
    <section>
      {marathons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-[1320px] mx-auto">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              data-aos="fade-up"
              className="relative group bg-white dark:bg-gray-800 hover:shadow-2xl flex flex-col h-full overflow-hidden rounded-xl shadow"
            >
              {/* Shadow overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-300 pointer-events-none z-10 bg-teal-200"></div>

              {/* Image */}
              {marathon.marathonImage && (
                <div data-aos="zoom-in" className="w-full h-48 overflow-hidden">
                  <img
                    src={marathon.marathonImage}
                    alt={marathon.marathonTitle}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                </div>

                <Link
                  to={`/marathon/${marathon._id}`}
                  className="mt-2 md:mt-6 block w-full text-center bg-teal-600 text-white text-sm lg:text-lg py-2 rounded-xl"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
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
            <button className="px-4 py-2 bg-teal-600 text-white rounded cursor-pointer">
              Add Marathon
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default HomeMarathons;
