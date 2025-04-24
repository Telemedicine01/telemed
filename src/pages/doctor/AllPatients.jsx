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
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Placeholder Patient List */}
          <div className="py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <User size={24} className="text-gray-400" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No patients available
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add patient records to view them here.
            </p>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <div className="hidden md:flex items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">0</span> to{" "}
                  <span className="font-medium">0</span> of{" "}
                  <span className="font-medium">0</span> patients
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
