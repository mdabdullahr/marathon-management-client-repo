import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const runningDistance = [
  "25K",
  "20K",
  "15K",
  "10K",
  "5K",
  "3K",
];

const AddMarathon = () => {
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
    console.log(formObject);
  }

  return (
    <div className="my-10">
      <form onSubmit={handleAddMarathon} className="space-y-5">
        <h2 className="text-center mb-10 text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-gray-300 ">
          Add Marathon
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Marathon title */}
          <div>
            <label
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
              htmlFor="marathonTitle"
            >
              Marathon Title <span className="text-red-500">*</span>
            </label>
            <input
              id="marathonTitle"
              name="marathonTitle"
              type="text"
              required
              className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300  bg-gray-100 dark:bg-gray-800 focus:outline-none"
              placeholder="Enter Marathon Title"
            />
          </div>

          {/* Start Registration Date */}
          <div>
            <label
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
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
                  className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none" 
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
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
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
                  className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none" 
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
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
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
                  className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none" 
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
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
              htmlFor="location"
            >
              Location <span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none"
              placeholder="Enter Your Marathon Location"
            />
          </div>

          {/* Running Distance */}
          <div>
            <label
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
              htmlFor="runningDistance"
            >
              Running Distance
            </label>
            <select
              id="runningDistance"
              name="runningDistance"
              className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none"
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
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
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
              className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none"
            />
          </div>

          {/* Created At */}
          <div>
            <label
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
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
              className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            className="block mb-1 font-semibold text-gray-800 dark:text-gray-300"
            htmlFor="description"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full rounded-md p-2 text-gray-800 dark:text-gray-300  bg-gray-100 dark:bg-gray-800 focus:outline-none"
            placeholder="Write a brief description"
          />
        </div>

        {/* Create Button */}
        <button
          type="submit"
          className="w-full cursor-pointer text-gray-300 dark:text-gray-800 text-xl font-semibold bg-gray-800 dark:bg-gray-300  py-3 rounded-md "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;
