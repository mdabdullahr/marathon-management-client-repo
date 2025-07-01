import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyProfile = () => {
    const {user} = useAuth();
    return (
        <div className="w-full h-[100vh] sm:h-[50vh] 2xl:h-[90vh] overflow-hidden relative">
        {/* Top Half - Cover Background */}
        <div
          className="h-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/FLFxH1MQ/37ca7695f1deea3124fb461f9a28e691.jpg')",
          }}
        ></div>

        {/* Bottom Half - White Background */}
        <div className="h-1/2 bg-white pt-24  2xl:pt-42 px-6 md:px-12 2xl:px-26">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 text-center">
            My Profile!
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 md:mt-10">
            <div>
              <p className="text-lg lg:text-xl font-medium text-gray-500 mt-1 mb-2 xl:mb-4">
                Full Name
              </p>
              <p className="text-lg lg:text-xl  font-semibold text-gray-800 mt-1">
                {user.displayName}
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-500 mt-1 mb-2 xl:mb-4">
                Email
              </p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <i className="fab fa-dribbble text-pink-500 text-xl"></i>
            <i className="fab fa-twitter text-blue-500 text-xl"></i>
            <i className="fab fa-pinterest text-red-500 text-xl"></i>
          </div>
        </div>

        {/* Profile Image - Center Overlapping */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 md:w-42 md:h-42 2xl:w-62 2xl:h-62 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        </div>
    );
};

export default MyProfile;