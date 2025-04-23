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

  // Sample appointment data
  const appointments = [
    {
      id: 1,
      patientName: 'John Smith',
      time: '9:00 AM',
      date: 'Apr 23, 2025',
      type: 'Annual Checkup',
      status: 'confirmed',
      duration: '30 min',
      notes: 'Patient requested morning appointment',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      time: '10:30 AM',
      date: 'Apr 23, 2025',
      type: 'Follow-up',
      status: 'confirmed',
      duration: '20 min',
      notes: 'Review lab results',
      email: 'sarah.j@example.com',
      phone: '(555) 234-5678'
    },
    {
      id: 3,
      patientName: 'Michael Davis',
      time: '1:15 PM',
      date: 'Apr 23, 2025',
      type: 'New Patient',
      status: 'pending',
      duration: '45 min',
      notes: '',
      email: 'michael.d@example.com',
      phone: '(555) 345-6789'
    },
    {
      id: 4,
      patientName: 'Emily Wilson',
      time: '3:00 PM',
      date: 'Apr 24, 2025',
      type: 'Consultation',
      status: 'pending',
      duration: '30 min',
      notes: 'Patient requested a tele-health appointment',
      email: 'emily.w@example.com',
      phone: '(555) 456-7890'
    },
    {
      id: 5,
      patientName: 'Robert Chen',
      time: '11:45 AM',
      date: 'Apr 24, 2025',
      type: 'Follow-up',
      status: 'confirmed',
      duration: '20 min',
      notes: '',
      email: 'robert.c@example.com',
      phone: '(555) 567-8901'
    }
  ];

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Filter appointments for selected date and tab
  const filteredAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date).toDateString();
    const selected = selectedDate.toDateString();
    
    if (activeTab === 'upcoming') {
      return appointmentDate >= selected;
    } else if (activeTab === 'past') {
      return appointmentDate < selected;
    } else if (activeTab === 'all') {
      return true;
    }
    return false;
  });

  // Navigation for date selector
  const navigateDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  // Toggle appointment details
  const toggleAppointmentDetails = (id) => {
    setExpandedAppointment(expandedAppointment === id ? null : id);
  };

  // Approve appointment
  const approveAppointment = (id) => {
    // In a real app, you would update the appointment status via API
    console.log(`Approving appointment ${id}`);
  };

  // Book new appointment
  const bookAppointment = () => {
    // In a real app, you would navigate to booking page or open a modal
    console.log('Booking new appointment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with action buttons */}
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

        {/* Main card */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
          {/* Search and filter bar */}
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
            
            {/* Filter panel */}
            {filterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Appointment Type</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="">All Types</option>
                      <option value="checkup">Annual Checkup</option>
                      <option value="follow-up">Follow-up</option>
                      <option value="new">New Patient</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Date Range</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200">
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="custom">Custom Range</option>
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
          
          {/* Tabs and date selector */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100">
            {/* Tabs */}
            <div className="flex">
              <button 
                onClick={() => setActiveTab('upcoming')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'upcoming' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('past')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'past' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Past
              </button>
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'all' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                All
              </button>
            </div>
            
            {/* Date selector */}
            <div className="px-5 py-3 bg-gray-50 w-full sm:w-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-700">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => navigateDate(-1)} 
                    className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  </button>
                  <button 
                    onClick={() => setSelectedDate(new Date())} 
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Today
                  </button>
                  <button 
                    onClick={() => navigateDate(1)} 
                    className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Appointments list */}
          <div className="divide-y divide-gray-100">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map(appointment => (
                <div key={appointment.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <div className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Patient info */}
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-teal-600" />
                        </div>
                        <div className="ml-4 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">{appointment.patientName}</h3>
                          <p className="text-sm text-gray-500 truncate">{appointment.type}</p>
                        </div>
                      </div>
                      
                      {/* Appointment time */}
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-1.5" />
                        <span className="text-sm font-medium text-gray-700">{appointment.time}</span>
                      </div>
                      
                      {/* Status */}
                      <div className="hidden md:block">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-teal-100 text-teal-800' 
                            : appointment.status === 'pending' 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-rose-100 text-rose-800'
                        }`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        {appointment.status === 'pending' && (
                          <button 
                            onClick={() => approveAppointment(appointment.id)}
                            className="flex items-center px-3 py-1.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium"
                          >
                            <CheckCircle className="h-4 w-4 mr-1.5" />
                            Approve
                          </button>
                        )}
                        <button 
                          onClick={() => toggleAppointmentDetails(appointment.id)}
                          className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Expanded details */}
                    {expandedAppointment === appointment.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Contact</h4>
                            <p className="text-sm text-gray-700">{appointment.email}</p>
                            <p className="text-sm text-gray-700 mt-1">{appointment.phone}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Details</h4>
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Duration:</span> {appointment.duration}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <span className="font-medium">Date:</span> {appointment.date}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Notes</h4>
                            <p className="text-sm text-gray-700">
                              {appointment.notes || 'No notes available'}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-3 pt-2">
                          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
                            Reschedule
                          </button>
                          <button className="text-sm font-medium text-rose-600 hover:text-rose-800 transition-colors duration-200">
                            Cancel Appointment
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">No appointments found</h3>
                <p className="mt-1 text-gray-500 max-w-md mx-auto">
                  {activeTab === 'upcoming' 
                    ? 'You have no upcoming appointments scheduled.' 
                    : 'No past appointments found for this period.'}
                </p>
                <button 
                  onClick={bookAppointment}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm"
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Book New Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;