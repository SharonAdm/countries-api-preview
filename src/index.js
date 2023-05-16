import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <div>hello</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="py-2 px-4 border-b-2 flex justify-between">
      <div className="text-xl font-bold p-3">Where in the world?</div>
      <button onClick={() => console.log("dark mode")}>
        <NightlightOutlinedIcon />
        Dark Mode
      </button>
    </header>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
