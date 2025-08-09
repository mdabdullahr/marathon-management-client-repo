import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Email cannot be empty.");
      setStatus("error");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 700));

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section aria-label="Newsletter" className="w-full bg-teal-600 py-12 mt-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-lg">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-2 text-white/90 max-w-xl">
              Get the latest marathon updates, registration deadlines, and
              special offers by subscribing with your email. We don’t spam —
              only important updates.
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <div className="hidden md:flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V8"
                  />
                </svg>
                Free updates • Unsubscribe anytime
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex-1 flex flex-col sm:flex-row gap-3 items-center"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg focus:outline-none placeholder:text-gray-600 bg-white text-black"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "email-error" : undefined}
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-teal-600 bg-white hover:scale-[1.02] transition-transform shadow-md whitespace-nowrap"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>

            {/* Status messages */}
            <div className="w-full mt-2 sm:mt-3 text-center sm:text-left">
              {status === "success" && (
                <p className="text-sm text-white">
                  Thank you! Your email has been subscribed.
                </p>
              )}

              {status === "error" && errorMsg && (
                <p id="email-error" className="text-sm text-yellow-200">
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Decorative footer */}
        <div className="mt-4 text-sm text-white/80 text-center">
          <p>
            By subscribing you agree to receive emails from Marathon's. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
