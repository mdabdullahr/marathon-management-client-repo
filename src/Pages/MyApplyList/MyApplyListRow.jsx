import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyApplyListRow = ({ myApplyPromise }) => {
   const [registrations, setRegistrations] = useState([]);

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
        axios.delete(`http://localhost:3000/registrations/${id}`).then((res) => {
          if (res.data?.deletedCount) {
            setRegistrations((prev) => prev.filter((item) => item._id !== id));
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
            {registration.firstName} <span></span> {registration.lastName}
            <br />
            <span>{registration.contactNumber}</span>
          </td>
          <td>{registration.startDate}</td>
          <th className="flex gap-4">
            <button className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]">
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
    </>
  );
};

export default MyApplyListRow;
