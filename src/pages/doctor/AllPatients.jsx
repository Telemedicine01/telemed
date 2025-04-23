import { useState } from "react";
import {
  Search,
  User,
  MessageSquare,
  Calendar,
  Phone,
  Clock,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { Link } from 'react-router-dom';


const AllPatients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: "John Smith",
      age: 42,
      gender: "Male",
      condition: "Hypertension",
      lastVisit: "Apr 15, 2025",
      nextAppointment: "May 02, 2025",
      unreadMessages: 3,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      condition: "Diabetes Type 2",
      lastVisit: "Mar 28, 2025",
      nextAppointment: "Apr 28, 2025",
      unreadMessages: 0,
      status: "active",
    },
    {
      id: 3,
      name: "Michael Chen",
      age: 56,
      gender: "Male",
      condition: "Arthritis",
      lastVisit: "Apr 10, 2025",
      nextAppointment: null,
      unreadMessages: 1,
      status: "inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 29,
      gender: "Female",
      condition: "Asthma",
      lastVisit: "Apr 21, 2025",
      nextAppointment: "Jul 21, 2025",
      unreadMessages: 0,
      status: "active",
    },
    {
      id: 5,
      name: "Robert Wilson",
      age: 62,
      gender: "Male",
      condition: "Coronary Heart Disease",
      lastVisit: "Feb 12, 2025",
      nextAppointment: "May 14, 2025",
      unreadMessages: 2,
      status: "active",
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      age: 33,
      gender: "Female",
      condition: "Pregnancy",
      lastVisit: "Apr 05, 2025",
      nextAppointment: "Apr 26, 2025",
      unreadMessages: 0,
      status: "active",
    },
    {
      id: 7,
      name: "James Brown",
      age: 48,
      gender: "Male",
      condition: "Depression",
      lastVisit: "Mar 15, 2025",
      nextAppointment: null,
      unreadMessages: 0,
      status: "inactive",
    },
    {
      id: 8,
      name: "Patricia Lee",
      age: 71,
      gender: "Female",
      condition: "Osteoporosis",
      lastVisit: "Apr 18, 2025",
      nextAppointment: "Jun 18, 2025",
      unreadMessages: 0,
      status: "active",
    },
  ];

  // Filter patients based on search term and active filter
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (activeFilter === "all") {
      return matchesSearch;
    } else if (activeFilter === "active") {
      return matchesSearch && patient.status === "active";
    } else if (activeFilter === "inactive") {
      return matchesSearch && patient.status === "inactive";
    } else if (activeFilter === "with-messages") {
      return matchesSearch && patient.unreadMessages > 0;
    } else if (activeFilter === "upcoming-appointments") {
      return matchesSearch && patient.nextAppointment !== null;
    }

    return matchesSearch;
  });

  // Navigate to chat page with selected patient
  const navigateToChat = (patientId) => {
    // In a real app, this would navigate to a route like /chat/{patientId}
    console.log(`Navigating to chat with patient ID: ${patientId}`);
    alert(`Navigating to chat with patient ID: ${patientId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  All Patients
                </h1>
                <p className="text-gray-500">
                  View and manage your patient list
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>

                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                >
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Filter panel */}
            {filterOpen && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Filters</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "all"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    All Patients
                  </button>
                  <button
                    onClick={() => setActiveFilter("active")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "active"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Active Patients
                  </button>
                  <button
                    onClick={() => setActiveFilter("inactive")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "inactive"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Inactive Patients
                  </button>
                  <button
                    onClick={() => setActiveFilter("with-messages")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "with-messages"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    With Unread Messages
                  </button>
                  <button
                    onClick={() => setActiveFilter("upcoming-appointments")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "upcoming-appointments"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Upcoming Appointments
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Patient List */}
          <div className="overflow-hidden">
            {filteredPatients.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <li
                    key={patient.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigateToChat(patient.id)}
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User size={24} className="text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-medium text-gray-900">
                                {patient.name}
                              </h2>
                              {patient.unreadMessages > 0 && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  {patient.unreadMessages} new
                                </span>
                              )}
                              <span
                                className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  patient.status === "active"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {patient.status === "active"
                                  ? "Active"
                                  : "Inactive"}
                              </span>
                            </div>
                            <div className="flex items-center mt-1">
                              <p className="text-sm text-gray-500 mr-4">
                                {patient.age} years • {patient.gender}
                              </p>
                              <p className="text-sm text-gray-500">
                                {patient.condition}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight size={20} className="text-gray-400" />
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-1 text-gray-400" />
                          <span>Last visit: {patient.lastVisit}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1 text-gray-400" />
                          <span>
                            {patient.nextAppointment
                              ? `Next appointment: ${patient.nextAppointment}`
                              : "No upcoming appointments"}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-blue-600 justify-end md:justify-start">
                          <MessageSquare size={16} className="mr-1" />
                          <Link to="/doc/docchat">
                            {" "}
                            <span>Open Chat</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  <User size={24} className="text-gray-400" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No patients found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find patients.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPatients.length > 0 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <div className="hidden md:flex items-center">
                  <span className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">
                      {filteredPatients.length}
                    </span>{" "}
                    of <span className="font-medium">{patients.length}</span>{" "}
                    patients
                  </span>
                </div>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
