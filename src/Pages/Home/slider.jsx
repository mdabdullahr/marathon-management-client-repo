import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        className="w-full h-[400px] lg:h-[750px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co/gL3564Cc/772.jpg"
              alt="Sports Event"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-4">
                Join the Ultimate City Marathon
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl mb-6">
                Experience thrilling local sports events and competitions
                Participate in exciting city-wide marathons and challenge your
                endurance alongside hundreds of runners.
              </p>
              <button className="text-white bg-teal-600 px-5 py-2 rounded-lg font-semibold text-xs md:text-sm lg:text-lg">
                <Link to="/marathons">Browse Marathons</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/chxDcz16/marathon12.jpg"
              alt="Art Exhibition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-4">
                Manage Your Marathons with Ease
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl mb-6">
                Explore local creativity through stunning art pieces. Register,
                track, and organize your marathon events from a personalized
                dashboard designed just for you.
              </p>
              <button className="text-white bg-teal-600 px-5 py-2 rounded-lg font-semibold text-xs md:text-sm lg:text-lg">
                <Link to="/dashboard">View Dashboard</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/N2jb2ypJ/mara2.jpg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white mb-4">
                Track Your Registrations & Results
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-white max-w-2xl mb-6">
                View your applied marathons, see event details, and keep track
                of your achievements all from your profile.
              </p>
              <button className="text-white bg-teal-600 px-5 py-2 rounded-lg font-semibold  text-xs md:text-sm lg:text-lg">
                <Link to="/dashboard/myApplyList">My Applications</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
