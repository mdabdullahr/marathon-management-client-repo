import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const UpdateProfile = () => {
  const { updateUser, setUser, user } = useAuth();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          title: "Profile Updated Successfully...!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        toast.error("Update failed: " + err.message);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 flex min-h-screen items-center justify-center p-2 md:p-6">
      <form
        onSubmit={handleUpdate}
        className="bg-gray-100 dark:bg-gray-900 max-w-2xl w-full rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 space-y-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <FaUserEdit className="text-teal-600 text-3xl" />
          <h2 className="text-xl md:text-3xl font-bold text-purple-500 text-center">
            Update Your Profile
          </h2>
          <img
            src={user.photoURL}
            className="rounded-full w-20 h-20 object-cover text-center"
            alt="profile image"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            defaultValue={user?.displayName}
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-teal-600 text-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Photo URL <span className="text-red-500">*</span>
          </label>
          <input
            name="photo"
            defaultValue={user?.photoURL}
            type="url"
            placeholder="Enter photo URL"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-teal-600 text-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white text-sm md:text-lg font-medium py-3 rounded-xl shadow-md transition duration-300 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
