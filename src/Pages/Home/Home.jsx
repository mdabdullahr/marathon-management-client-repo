import React from "react";
import Slider from "./slider";
import Marathons from "./Marathons";
import UpcomingMarathons from "./UpcommingMarathon";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <Slider></Slider>
      <section data-aos="zoom-in" className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto mt-10 lg:mt-20">
        <h2 className="text-2xl text-green-500 md:text-4xl lg:text-5xl specific-text text-center font-bold">
          Marathons
        </h2>
        <p className="text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 dark:text-gray-400 max-w-7xl mx-auto">
          Discover some of the most exciting upcoming marathon events happening
          around you! Explore their location, dates, and essential details to
          find the perfect race that matches your pace. Don’t miss out —
          registration windows are limited, so be sure to secure your spot
          early.
        </p>
        <div className="mt-10 pb-10">
        <Marathons></Marathons>
        </div>
      </section>
      <section >
        <UpcomingMarathons></UpcomingMarathons>
      </section>
    </div>
  );
};

export default Home;
