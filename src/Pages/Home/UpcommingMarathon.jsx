import React from "react";

const marathonEvents = [
  {
    id: 1,
    name: "Dhaka City Marathon",
    date: "2025-07-12",
    location: "Hatirjheel, Dhaka",
    description:
      "Join runners across the country in this energetic city marathon through the heart of Dhaka.",
  },
  {
    id: 2,
    name: "Cox's Bazar Beach Run",
    date: "2025-08-05",
    location: "Cox's Bazar Sea Beach",
    description:
      "Experience the world’s longest sea beach with this scenic marathon event.",
  },
  {
    id: 3,
    name: "Sylhet Hill Marathon",
    date: "2025-09-01",
    location: "Malnicherra, Sylhet",
    description:
      "A challenging but beautiful trail marathon through Sylhet's tea gardens and hills.",
  },
  {
    id: 4,
    name: "Chittagong Port City Run",
    date: "2025-07-25",
    location: "Agrabad, Chattogram",
    description:
      "Fast-paced city marathon through the commercial hub of the country.",
  },
  {
    id: 5,
    name: "Sundarbans Eco Marathon",
    date: "2025-08-15",
    location: "Khulna",
    description:
      "Support nature while running near the world’s largest mangrove forest.",
  },
  {
    id: 6,
    name: "Rajshahi River Marathon",
    date: "2025-09-10",
    location: "Padma Riverbank, Rajshahi",
    description:
      "Enjoy a riverside marathon with a cool breeze and local cultural touch.",
  },
];

const UpcomingMarathons = () => {
  return (
    <section className="py-10">
      <h2 data-aos="fade-up" className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-600 dark:text-white specific-text">
        Upcoming Marathons
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {marathonEvents.map((event) => (
            <div data-aos="fade-up">
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {event.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              📅 <strong>Date:</strong> {event.date}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              📍 <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
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
