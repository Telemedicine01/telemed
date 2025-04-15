import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PatientSidebar from "../components/PatientSidebar";
import { Outlet } from "react-router";

const PatLayout = () => {
    return (
        <div className="flex">
          <PatientSidebar/>
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      );
    };

export default PatLayout;