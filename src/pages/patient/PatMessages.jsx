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
  Star,
  Stethoscope,
} from "lucide-react";
import { Link } from 'react-router-dom';

const PatMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.8,
      hospital: "Accra Heart Center",
      lastVisit: "Apr 15, 2025",
      nextAppointment: "May 02, 2025",
      unreadMessages: 0,
      status: "primary",
    },
    {
      id: 2,
      name: "Dr. Kwame Mensah",
      specialty: "General Practitioner",
      rating: 4.5,
      hospital: "Community Health Clinic",
      lastVisit: "Mar 28, 2025",
      nextAppointment: "Apr 28, 2025",
      unreadMessages: 2,
      status: "primary",
    },
    {
      id: 3,
      name: "Dr. Ama Ofori",
      specialty: "Pediatrician",
      rating: 4.9,
      hospital: "Children's Wellness Center",
      lastVisit: "Apr 10, 2025",
      nextAppointment: null,
      unreadMessages: 0,
      status: "secondary",
    },
    {
      id: 4,
      name: "Dr. David Smith",
      specialty: "Neurologist",
      rating: 4.7,
      hospital: "Neurology Specialists",
      lastVisit: "Apr 21, 2025",
      nextAppointment: "Jul 21, 2025",
      unreadMessages: 0,
      status: "secondary",
    },
    {
      id: 5,
      name: "Dr. Fatima Mohammed",
      specialty: "OB/GYN",
      rating: 4.6,
      hospital: "Women's Health Center",
      lastVisit: "Feb 12, 2025",
      nextAppointment: "May 14, 2025",
      unreadMessages: 1,
      status: "primary",
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      rating: 4.4,
      hospital: "Bone & Joint Institute",
      lastVisit: "Apr 05, 2025",
      nextAppointment: "Apr 26, 2025",
      unreadMessages: 0,
      status: "secondary",
    },
  ];

  // Filter doctors based on search term and active filter
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "all") {
      return matchesSearch;
    } else if (activeFilter === "primary") {
      return matchesSearch && doctor.status === "primary";
    } else if (activeFilter === "secondary") {
      return matchesSearch && doctor.status === "secondary";
    } else if (activeFilter === "with-messages") {
      return matchesSearch && doctor.unreadMessages > 0;
    } else if (activeFilter === "upcoming-appointments") {
      return matchesSearch && doctor.nextAppointment !== null;
    }

    return matchesSearch;
  });

  // Navigate to chat page with selected doctor
  const navigateToChat = (doctorId) => {
    console.log(`Navigating to chat with doctor ID: ${doctorId}`);
    alert(`Navigating to chat with doctor ID: ${doctorId}`);
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
                  My Doctors
                </h1>
                <p className="text-gray-500">
                  View and manage your healthcare providers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search doctors..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full"
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
                        ? "bg-teal-100 text-teal-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    All Doctors
                  </button>
                  <button
                    onClick={() => setActiveFilter("primary")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "primary"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Primary Care
                  </button>
                  <button
                    onClick={() => setActiveFilter("secondary")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "secondary"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Specialists
                  </button>
                  <button
                    onClick={() => setActiveFilter("with-messages")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "with-messages"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    With Unread Messages
                  </button>
                  <button
                    onClick={() => setActiveFilter("upcoming-appointments")}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === "upcoming-appointments"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Upcoming Appointments
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Doctors List */}
          <div className="overflow-hidden">
            {filteredDoctors.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredDoctors.map((doctor) => (
                  <li
                    key={doctor.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigateToChat(doctor.id)}
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center">
                            <User size={24} className="text-teal-600" />
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-medium text-gray-900">
                                {doctor.name}
                              </h2>
                              {doctor.unreadMessages > 0 && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  {doctor.unreadMessages} new
                                </span>
                              )}
                              <span
                                className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  doctor.status === "primary"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {doctor.status === "primary"
                                  ? "Primary"
                                  : "Specialist"}
                              </span>
                            </div>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center mr-4">
                                <Stethoscope size={16} className="text-gray-400 mr-1" />
                                <p className="text-sm text-gray-500">
                                  {doctor.specialty}
                                </p>
                              </div>
                              <div className="flex items-center">
                                <Star size={16} className="text-yellow-400 mr-1" />
                                <p className="text-sm text-gray-500">
                                  {doctor.rating}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {doctor.hospital}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight size={20} className="text-gray-400" />
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-1 text-gray-400" />
                          <span>Last visit: {doctor.lastVisit}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1 text-gray-400" />
                          <span>
                            {doctor.nextAppointment
                              ? `Next appointment: ${doctor.nextAppointment}`
                              : "No upcoming appointments"}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-teal-600 justify-end md:justify-start">
                          <MessageSquare size={16} className="mr-1" />
                          <Link to="/patient/chat">
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
                  No doctors found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find doctors.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredDoctors.length > 0 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <div className="hidden md:flex items-center">
                  <span className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">
                      {filteredDoctors.length}
                    </span>{" "}
                    of <span className="font-medium">{doctors.length}</span>{" "}
                    doctors
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

export default PatMessages;