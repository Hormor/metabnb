import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import PlacesToStay from "./pages/PlacesToStay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/places-to-stay",
    element: <PlacesToStay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main">
    <HeaderNav />
    <RouterProvider router={router} />
    <Footer />
  </div>
);
