import React, { use } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyApplyListRow = ({ myApplyPromise }) => {
  const registrations = use(myApplyPromise);
  console.log(registrations);
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
