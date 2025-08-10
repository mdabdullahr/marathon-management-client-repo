import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://marathone-management-server.vercel.app/",
});

const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();

  // Request Interceptors
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // Response Interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out for Unauthorized Access",
              icon: "warning",
              draggable: true,
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
      if (error.status === 403) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out for Forbidden Access",
              icon: "warning",
              draggable: true,
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
