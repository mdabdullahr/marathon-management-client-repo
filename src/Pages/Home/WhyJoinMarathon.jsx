// src/components/WhyJoinMarathon.jsx

const WhyJoinMarathon = () => {
  return (
    <section>
      <div className="max-w-[1320px] mx-auto px-4">
        <h2
          className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-600 dark:text-purple-200  specific-text px-2"
          data-aos="fade-up"
        >
          Why Join a Marathon?
        </h2>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
          <div className="flex-1" data-aos="fade-up" data-aos-delay="600">
            <div className="w-full h-full lg:h-[400px] rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Q-Hfw4gADx4?si=HC2kNyD62pvCAmyy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1">
            <ul
              className="space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-lg list-none list-inside text-ri"
              data-aos="fade-up"
            >
              <h3 className="text-xl md:text-3xl font-semibold bg-teal-600 bg-clip-text text-transparent">
                Start your marathon journey in basic Fundamental
              </h3>
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
              <li data-aos="fade-right" data-aos-delay="700">
                Explore new locations and enjoy scenic routes.
              </li>
              <li data-aos="fade-right" data-aos-delay="800">
                Gain a sense of discipline through regular training.
              </li>
              <li data-aos="fade-right" data-aos-delay="900">
                Receive a finisher medal and race-day souvenirs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinMarathon;
