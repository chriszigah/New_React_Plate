import React from "react";
import { DashBoard, HomePage, NotFound } from "../pages";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

const AppRoutes = [
  { index: true, path: "/home", element: <HomePage /> },
  {
    index: true,
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    index: true,
    path: "/dashboardLayout",
    element: <DashboardLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default AppRoutes;
