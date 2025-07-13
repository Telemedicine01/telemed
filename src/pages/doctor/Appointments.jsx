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

  const appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'Upcoming',
      date: new Date(),
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'Past',
      date: new Date(new Date().setDate(new Date().getDate() - 1)), // yesterday
    },
    {
      id: 3,
      patientName: 'Alex Johnson',
      time: '1:00 PM',
      type: 'Check-up',
      status: 'Upcoming',
      date: new Date(),
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      time: '4:00 PM',
      type: 'Consultation',
      status: 'Past',
      date: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
    },
  ];

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

  const filteredAppointments = appointments.filter(app => {
    if (activeTab === 'upcoming') {
      return app.status === 'Upcoming';
    } else if (activeTab === 'past') {
      return app.status === 'Past';
    } else {
      return true; // all appointments
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center"><Calendar className="h-5 w-5 mr-2 text-teal-600"/> Appointment Management</h1>
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
            {/* No filter form used yet */}
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

          {/* Appointments List */}
          <div className="divide-y divide-gray-100">
            {filteredAppointments.map(appointment => (
              <div key={appointment.id} className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4 mr-1" /> {appointment.time} • {appointment.type}
                  </div>
                </div>
                <div className="mt-3 md:mt-0 flex items-center gap-3">
                  <button onClick={() => toggleAppointmentDetails(appointment.id)} className="text-sm text-teal-600 hover:underline">
                    {expandedAppointment === appointment.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button onClick={() => approveAppointment(appointment.id)} className="flex items-center bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg hover:bg-teal-200 transition-colors text-sm">
                    <CheckCircle className="h-4 w-4 mr-1" /> Approve
                  </button>
                </div>
                {expandedAppointment === appointment.id && (
                  <div className="mt-3 text-sm text-gray-700">
                    <p>Date: {formatDate(appointment.date)}</p>
                    <p>Status: {appointment.status}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Appointments;
