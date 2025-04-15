import React from "react";
import DocSidebar from "../components/DocSidebar"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const DocLayout = () => {
  return (
    <div className="flex">
      <DocSidebar />
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default DocLayout;
