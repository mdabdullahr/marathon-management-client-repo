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
  {
    id: 7,
    name: "Mymensingh Heritage Run",
    date: "2025-07-30",
    location: "Town Hall Ground, Mymensingh",
    description:
      "Explore Mymensingh’s rich cultural heritage in this historic marathon that passes through iconic landmarks and scenic routes.",
    image: "https://i.ibb.co/sj1xkqg/mymarathon.jpg",
  },
  {
    id: 8,
    name: "Barisal Backwater Sprint",
    date: "2025-08-22",
    location: "Kirtonkhola Riverbank, Barisal",
    description:
      "Sprint through the calm and picturesque landscapes of Barisal’s backwaters, perfect for runners seeking tranquility with a competitive edge.",
    image: "https://i.ibb.co/wRwRgXG/barisalmarathon.jpg",
  },
];

const getRandomItems = (arr, n) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const UpcomingMarathons = () => {
  const randomEvents = useMemo(() => getRandomItems(marathonEvents, 8), []);

  return (
    <section>
      <h2
        data-aos="fade-up"
        className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-gray-700 dark:text-purple-200 px-2"
      >
        Upcoming Marathons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 max-w-[1320px] mx-auto">
        {randomEvents.map((event) => (
          <div data-aos="fade-up" className="card-wrapper">
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform card-content lg:h-[340px]"
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
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed line-clamp-2">
                {event.description}
              </p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMarathons;
