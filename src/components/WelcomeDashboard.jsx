import React from "react";
import welcome from "../assets/Annimations/dashboard.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

const WelcomeDashboard = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center min-h-[300px]">
      <h3 className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-600 dark:text-purple-200 font-bold mt-10 text-center">
        <Typewriter
          words={["Welcome to your personalized dashboard."]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h3>
      <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
        <Lottie animationData={welcome} loop={true}></Lottie>
      </div>

      <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-gray-600 dark:text-purple-200 text-center">
        Please select an option to proceed.
      </h4>
      <p className="text-gray-600 dark:text-purple-200 text-sm lg:text-xl mt-5 font-medium">And enjoy our all featured</p>
    </div>
  );
};

export default WelcomeDashboard;
