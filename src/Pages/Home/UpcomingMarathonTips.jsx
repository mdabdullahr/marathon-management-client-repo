import React from "react";
import checklistAnimation from "../../assets/Annimations/upcoming-tips-checklist.json";
import Lottie from "lottie-react";

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
    "Listen to your body — walk if needed, and don’t overexert.",
    "Apply anti-chafing products to prevent skin irritation.",
    "Avoid trying anything new on race day (shoes, food, etc.).",
    "Stay mentally focused and break the race into smaller goals.",
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-600 dark:text-white specific-text"
          data-aos="fade-up"
        >
          Upcoming Marathon Tips
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Tips List */}
          <ul
            className="space-y-4 text-gray-700 dark:text-gray-300 text-lg list-disc list-inside max-w-xl"
            data-aos="fade-up"
          >
            {tips.map((tip, idx) => (
              <li key={idx} data-aos="fade-left" data-aos-delay={idx * 100}>
                {tip}
              </li>
            ))}
          </ul>

          {/* Lottie Animation */}
          <div
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            data-aos="fade-up"
            data-aos-delay={tips.length * 100}
          >
            <Lottie animationData={checklistAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMarathonTips;
