import React, { useState } from "react";
import { Plus, Mail, Phone, MapPin, ChevronUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <a href="/" className="inline-flex items-center group">
                <div className="h-10 w-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-90 transition-all duration-300 shadow-sm">
                  <Plus className="text-white w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="ml-3 text-blue-900 font-bold text-2xl tracking-tight">
                  TeleHealth
                </span>
              </a>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Connecting patients with healthcare professionals through secure virtual consultations. 
                Access quality healthcare from anywhere, anytime.
              </p>
              <div className="flex space-x-5">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-lg mb-4 md:mb-6 md:cursor-default"
                onClick={() => toggleSection('company')}
              >
                Company
                <ChevronUp className={`h-5 w-5 md:hidden transition-transform duration-200 ${expandedSection === 'company' ? '' : 'rotate-180'}`} />
              </button>
              <div className={`space-y-3 ${expandedSection === 'company' ? 'block' : 'hidden md:block'}`}>
                {[
                  { href: "/about", text: "About Us" },
                  { href: "/careers", text: "Careers" },
                  { href: "/press", text: "Press" },
                  { href: "/blog", text: "Blog" },
                  { href: "/partners", text: "Partners" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:pl-1"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-lg mb-4 md:mb-6 md:cursor-default"
                onClick={() => toggleSection('services')}
              >
                Services
                <ChevronUp className={`h-5 w-5 md:hidden transition-transform duration-200 ${expandedSection === 'services' ? '' : 'rotate-180'}`} />
              </button>
              <div className={`space-y-3 ${expandedSection === 'services' ? 'block' : 'hidden md:block'}`}>
                {[
                  { href: "/telehealth", text: "Virtual Consultations" },
                  { href: "/monitoring", text: "Remote Monitoring" },
                  { href: "/appointments", text: "Appointment Booking" },
                  { href: "/pharmacy", text: "Online Pharmacy" },
                  { href: "/emergency", text: "24/7 Emergency Care" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:pl-1"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-lg mb-4 md:mb-6 md:cursor-default"
                onClick={() => toggleSection('contact')}
              >
                Contact
                <ChevronUp className={`h-5 w-5 md:hidden transition-transform duration-200 ${expandedSection === 'contact' ? '' : 'rotate-180'}`} />
              </button>
              <div className={`space-y-4 ${expandedSection === 'contact' ? 'block' : 'hidden md:block'}`}>
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <a 
                    href="mailto:support@telehealth.com" 
                    className="ml-3 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    support@telehealth.com
                  </a>
                </div>
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <a 
                    href="tel:+15555555555" 
                    className="ml-3 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    +1 (555) 555-5555
                  </a>
                </div>
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="ml-3 text-sm text-gray-600">
                    123 Health Plaza<br />
                    Medical District, CA 90210
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
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/privacy", text: "Privacy Policy" },
              { href: "/terms", text: "Terms of Service" },
              { href: "/cookies", text: "Cookie Policy" },
              { href: "/sitemap", text: "Sitemap" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;