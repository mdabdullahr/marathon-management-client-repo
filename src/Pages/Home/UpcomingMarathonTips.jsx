const UpcomingMarathonTips = () => {
  const tips = [
    "Start your training at least 8-12 weeks before the marathon.",
    "Stay hydrated but avoid drinking too much water before the race.",
    "Practice long-distance runs weekly to build endurance.",
    "Use the same shoes and outfit during training and on race day.",
    "Get at least 7-8 hours of sleep the night before the marathon.",
    "Eat a balanced meal rich in carbs the evening before race day.",
    "Warm up with light jogging and stretches before starting.",
    "Set a realistic pace — don’t go too fast at the beginning.",
  ];

  return (
    <section>
      <div className="max-w-[1320px] mx-auto px-4">
        <h2
          className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-600 dark:text-purple-200 specific-text px-2"
          data-aos="fade-up"
        >
          Upcoming Marathon Tips
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div
            className="flex-1"
            data-aos="fade-up"
            data-aos-delay={tips.length * 100}
          >
            <div className="w-full h-full lg:h-[400px] rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8dsQhitYotk?si=JzB9BSC8_joitL_2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Tips List */}
          <div className="flex-1">
            <ul
              className="space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-lg list-none list-inside  "
              data-aos="fade-up"
            >
              <h3 className="text-xl md:text-3xl font-semibold bg-teal-600 bg-clip-text text-transparent">
                Kickstart your journey in <br /> a marathon
              </h3>
              {tips.map((tip, idx) => (
                <li key={idx} data-aos="fade-left" data-aos-delay={idx * 100}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMarathonTips;
