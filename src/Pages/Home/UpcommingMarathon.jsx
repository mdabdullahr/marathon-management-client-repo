import React, { useMemo } from "react";

const marathonEvents = [
  {
    id: 1,
    name: "Dhaka City Marathon",
    date: "2025-07-12",
    location: "Hatirjheel, Dhaka",
    description:
      "Join runners across the country in this energetic city marathon through the heart of Dhaka.",
    image:
      "https://i.ibb.co/tPLLyq0Y/maa.webp",
  },
  {
    id: 2,
    name: "Cox's Bazar Beach Run",
    date: "2025-08-05",
    location: "Cox's Bazar Sea Beach",
    description:
      "Experience the world’s longest sea beach with this scenic marathon event.",
    image:
      "https://i.ibb.co/6RnWJcXR/beasmar.jpg",
  },
  {
    id: 3,
    name: "Sylhet Hill Marathon",
    date: "2025-09-01",
    location: "Malnicherra, Sylhet",
    description:
      "A challenging but beautiful trail marathon through Sylhet's tea gardens and hills.",
    image:
      "https://i.ibb.co/Mx4jMcSj/hilmar.jpg",
  },
  {
    id: 4,
    name: "Chittagong Port City Run",
    date: "2025-07-25",
    location: "Agrabad, Chattogram",
    description:
      "Fast-paced city marathon through the commercial hub of the country.",
    image:
      "https://i.ibb.co/3Y4stCPz/marr.jpg",
  },
  {
    id: 5,
    name: "Sundarbans Eco Marathon",
    date: "2025-08-15",
    location: "Khulna",
    description:
      "Support nature while running near the world’s largest mangrove forest.",
    image:
      "https://i.ibb.co/xxFKQpH/icomar.webp",
  },
  {
    id: 6,
    name: "Rajshahi River Marathon",
    date: "2025-09-10",
    location: "Padma Riverbank, Rajshahi",
    description:
      "Enjoy a riverside marathon with a cool breeze and local cultural touch.",
    image:
      "https://i.ibb.co/7Jf1ND5q/marathon2.jpg",
  },
];

const getRandomItems = (arr, n) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const UpcomingMarathons = () => {
  const randomEvents = useMemo(() => getRandomItems(marathonEvents, 6), []);

  return (
    <section className="py-0 lg:py-12">
      <h2
        data-aos="fade-up"
        className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center mb-10 lg:mb-20 text-gray-700 dark:text-purple-200 px-2"
      >
        Upcoming Marathons
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 px-4 max-w-[1300px] mx-auto">
        {randomEvents.map((event) => (
          <div
            key={event.id}
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {event.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                📅 <strong>Date:</strong>{" "}
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                📍 <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMarathons;
