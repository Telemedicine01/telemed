import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PatientSidebar from "../components/PatientSidebar";
import { Outlet } from "react-router";

const PatLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
       
        <PatientSidebar />
        <div className="flex-1 lg:ml-64 transition-all duration-300">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PatLayout;
