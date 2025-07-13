import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Heart,
  FileText,
  MessageSquare,
  Globe,
  Languages,
  Settings,
  Edit,
  Camera,
  Save,
  X,
  Clipboard,
  Shield,
  Activity,
  Pill,
  AlertCircle,
} from "lucide-react";
import patprof from "../../assets/images/patprof.jpeg"

const PatProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Profile Header */}
      <div className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end space-y-6 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-teal-300 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={patprof}
                  alt="Patient profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-teal-600 p-2 rounded-full shadow-md cursor-pointer hover:bg-teal-700">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">John Asante</h1>
              <p className="text-teal-200">Patient</p>
              <div className="flex items-center space-x-2 mt-2">
                <Clipboard className="w-4 h-4 text-teal-200" />
                <span className="text-sm text-teal-100">MRN: 20230045</span>
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
      <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Edit className="w-5 h-5 text-teal-500 mr-2" />
            <p className="text-teal-700">
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
            {/* Personal Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Date of Birth
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      className="flex-1 outline-none text-gray-800"
                      defaultValue="1985-06-15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Gender
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Blood Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>Unknown</option>
                  </select>
                </div>
              </div>
            </div>

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
                      defaultValue="john.asante@example.com"
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
                      defaultValue="024 123 4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Address
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800"
                      defaultValue="123 Main St, Accra, Ghana"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Emergency Contact
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="Ama Asante"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Relationship
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="Spouse"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="024 765 4321"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 space-y-6 mt-6 md:mt-0">
            {/* Medical Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Medical Information
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Primary Care Physician
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    defaultValue="Dr. Kwame Mensah"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Allergies
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Penicillin", "Peanuts", "Latex"].map((allergy, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">{allergy}</span>
                        <button className="ml-2 text-red-600 hover:text-red-800">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <AlertCircle className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800 text-sm"
                      placeholder="Add an allergy..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Current Medications
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Lisinopril 10mg", "Atorvastatin 20mg", "Metformin 500mg"].map(
                      (med, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full"
                        >
                          <Pill className="w-4 h-4 mr-1" />
                          <span className="text-sm">{med}</span>
                          <button className="ml-2 text-teal-600 hover:text-teal-800">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <Pill className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800 text-sm"
                      placeholder="Add a medication..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Chronic Conditions
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Hypertension", "Type 2 Diabetes"].map((condition, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
                      >
                        <Activity className="w-4 h-4 mr-1" />
                        <span className="text-sm">{condition}</span>
                        <button className="ml-2 text-yellow-600 hover:text-yellow-800">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <Activity className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="flex-1 outline-none text-gray-800 text-sm"
                      placeholder="Add a condition..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Insurance Information
                </h2>
                <button className="text-teal-600 hover:text-teal-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Primary Insurance
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Provider"
                        defaultValue="National Health Insurance"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Policy Number"
                        defaultValue="NHIS-2023-45678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Secondary Insurance
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Provider"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Policy Number"
                        defaultValue=""
                      />
                    </div>
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

export default PatProfile;