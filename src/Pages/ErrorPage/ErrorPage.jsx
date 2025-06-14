import React from "react";
import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import errorpage from "../../assets/Annimations/404page.json"
import Lottie from "lottie-react";


const ErrorPage = () => {
  return (
    <div>
     <Navbar></Navbar>
      
        <div className="bg-indigo-100 absolute">
          <Lottie className=" h-full lg:h-[910px] w-[100vw] object-cover" animationData={errorpage} loop={true}></Lottie>
          <button data-aos="fade-up" className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded font-semibold relative -top-42 left-12 md:-top-68 md:left-16 lg:-top-132 lg:left-32 xl:-top-136 xl:left-52 2xl:left-110"><Link to="/">Back to home</Link></button>
        </div>
      
    </div>
  );
};

export default ErrorPage;
