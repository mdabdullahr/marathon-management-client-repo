import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import { ThemeProvider } from "./ThemeContext/ThemeContext.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// AOSInitializer component
function AOSInitializer({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AOSInitializer>
        <RouterProvider router={router}></RouterProvider>
        </AOSInitializer>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
