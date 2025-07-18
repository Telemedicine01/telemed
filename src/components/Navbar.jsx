import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/home" className="flex items-center group">
              <div className="h-18 w-18 rounded-full flex items-center justify-center group-hover:rotate-15 transition-transform duration-300">
                <img src={logo} alt="logo" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/doc"
              className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Doctors
            </a>
            <a
              href="/patient"
              className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Patients
            </a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAppsDropdownOpen(!isAppsDropdownOpen)}
                onMouseEnter={() => setIsAppsDropdownOpen(true)}
                className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-colors duration-200"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isAppsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAppsDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-10 border border-gray-100"
                  onMouseLeave={() => setIsAppsDropdownOpen(false)}
                >
                  <a
                    href="/patient/feed"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    <div className="font-medium">Health Feed</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      Personalized health updates
                    </div>
                  </a>
                  <a
                    href="/apps/monitoring"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    <div className="font-medium">Talk to a Awurama</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      24/7 virtual consultations
                    </div>
                  </a>
                  <a
                    href="/apps/appointments"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    <div className="font-medium">Book an Appointment</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      Schedule with specialists
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <button className="px-5 py-2.5 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors duration-200">
                Login
              </button>
            </Link>
            <Link to="/signup">
              {" "}
              <button className="w-full px-4 py-2 border border-teal-900 text-teal-900 rounded-md hover:bg-teal-50 text-sm font-medium">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container md:hidden absolute top-16 inset-x-0 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 transition-all duration-300">
          <div className="px-5 pt-4 pb-6 space-y-1">
            <a
              href="/"
              className="block text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/doc"
              className="block text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Doctors
            </a>
            <a
              href="/patient"
              className="block text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Patients
            </a>

            <div className="space-y-1">
              <button
                onClick={() => setIsAppsDropdownOpen(!isAppsDropdownOpen)}
                className="w-full text-left text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium flex justify-between items-center transition-colors duration-200"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isAppsDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isAppsDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <a
                    href="/patient/patfeed"
                    className="block text-gray-600 hover:text-teal-600 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Health Feed
                  </a>
                  <a
                    href="/apps/monitoring"
                    className="block text-gray-600 hover:text-teal-600 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talk to a Doctor
                  </a>
                  <a
                    href="/apps/records"
                    className="block text-gray-600 hover:text-teal-600 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book an Appointment
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="block text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-teal-600 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>

            <div className="pt-4 space-y-3">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition transform hover:scale-105 scroll-animate opacity-0 animate-delay-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
