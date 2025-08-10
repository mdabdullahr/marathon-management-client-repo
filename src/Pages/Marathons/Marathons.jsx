import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import {Link} from "react-router";
import useAllMarathons from "../../Api/useAllMarathons";
import noData from "../../assets/Annimations/nodata.json";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Marathons = () => {
  const { allMarathonsPromise } = useAllMarathons();
  const [allMarathons, setAllMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [marathonCount, setMarathonsCount] = useState();
  const [itemsParPage, setItemsParPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
  axiosSecure.get("marathons-count")
    .then(res => {
      const {count} = res.data;
      setMarathonsCount(count);
    })
    .catch(err => {
      console.error(err);
    });
}, [axiosSecure]);

  
  useEffect(() => {
    allMarathonsPromise(sortOrder, currentPage, itemsParPage).then((data) => {
      setAllMarathons(data);
      setLoading(false);
    });
  }, [ sortOrder, currentPage, itemsParPage]);

  useEffect(() => {
    document.title = "Marathon Management | Marathons";
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-teal-500 border-t-transparent"></div>
      </div>
    );
  }

  const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    setItemsParPage(val);
    setCurrentPage(0);
  }

  const handlePrevPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if(currentPage < pages.length-1){
      setCurrentPage(currentPage + 1);
    }
  }

  const numberOfPages = Math.ceil(marathonCount/itemsParPage);
  const pages = [...Array(numberOfPages).keys()]
  

  return (
    <section className="min-h-screen">
      {allMarathons.length > 0 ? (
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
      focus:ring-teal-600 
      dark:focus:ring-teal-600
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-[1320px] mx-auto">
            {allMarathons.map((marathon) => (
              <div
                key={marathon._id}
                data-aos="fade-up"
                className="relative group bg-white dark:bg-gray-800 hover:shadow-2xl flex flex-col h-full overflow-hidden rounded-xl shadow"
              >
                {/* Shadow overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-300 pointer-events-none z-10 bg-teal-200"></div>

                {/* Image */}
                {marathon.marathonImage && (
                  <div
                    data-aos="zoom-in"
                    className="w-full h-48 overflow-hidden"
                  >
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
          <div className="flex justify-center mt-20 gap-2">
            <button onClick={handlePrevPage} className="px-3 py-1 rounded border bg-gray-500 dark:bg-gray-700 cursor-pointer">Prev</button>
            {pages.map(page => <button
             key={page} 
             onClick={() => setCurrentPage(page)}
             className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-teal-600 text-white"
                    : "border bg-gray-500 dark:bg-gray-700 cursor-pointer"
                }`}>{page + 1}</button>)}
                <button onClick={handleNextPage} className="px-3 py-1 rounded border bg-gray-500 dark:bg-gray-700 cursor-pointer">Next</button>
            <select className=" bg-gray-500 dark:bg-gray-700 rounded" value={itemsParPage} onChange={handleItemsPerPage} name="" id="">
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
        </div>
      ) : (
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
            <button className="px-4 py-2 bg-teal-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded cursor-pointer">
              Add Marathon
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Marathons;
