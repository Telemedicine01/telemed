import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal,
  Video,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  PlusCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expandedAppointment, setExpandedAppointment] = useState(null);

  // Sample appointment data
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      time: '9:00 AM',
      date: 'Apr 23, 2025',
      type: 'Annual Checkup',
      status: 'confirmed',
      duration: '30 min',
      location: 'Main Clinic - Room 205',
      isVirtual: false,
      notes: 'Please arrive 15 minutes early for paperwork',
      speciality: 'Cardiology'
    },
    {
      id: 2,
      doctorName: 'Dr. Michael Chen',
      time: '2:15 PM',
      date: 'Apr 25, 2025',
      type: 'Follow-up',
      status: 'confirmed',
      duration: '20 min',
      location: 'Telehealth Appointment',
      isVirtual: true,
      notes: 'Video call link will be sent 1 hour before appointment',
      speciality: 'Primary Care'
    },
    {
      id: 3,
      doctorName: 'Dr. Emily Wilson',
      time: '11:00 AM',
      date: 'Apr 28, 2025',
      type: 'Consultation',
      status: 'pending',
      duration: '45 min',
      location: 'Downtown Clinic - Room 102',
      isVirtual: false,
      notes: 'Bring your recent test results',
      speciality: 'Neurology'
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


  // Cancel appointment
  const cancelAppointment = (id) => {
    // In a real app, you would update the appointment status via API
    console.log(`Canceling appointment ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              <Calendar className="h-5 w-5 mr-2 text-blue-600 inline"/> 
              My Appointments
            </h1>
            <p className="text-gray-500">View and manage your scheduled visits</p>
          </div>
          
          <Link to = "/patient/bkappointment">
          <button 
            className="flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            New Appointment
          </button>
             </Link>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
          {/* Tabs and date selector */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100">
            {/* Tabs */}
            <div className="flex">
              <button 
                onClick={() => setActiveTab('upcoming')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'upcoming' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('past')} 
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'past' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Past
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
                      {/* Doctor info */}
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">{appointment.doctorName}</h3>
                          <p className="text-sm text-gray-500 truncate">{appointment.speciality}</p>
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
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Appointment Details</h4>
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Type:</span> {appointment.type}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <span className="font-medium">Date:</span> {appointment.date}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <span className="font-medium">Duration:</span> {appointment.duration}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Location</h4>
                            <div className="flex items-start">
                              {appointment.isVirtual ? (
                                <>
                                  <Video className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                                  <div>
                                    <p className="text-sm text-gray-700">Virtual Appointment</p>
                                    <p className="text-xs text-gray-500 mt-1">Link will be sent prior to appointment</p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                                  <p className="text-sm text-gray-700">{appointment.location}</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {appointment.notes && (
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Instructions</h4>
                            <p className="text-sm text-gray-700">{appointment.notes}</p>
                          </div>
                        )}
                        
                        <div className="flex justify-end space-x-3 pt-2">
                          {appointment.status === 'confirmed' && (
                            <button 
                              onClick={() => cancelAppointment(appointment.id)}
                              className="flex items-center px-3 py-1.5 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200 text-sm font-medium"
                            >
                              <XCircle className="h-4 w-4 mr-1.5" />
                              Cancel Appointment
                            </button>
                          )}
                          <button className="flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                            <CheckCircle className="h-4 w-4 mr-1.5" />
                            Reschedule
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
             <Link to = "/patient/bkappointment">
             <button 
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Schedule New Appointment
                </button>
             </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAppointments;