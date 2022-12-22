import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "../App";
import NasharaDetails from "../pages/NasharaDetails";
import Navbar from "../components/Navbar";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nashara/:id",
    element: <NasharaDetails />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
