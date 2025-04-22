import React from "react";
import DocSidebar from "../components/DocSidebar"
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import DocNav from "../components/DocNav";

const DocLayout = () => {
  return (
<div className="flex flex-col min-h-screen">
      <DocNav />

  <div className="fixed top-0 left-0 h-full pt-16">
      <DocSidebar />
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

export default DocLayout;
