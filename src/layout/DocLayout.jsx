import React, { useState, useEffect } from "react";
import DocSidebar from "../components/DocSidebar"
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import DocNav from "../components/DocNav";

const DocLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(256); // Default width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarWidth(0); // No margin on mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for sidebar width changes
  useEffect(() => {
    const handleSidebarChange = () => {
      if (!isMobile) {
        const sidebar = document.querySelector('.sidebar-container');
        if (sidebar) {
          const width = sidebar.offsetWidth;
          setSidebarWidth(width);
        }
      }
    };

    // Use MutationObserver to watch for class changes on sidebar
    const sidebar = document.querySelector('.sidebar-container');
    if (sidebar) {
      const observer = new MutationObserver(handleSidebarChange);
      observer.observe(sidebar, { 
        attributes: true, 
        attributeFilter: ['class'] 
      });
      
      // Initial check
      handleSidebarChange();
      
      return () => observer.disconnect();
    }
  }, [isMobile]);

  const marginLeft = isMobile ? 0 : sidebarWidth;

  return (
    <div className="flex flex-col min-h-screen">
      <DocNav />

      <div className="fixed top-0 left-0 h-full pt-16 z-40">
        <DocSidebar />
      </div>

      <div 
        className="flex-1 transition-all duration-300 pt-16"
        style={{ marginLeft: `${marginLeft}px` }}
      >
        <Outlet />
      </div>

      <div 
        className="transition-all duration-300"
        style={{ marginLeft: `${marginLeft}px` }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default DocLayout;