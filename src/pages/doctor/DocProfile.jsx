import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Award,
  Briefcase,
  Heart,
  Book,
  FileText,
  MessageSquare,
  Globe,
  Languages,
  Settings,
  Edit,
  Camera,
  Save,
  X,
  IdCard,
} from "lucide-react";

const DocProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Profile Header */}
      <div className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end space-y-6 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-teal-300 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/api/placeholder/150/150"
                  alt="Doctor profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-teal-600 p-2 rounded-full shadow-md cursor-pointer hover:bg-teal-700">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Dr. Sarah Miller</h1>
              <p className="text-teal-200">OB/GYN Specialist</p>
              <div className="flex items-center space-x-2 mt-2">
                <IdCard className="w-4 h-4 text-teal-200" />
                <span className="text-sm text-teal-100"> 0071444 </span>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg shadow-md">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Mode Notice */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Edit className="w-5 h-5 text-blue-500 mr-2" />
            <p className="text-blue-700">
              Profile Edit Mode - Make changes and save when you're done
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center">
              <X className="w-4 h-4 mr-1" />
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center">
              <Save className="w-4 h-4 mr-1" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Email
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <Mail className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="email"
                      className="flex-1 outline-none text-gray-800"
                      defaultValue="dr.miller@lovehospital.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Phone
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <Phone className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="tel"
                      className="flex-1 outline-none text-gray-800"
                      defaultValue="030 555 5555"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Office{" "}
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800"
                      defaultValue="K. Nkrumah Building Rm. 6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Availability
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Office Hours
                  </label>
                  <div className="border border-gray-300 rounded-lg divide-y">
                    {[
                      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Wednesday", hours: "9:00 AM - 12:00 PM" },
                      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Friday", hours: "9:00 AM - 3:00 PM" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-2 hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">
                            {schedule.day}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="text-sm text-right outline-none bg-transparent"
                            defaultValue={schedule.hours}
                          />
                          <Clock className="w-4 h-4 text-gray-400 ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Virtual Appointments
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 rounded"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Available for telehealth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 space-y-6 mt-6 md:mt-0">
            {/* Bio & Specialties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Professional Profile
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="OB/GYN Specialist"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="Dr. Sarah Miller is a board-certified OB/GYN with over 15 years of experience in women's health. She specializes in reproductive health, menopause management, and minimally invasive gynecological procedures. Dr. Miller is passionate about providing compassionate, judgment-free care and creating a safe space for women to discuss sensitive health concerns. She takes a holistic approach to women's health, considering physical, emotional, and mental well-being in her treatment plans."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Specialties
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Reproductive Health",
                      "Menopause Management",
                      "Minimally Invasive Surgery",
                      "Contraception",
                      "Menstrual Disorders",
                    ].map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full"
                      >
                        <span className="text-sm">{specialty}</span>
                        <button className="ml-2 text-teal-600 hover:text-teal-800">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <Heart className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800 text-sm"
                      placeholder="Add a specialty..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocProfile;
