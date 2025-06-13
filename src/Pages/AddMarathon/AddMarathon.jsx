import axios from "axios";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const runningDistance = ["25K", "20K", "15K", "10K", "5K", "3K"];

const AddMarathon = () => {
  const { user } = useAuth();

  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonDate, setMarathonDate] = useState(null);

  const startRegRef = useRef(null);
  const endRegRef = useRef(null);
  const startDateRef = useRef(null);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const createdAtDefault = formatDate(new Date());

  const handleAddMarathon = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    formObject.registrationsCount = 0;
    formObject.organizerName = user.displayName;
    formObject.organizerEmail = user.email;


    // Sent Data To DB
    axios
      .post("http://localhost:3000/marathons", formObject)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Marathon Add Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add marathon. Please try again.");
      });
  };

  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-purple-200 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        Add Marathon
      </h2>
      <form
        onSubmit={handleAddMarathon}
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
              Start Registration Date <span className="text-red-500">*</span>
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
              End Registration Date <span className="text-red-500">*</span>
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
              required
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
              type="url"
              required
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
              type="text"
              required
              defaultValue={createdAtDefault}
              readOnly
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
            required
            rows={4}
            className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Write a brief description"
          />
        </div>

        {/* Create Button */}
        <button
          type="submit"
          className="w-full cursor-pointer  bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded text-lg specific-text transition "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;
