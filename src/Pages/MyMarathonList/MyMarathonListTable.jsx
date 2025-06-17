import React, { use, useEffect, useRef, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import noData from "../../assets/Annimations/nodata.json";
import Lottie from "lottie-react";
import DatePicker from "react-datepicker";
import useMyMarathon from "../../Api/useMyMarathon";

const runningDistance = ["25K", "20K", "15K", "10K", "5K", "3K"];

const MyMarathonListTable = ({ myMarathonPromise }) => {
  const data = use(myMarathonPromise);
  const {updateMyMarathonPromise, deleteMyMarathonPromise} = useMyMarathon();
  const [marathons, setMarathons] = useState(data);
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonDate, setMarathonDate] = useState(null);

  const startRegRef = useRef(null);
  const endRegRef = useRef(null);
  const startDateRef = useRef(null);

  useEffect(() => {
  if (isModalOpen && selectedMarathon) {
    if (selectedMarathon.startRegistrationDate)
      setStartRegDate(new Date(selectedMarathon.startRegistrationDate));

    if (selectedMarathon.endRegistrationDate)
      setEndRegDate(new Date(selectedMarathon.endRegistrationDate));

    if (selectedMarathon.marathonStartDate)
      setMarathonDate(new Date(selectedMarathon.marathonStartDate));
  }
}, [isModalOpen, selectedMarathon]);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMyMarathonPromise(id).then((res) => {
          if (res.data?.deletedCount) {
            setMarathons((prev) =>
                prev.filter((item) => item._id !== id)
              );
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    
      updateMyMarathonPromise(selectedMarathon._id, updatedData)
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          setMarathons((prev) =>
            prev.map((item) =>
              item._id === selectedMarathon._id
                ? { ...item, ...updatedData }
                : item
            )
          );
          setIsModalOpen(false);
          Swal.fire(
            "Updated!",
            "Marathon updated successfully.",
            "success"
          );
        }
      })
      .catch((err) => {
        console.error("Update failed", err);
        Swal.fire("Error", "Failed to update.", "error");
      });
  };

  return (
    <>
      {marathons.length > 0 ? (
        <div className="overflow-x-auto my-10">
          <table className="table dark:table-zebra border border-gray-100 dark:border-gray-800">
            {/* head */}
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600">
              <tr>
                <th>#</th>
                <th>Marathon Image, Title & Location</th>
                <th>Distance</th>
                <th className="hidden lg:block">Registration</th>
                <th>Start Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
              {marathons.map((marathon, index) => (
                <tr
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                  key={marathon._id}
                >
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={marathon.marathonImage} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {marathon.marathonTitle}
                        </div>
                        <div className="text-sm opacity-50">
                          {marathon.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {marathon.runningDistance} {marathon.lastName}
                  </td>
                  <td className="hidden lg:block">{marathon.registrationsCount}</td>
                  <td>{marathon.marathonStartDate}</td>
                  <th className="flex gap-4">
                    <Link to={`/marathon/${marathon._id}`}>
                      <button className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]">
                        <BsFillInfoCircleFill size={20} color=" #17a2b8" />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedMarathon(marathon);
                        setIsModalOpen(true);
                      }}
                      className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]"
                    >
                      <FaPen size={20} color="#b182e3" />
                    </button>
                    <button
                      onClick={() => handleDelete(marathon._id)}
                      className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]"
                    >
                      <MdDelete size={20} color="#FF0000" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="my-10 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-[300px] h-[300px]">
            <Lottie animationData={noData} loop={true} />
          </div>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-4">
            You have no registrations yet.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 text-center">
            Add a marathon to see your marathons here.
          </p>
          <Link to="/dashboard/addMarathon">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded cursor-pointer">
              Add Marathon
            </button>
          </Link>
        </div>
      )}

      {isModalOpen && selectedMarathon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="absolute inset-0 bg-transparent  bg-opacity-10"></div>{" "}
          <div className="relative mt-72 z-50 w-full rounded-2xl bg-white p-6 dark:bg-gray-800 dark:text-white shadow-xl max-w-3xl">
            <h2 className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-4">
              Update Marathon
            </h2>
            <form
              onSubmit={handleUpdate}
              className="space-y-5 bg-white dark:bg-gray-900 shadow-md shadow-gray-300 dark:shadow-gray-800 rounded-lg p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Marathon title */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="marathonTitle"
                  >
                    Marathon Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="marathonTitle"
                    name="marathonTitle"
                    type="text"
                    defaultValue={selectedMarathon.marathonTitle}
                    required
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter Marathon Title"
                  />
                </div>

                {/* Start Registration Date */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="startRegistrationDate"
                  >
                    Start Registration Date{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <DatePicker
                    name="startRegistrationDate"
                    selected={startRegDate}
                    onChange={(date) => {
                      setStartRegDate(date);
                      if (startRegRef.current)
                        startRegRef.current.value = formatDate(date);
                    }}
                    customInput={
                      <input
                        ref={startRegRef}
                        required
                        className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Select Start Registration Date"
                      />
                    }
                    dateFormat="yyyy-MM-dd"
                    wrapperClassName="w-full"
                  />
                </div>

                {/* End Registration Date */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="endRegistrationDate"
                  >
                    End Registration Date{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <DatePicker
                    name="endRegistrationDate"
                    selected={endRegDate}
                    onChange={(date) => {
                      setEndRegDate(date);
                      if (endRegRef.current)
                        endRegRef.current.value = formatDate(date);
                    }}
                    customInput={
                      <input
                        ref={endRegRef}
                        required
                        className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Select End Registration Date"
                      />
                    }
                    dateFormat="yyyy-MM-dd"
                    wrapperClassName="w-full"
                  />
                </div>

                {/* Marathon Start Date */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="marathonStartDate"
                  >
                    Marathon Start Date <span className="text-red-500">*</span>
                  </label>
                  <DatePicker
                    name="marathonStartDate"
                    selected={marathonDate}
                    onChange={(date) => {
                      setMarathonDate(date);
                      if (startDateRef.current)
                        startDateRef.current.value = formatDate(date);
                    }}
                    customInput={
                      <input
                        ref={startDateRef}
                        required
                        className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Select Marathon Start Date"
                      />
                    }
                    dateFormat="yyyy-MM-dd"
                    wrapperClassName="w-full"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="location"
                  >
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    defaultValue={selectedMarathon.location}
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter Your Marathon Location"
                  />
                </div>

                {/* Running Distance */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="runningDistance"
                  >
                    Running Distance
                  </label>
                  <select
                    defaultValue={selectedMarathon.runningDistance}
                    id="runningDistance"
                    name="runningDistance"
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {runningDistance.map((dis) => (
                      <option key={dis} value={dis}>
                        {dis}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Marathon Image */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="marathonImage"
                  >
                    Marathon Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="marathonImage"
                    name="marathonImage"
                    defaultValue={selectedMarathon.marathonImage}
                    type="url"
                    placeholder="Enter Marathon Image URL"
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Created At */}
                <div>
                  <label
                    className="block mb-1 text-gray-700 dark:text-gray-200"
                    htmlFor="createdAt"
                  >
                    Created At <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="createdAt"
                    name="createdAt"
                    type="date"
                    defaultValue={selectedMarathon.createdAt}
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label
                  className="block mb-1 text-gray-700 dark:text-gray-200"
                  htmlFor="description"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={selectedMarathon.description}
                  rows={4}
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Write a brief description"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded dark:bg-gray-600 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyMarathonListTable;
