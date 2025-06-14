import React, { useEffect } from "react";
import Slider from "./slider";
import HomeMarathons from "./HomeMarathons";
import UpcomingMarathons from "./UpcommingMarathon";
import UpcomingMarathonTips from "./UpcomingMarathonTips";
import WhyJoinMarathon from "./WhyJoinMarathon";

const Home = () => {
  useEffect(() => {
    document.title = "Marathon Management | Home";
  }, []);
  return (
    <div className="transition-colors duration-500">
      <Slider></Slider>
      <section
        data-aos="zoom-in"
        className="mt-10 lg:mt-20"
      >
        <h2 className="text-2xl dark:text-purple-200 text-gray-600 md:text-3xl lg:text-4xl specific-text text-center font-bold">
          Marathon's
        </h2>
        <p className="text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 dark:text-gray-400 max-w-5xl mx-auto">
          Discover some of the most exciting upcoming marathon events happening
          around you! Explore their location, dates, and essential details to
          find the perfect race that matches your pace. Don’t miss out —
          registration windows are limited, so be sure to secure your spot
          early.
        </p>
        <div className="mt-16 pb-10">
          <HomeMarathons></HomeMarathons>
        </div>
      </section>
      <section>
        <UpcomingMarathons></UpcomingMarathons>
      </section>

      {/* extra section 1 */}
      <section>
        <UpcomingMarathonTips></UpcomingMarathonTips>
      </section>

      {/* extra section 2 */}
      <section>
        <WhyJoinMarathon></WhyJoinMarathon>
      </section>
    </div>
  );
};

export default Home;
