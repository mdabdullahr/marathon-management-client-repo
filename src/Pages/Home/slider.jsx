import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[200px] md:h-[400px] lg:h-[950px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co/Df01xDMj/marathons2.jpg"
              alt="Sports Event"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-3">
                Join the Ultimate City Marathon
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl">
                Experience thrilling local sports events and competitions  Participate in exciting city-wide marathons and challenge your endurance alongside hundreds of runners.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/wxNSV7Y/marathons1.jpg"
              alt="Art Exhibition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-3">
                 Manage Your Marathons with Ease
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl">
                Explore local creativity through stunning art pieces. Register, track, and organize your marathon events from a personalized dashboard designed just for you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/HfxmYgXr/marathons3.jpg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-3">
                 Connect with Organizers & Runners
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl">
                Stay informed, join upcoming races, and collaborate with event organizers in one seamless platform.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
