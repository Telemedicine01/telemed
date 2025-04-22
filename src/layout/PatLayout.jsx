import React from "react";
import Footer from "../components/Footer";
import PatientSidebar from "../components/PatientSidebar";
import { Outlet } from "react-router";
import PatNav from "../components/PatNav";

const PatLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PatNav />
      
      <div className="fixed top-0 left-0 h-full pt-16">
        <PatientSidebar />
      </div>
      
      <div className="flex-1 lg:ml-64 transition-all duration-300">
        <Outlet />
      </div>
      
      <div className="lg:ml-64 transition-all duration-300">
        <Footer />
      </div>
    </div>
  );
};

export default PatLayout;