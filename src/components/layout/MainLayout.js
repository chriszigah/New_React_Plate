import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../../components";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
