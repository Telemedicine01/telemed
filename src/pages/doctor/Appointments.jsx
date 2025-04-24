import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  X,
  CheckCircle,
  PlusCircle,
  ChevronDown
} from 'lucide-react';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterOpen, setFilterOpen] = useState(false);
  const [expandedAppointment, setExpandedAppointment] = useState(null);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const navigateDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const toggleAppointmentDetails = (id) => {
    setExpandedAppointment(expandedAppointment === id ? null : id);
  };

  const approveAppointment = (id) => {
    console.log(`Approving appointment ${id}`);
  };

  const bookAppointment = () => {
    console.log('Booking new appointment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900"><Calendar className="h-5 w-5 mr-2 text-teal-600"/> Appointment Management</h1>
            <p className="text-gray-500">View and manage patient appointments</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button 
              onClick={bookAppointment}
              className="flex items-center justify-center px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                />
              </div>
              <button 
                onClick={() => setFilterOpen(!filterOpen)} 
                className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
                <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-200 ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {filterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Appointment Type</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="">All Types</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="">All Status</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Date Range</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="today">Today</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={() => setFilterOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100">
            <div className="flex">
              <button 
                onClick={() => setActiveTab('upcoming')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'upcoming' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('past')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'past' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Past
              </button>
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'all' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                All
              </button>
            </div>
            <div className="px-5 py-3 bg-gray-50 w-full sm:w-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-700">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => navigateDate(-1)} className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  </button>
                  <button onClick={() => setSelectedDate(new Date())} className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Today
                  </button>
                  <button onClick={() => navigateDate(1)} className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
