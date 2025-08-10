import { useState } from "react";

const ContactUs = () =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      errs.email = "Invalid email address";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen  text-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <section className="max-w-[1320px] w-full p-8 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        {submitted ? (
          <p className="text-teal-500 text-center text-lg">
            Thanks for contacting us! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg p-10">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-600 dark:border-gray-600 dark:focus:ring-teal-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 mt-1 text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-600 dark:border-gray-600 dark:focus:ring-teal-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 mt-1 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-600 dark:border-gray-600 dark:focus:ring-teal-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-500 mt-1 text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default ContactUs;
