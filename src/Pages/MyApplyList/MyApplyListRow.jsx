import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyApplyListRow = ({ myApplyPromise }) => {
  const [registrations, setRegistrations] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    myApplyPromise
      .then((data) => {
        setRegistrations(data);
      })
      .catch((err) => {
        console.error("Error loading data", err);
      });
  }, [myApplyPromise]);

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
        axios
          .delete(`http://localhost:3000/registrations/${id}`)
          .then((res) => {
            if (res.data?.deletedCount) {
              setRegistrations((prev) =>
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
    const updatedData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contactNumber: form.contactNumber.value,
      additionalInfo: form.additionalInfo.value,
    };
    console.log(updatedData);

    axios
      .patch(
        `http://localhost:3000/registrations/${selectedRegistration._id}`,
        updatedData
      )
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          setRegistrations((prev) =>
            prev.map((item) =>
              item._id === selectedRegistration._id
                ? { ...item, ...updatedData }
                : item
            )
          );
          setIsModalOpen(false);
          Swal.fire(
            "Updated!",
            "Registration updated successfully.",
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
      {registrations.map((registration, index) => (
        <tr key={registration._id}>
          <th>
            <label>{index + 1}</label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={registration.image} alt="Avatar" />
                </div>
              </div>
              <div>
                <div className="font-bold">{registration.marathonTitle}</div>
                <div className="text-sm opacity-50">
                  {registration.location}
                </div>
              </div>
            </div>
          </td>
          <td>
            {registration.firstName} {registration.lastName}
            <br />
            <span>{registration.contactNumber}</span>
          </td>
          <td>{registration.startDate}</td>
          <th className="flex gap-4">
            <Link to={`/marathon/${registration.id}`}>
              <button className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]">
                <BsFillInfoCircleFill size={20} color=" #17a2b8" />
              </button>
            </Link>
            <button
              onClick={() => {
                setSelectedRegistration(registration);
                setIsModalOpen(true);
              }}
              className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]"
            >
              <FaPen size={20} color="#b182e3" />
            </button>
            <button
              onClick={() => handleDelete(registration._id)}
              className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]"
            >
              <MdDelete size={20} color="#FF0000" />
            </button>
          </th>
        </tr>
      ))}

      {isModalOpen && selectedRegistration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="absolute inset-0 bg-transparent bg-opacity-10"></div>{" "}
          <div className="relative mt-34 z-50 w-full max-w-lg rounded-2xl bg-white p-6 dark:bg-gray-800 dark:text-white shadow-xl">
            <h2 className="text-xl font-bold mb-4">Update Registration</h2>
            <form onSubmit={handleUpdate} className="space-y-5">
              {/* Row 1: Email */}
              <div className="w-full">
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={selectedRegistration.email}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              {/* Row 2: Marathon Title + Start Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-1">
                    Marathon Title
                  </label>
                  <input
                    type="text"
                    name="marathonTitle"
                    defaultValue={selectedRegistration.marathonTitle}
                    readOnly
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    name="startDate"
                    defaultValue={selectedRegistration.startDate}
                    readOnly
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Row 3: First Name + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    defaultValue={selectedRegistration.firstName}
                    required
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={selectedRegistration.lastName}
                    required
                    className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Row 4: Contact Number */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  defaultValue={selectedRegistration.contactNumber}
                  required
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              {/* Row 5: Additional Info */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Additional Info (optional)
                </label>
                <textarea
                  name="additionalInfo"
                  rows="4"
                  defaultValue={selectedRegistration.additionalInfo}
                  placeholder="Mention any medical info, preferences, or message to organizer..."
                  className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                ></textarea>
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
                  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
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

export default MyApplyListRow;
