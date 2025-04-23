import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router';
import { Home, Activity, Calendar, FileText, User, ChevronLeft, Menu, MessageSquare, Plus, Settings, LogOut, ClipboardList, Stethoscope } from "lucide-react";

const DocSidebar = ({ navLinks = [] }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (isMobile) {
        mainContent.style.marginLeft = '0px';
      } else {
        mainContent.style.marginLeft = isCollapsed ? '80px' : '256px';
      }
    }
  }, [isCollapsed, isMobile]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileOpen && !event.target.closest(".sidebar-container")) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  const defaultLinks = [
    { 
      path: 'docdash', 
      icon: Home, 
      label: 'Dashboard',
      color: 'text-blue-500'
    },
    { 
      path: 'docprofile', 
      icon: User, 
      label: 'Profile',
      color: 'text-blue-500'
    },
    { 
      path: 'create-post', 
      icon: Plus, 
      label: 'Create Post',
      color: 'text-blue-500'
    },
    { 
      path: 'myposts', 
      icon: FileText, 
      label: 'My Posts',
      color: 'text-blue-500'
    },
    { 
      path: 'docappointments', 
      icon: Calendar, 
      label: 'Appointments',
      color: 'text-blue-500'
    },
    { 
      path: 'mypatients', 
      icon: MessageSquare, 
      label: 'Messages',
      color: 'text-blue-500'
    },
  ];

  const links = navLinks.length > 0 ? navLinks : defaultLinks;
  
  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleMobileSidebar}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full shadow-lg text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar-container fixed h-full bg-white shadow-xl z-40 flex flex-col transition-all duration-300 ${
          isCollapsed ? "lg:w-20" : "lg:w-64"
        } ${isMobile ? (isMobileOpen ? "left-0" : "-left-80") : "left-0"}`}
      >
        {/* Logo */}
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          } py-6 px-4 border-b`}
        >
          {!isCollapsed && (
            <Link to="/" className="flex items-center group">
              <div className="h-8 w-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <Stethoscope className="text-white w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="ml-2 text-blue-900 font-bold text-xl tracking-tight">
                DocPortal
              </span>
            </Link>
          )}
          {isCollapsed && (
            <Link to="/" className="flex items-center justify-center">
              <div className="h-10 w-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center hover:rotate-90 transition-transform duration-300">
                <Stethoscope className="text-white w-5 h-5" strokeWidth={2.5} />
              </div>
            </Link>
          )}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className={`p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 ${
                isCollapsed
                  ? "absolute top-6 -right-10 bg-white shadow-md rounded-full"
                  : ""
              }`}
            >
              <ChevronLeft
                className={`h-5 w-5 transition-transform duration-200 ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/doc/${link.path}`}
              className={`flex items-center py-3 px-3 rounded-lg group transition-colors duration-200 ${
                isActive(link.path)
                  ? `bg-blue-50 ${link.color}`
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <link.icon
                className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                  isActive(link.path)
                    ? `${link.color}`
                    : "text-gray-500 group-hover:text-blue-600"
                }`}
              />
              {!isCollapsed && (
                <span className="ml-3 font-medium text-sm">{link.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div
          className={`p-4 border-t ${
            isCollapsed ? "items-center justify-center" : ""
          }`}
        >
          <div className="space-y-1">
            <Link
              to="/doc/settings"
              className={`flex items-center py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <Settings className="h-5 w-5 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">Settings</span>
              )}
            </Link>
            <button
              className={`flex items-center py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200 w-full ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <LogOut className="h-5 w-5 text-gray-500 group-hover:text-red-500" />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">Logout</span>
              )}
            </button>
          </div>
        </div>

      {/* User Profile - Only show if not collapsed */}
      {!isCollapsed && (
          <div className="p-4 border-t">
            <Link to="/doc/docprofile" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-sm font-medium">
                <User className="h-5 w-5 text-white"/>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DocSidebar;