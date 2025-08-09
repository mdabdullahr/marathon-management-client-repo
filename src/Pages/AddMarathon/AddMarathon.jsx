import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAddMarathon from "../../Api/useAddMarathon";
import useAuth from "../../Hooks/useAuth";

const runningDistance = ["25K", "20K", "15K", "10K", "5K", "3K"];

const AddMarathon = () => {
  const { user } = useAuth();
  const { myMarathonPromise } = useAddMarathon();

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
    myMarathonPromise(formObject)
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

  useEffect(() => {
    document.title = "Marathon Management | Dashboard | Add-Marathon";
  }, []);

  return (
    <div
      data-aos="fade-left"
      className="p-6 rounded-lg bg-white dark:bg-gray-800"
    >
      {/* Title aligned left with matching color */}
      <h2 className="text-left text-2xl font-semibold mb-6 text-gray-800 dark:text-purple-200 border-b border-gray-300 dark:border-gray-600 pb-2">
        Add Marathon
      </h2>

      <form onSubmit={handleAddMarathon} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Marathon Title */}
          <div>
            <label
              htmlFor="marathonTitle"
              className="block mb-2 text-gray-800 dark:text-gray-200"
            >
              Marathon Title <span className="text-red-500">*</span>
            </label>
            <input
              id="marathonTitle"
              name="marathonTitle"
              type="text"
              required
              placeholder="Enter Marathon Title"
              className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Start Registration Date */}
          <div>
            <label
              htmlFor="startRegistrationDate"
              className="block mb-2 text-gray-800 dark:text-gray-200"
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
                  placeholder="Select Start Registration Date"
                  className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
                />
              }
              dateFormat="yyyy-MM-dd"
              wrapperClassName="w-full"
            />
          </div>

          {/* End Registration Date */}
          <div>
            <label
              htmlFor="endRegistrationDate"
              className="block mb-2 text-gray-800 dark:text-gray-200"
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
                  placeholder="Select End Registration Date"
                  className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
                />
              }
              dateFormat="yyyy-MM-dd"
              wrapperClassName="w-full"
            />
          </div>

          {/* Marathon Start Date */}
          <div>
            <label
              htmlFor="marathonStartDate"
              className="block mb-2 text-gray-800 dark:text-gray-200"
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
                  placeholder="Select Marathon Start Date"
                  className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
                />
              }
              dateFormat="yyyy-MM-dd"
              wrapperClassName="w-full"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-gray-800 dark:text-gray-200"
            >
              Location <span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Enter Your Marathon Location"
              className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Running Distance */}
          <div>
            <label
              htmlFor="runningDistance"
              className="block mb-2 text-gray-800 dark:text-gray-200"
            >
              Running Distance
            </label>
            <select
              id="runningDistance"
              name="runningDistance"
              className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white transition"
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
              htmlFor="marathonImage"
              className="block mb-2 text-gray-800 dark:text-gray-200"
            >
              Marathon Image <span className="text-red-500">*</span>
            </label>
            <input
              id="marathonImage"
              name="marathonImage"
              type="url"
              required
              placeholder="Enter Marathon Image URL"
              className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Created At */}
          <div>
            <label
              htmlFor="createdAt"
              className="block mb-2 text-gray-800 dark:text-gray-200"
            >
              Created At <span className="text-red-500">*</span>
            </label>
            <input
              id="createdAt"
              name="createdAt"
              type="text"
              readOnly
              defaultValue={createdAtDefault}
              className="w-full h-12 rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white transition"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-gray-800 dark:text-gray-200"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            placeholder="Write a brief description"
            className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded bg-teal-600 px-6 py-3 text-white text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;
