import React from "react";
import {
  Plus,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <a href="/" className="inline-flex items-center group">
                <div className="h-50 w-50 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                  <img src={logo} alt="logo" />
                </div>
          
              </a>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Connecting patients with healthcare professionals through secure
                virtual consultations. Access quality healthcare from anywhere,
                anytime.
              </p>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={20}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Twitter"
                >
                  <Twitter
                    size={20}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={20}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={20}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <h3 className="font-semibold text-gray-800 text-lg mb-4 md:mb-6">
                Company
              </h3>
              <div className="space-y-3">
                <a
                  href="/about"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  About Us
                </a>
                <a
                  href="/careers"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Careers
                </a>
                <a
                  href="/press"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Press
                </a>
                <a
                  href="/blog"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Blog
                </a>
                <a
                  href="/partners"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Partners
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <h3 className="font-semibold text-gray-800 text-lg mb-4 md:mb-6">
                Services
              </h3>
              <div className="space-y-3">
                <a
                  href="/telehealth"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Virtual Consultations
                </a>
                <a
                  href="/monitoring"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Remote Monitoring
                </a>
                <a
                  href="/appointments"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Appointment Booking
                </a>
                <a
                  href="/pharmacy"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  Online Pharmacy
                </a>
                <a
                  href="/emergency"
                  className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:pl-1"
                >
                  24/7 Emergency Care
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <h3 className="font-semibold text-gray-800 text-lg mb-4 md:mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <a
                    href="mailto:support@telehealth.com"
                    className="ml-3 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                  >
                    support@telehealth.com
                  </a>
                </div>
                <div className="flex items-start group">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <a
                    href="tel: +233 590-555-555"
                    className="ml-3 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                  >
                    +233 590-555-555
                  </a>
                </div>
                <div className="flex items-start group">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="ml-3 text-sm text-gray-600">
                    123 Health Plaza
                    <br />
                    Accra, Ghana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TeleHealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
