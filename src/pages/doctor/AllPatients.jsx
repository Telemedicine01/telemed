import {
  Search,
  User,
  MessageSquare,
  Calendar,
  Clock,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const AllPatients = () => {
  // Sample patients data
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 42,
      lastVisit: "2025-04-15",
      nextAppointment: "2025-05-10",
      status: "Active",
      unreadMessages: 2,
      image: null,
      lastMessage: "I've been taking the medication as prescribed but still having some pain.",
      messageTime: "10:32 AM"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 58,
      lastVisit: "2025-04-20",
      nextAppointment: "2025-05-05",
      status: "Active",
      unreadMessages: 0,
      image: null,
      lastMessage: "The new prescription seems to be working well. My blood pressure readings have improved.",
      messageTime: "Yesterday"
    }
  ];

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
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full"
                  />
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>

                <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Filter Panel (Static) */}
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Filters</h3>
                <button className="text-gray-400 hover:text-gray-500">
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "All Patients",
                  "Active Patients",
                  "Inactive Patients",
                  "With Unread Messages",
                  "Upcoming Appointments",
                ].map((label, idx) => (
                  <button
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${
                      idx === 0 
                        ? "bg-teal-100 text-teal-800" 
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Patient List */}
          <div className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <Link 
                key={patient.id}
                to={`/patients/${patient.id}`} 
                className="block hover:bg-gray-50"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {patient.image ? (
                          <img 
                            src={patient.image} 
                            alt={patient.name}
                            className="h-12 w-12 rounded-full"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <User size={20} className="text-teal-600" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h2 className="text-lg font-medium text-gray-900">{patient.name}</h2>
                          <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {patient.status}
                          </span>
                          {patient.unreadMessages > 0 && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              {patient.unreadMessages} new
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <Calendar size={14} className="mr-1" />
                            <span>Next: {new Date(patient.nextAppointment).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>Age: {patient.age}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>
                  
                  {/* Chat preview */}
                  <div className="mt-3 ml-16 p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 line-clamp-2">{patient.lastMessage}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex items-center">
                        <Clock size={14} className="text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{patient.messageTime}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200">
                        <MessageSquare size={14} className="mr-1" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <div className="hidden md:flex items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">2</span> of{" "}
                  <span className="font-medium">2</span> patients
                </span>
              </div>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPatients;