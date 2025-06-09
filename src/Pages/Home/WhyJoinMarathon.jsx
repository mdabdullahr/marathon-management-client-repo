// src/components/WhyJoinMarathon.jsx
import React from "react";
import Lottie from "lottie-react";
import whyJoinMarathon from "../../assets/Annimations/whyJoinMarathon.json";

const WhyJoinMarathon = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-600 dark:text-white specific-text"
          data-aos="fade-up"
        >
          Why Join a Marathon?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Lottie Animation */}
          <div
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Lottie animationData={whyJoinMarathon} loop={true} />
          </div>
          {/* Text Content */}
          <ul
            className="space-y-4 text-gray-700 dark:text-gray-300 text-lg list-disc list-inside max-w-xl"
            data-aos="fade-up"
          >
            <li data-aos="fade-right" data-aos-delay="100">
              Improve your physical health and endurance.
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              Join a community of like-minded individuals.
            </li>
            <li data-aos="fade-right" data-aos-delay="300">
              Set goals and challenge yourself.
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              Raise funds or awareness for a cause.
            </li>
            <li data-aos="fade-right" data-aos-delay="500">
              Experience personal achievement and celebration.
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
              Build mental strength and resilience through long-distance
              running.
            </li>
            <li data-aos="fade-right" data-aos-delay="700">
              Explore new locations and enjoy scenic routes.
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
              Gain a sense of discipline through regular training.
            </li>
            <li data-aos="fade-right" data-aos-delay="900">
              Receive a finisher medal and race-day souvenirs.
            </li>
            <li data-aos="fade-right" data-aos-delay="1000">
              Create unforgettable memories with friends and family.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinMarathon;
