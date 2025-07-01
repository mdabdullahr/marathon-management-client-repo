import { FiBell, FiMail, FiSettings, FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import DarkMoodToggoler from "../../../components/DarkMoodToggoler";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const DashboardNavbar = () => {

  const {user, logoutUser} = useAuth();
  const handleLogOut = () => {
      logoutUser()
        .then(() => {
          Swal.fire({
            title: "Successfully Logged Out...!",
            icon: "success",
            draggable: true,
          });
        })
        .catch((error) => {
          toast.error("Logout failed...!", error.message);
        });
    };
  return (
    <div className="navbar bg-white dark:bg-gray-800 shadow-md px-4 lg:px-12">
      {/* Left: Title */}
      <div className="flex-1">
        <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-bold bg-gradient-to-r text-indigo-600">
          Dashboard
        </h2>
      </div>

      {/* Middle: Search Bar */}
     

      {/* Right: Icons, Avatar, Logout, Theme */}
      <div className="flex-none flex items-center gap-10">

        {/* ✅ Dark Mode Toggle Component */}
        <DarkMoodToggoler />

        {/* User Avatar */}
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user.photoURL}
              alt="User"
            />
          </div>
        </div>

        {/* Logout */}
        <button onClick={handleLogOut} className="border border-purple-600 text-purple-600 
             hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600
             hover:text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2
             transition cursor-pointer w-full">
          <FiLogOut className="mr-1" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
