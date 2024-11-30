import * as React from "react";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import router from "./Routes/Router";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
  </React.StrictMode>
);
