import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  Clock,
  MessageCircle,
  Users,
  FileText,
  CheckCircle,
  X,
  Plus,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router';

// Mock API functions - replace these with actual API calls
const mockApi = {
  fetchNotifications: async () => [
    { id: 1, message: "New appointment request from Sarah Johnson", time: "10 minutes ago", read: false },
    { id: 2, message: "Message from patient Rebecca T. regarding follow-up", time: "1 hour ago", read: false },
    { id: 3, message: "Test results available for review - Melissa A.", time: "3 hours ago", read: true }
  ],
  fetchAppointments: async () => [
    { id: 1, patient: "Emily Watson", time: "09:30 AM", type: "Initial Consultation", status: "Confirmed" },
    { id: 2, patient: "Maria Garcia", time: "11:00 AM", type: "Follow-up", status: "Confirmed" },
    { id: 3, patient: "Jane Doe", time: "02:15 PM", type: "Reproductive Health", status: "Pending" },
    { id: 4, patient: "Lisa Chen", time: "03:45 PM", type: "Mental Health", status: "Confirmed" }
  ],
  fetchMessages: async () => [
    { id: 1, patient: "Rebecca Torres", subject: "Follow-up Question", time: "1 hour ago", unread: true },
    { id: 2, patient: "Aisha Johnson", subject: "Test Results", time: "3 hours ago", unread: false },
    { id: 3, patient: "Sophia Rodriguez", subject: "Medication Refill", time: "Yesterday", unread: false }
  ],
  fetchStats: async () => ({
    totalPatients: 248,
    appointmentsToday: 4,
    unreadMessages: 3,
    pendingReviews: 5
  }),
  fetchPatientDistribution: async () => ({
    byConcern: [
      { name: "Reproductive Health", percentage: 38 },
      { name: "Mental Health", percentage: 25 },
      { name: "Hormonal Issues", percentage: 22 },
      { name: "Other", percentage: 15 }
    ],
    byAge: [
      { name: "18-24", percentage: 20 },
      { name: "25-34", percentage: 35 },
      { name: "35-44", percentage: 25 },
      { name: "45+", percentage: 20 }
    ]
  }),
  fetchTasks: async () => [
    { id: 1, title: "Review lab results", patient: "Emily Watson", due: "Today", completed: false },
    { id: 2, title: "Follow-up call", patient: "Jane Doe", due: "Tomorrow", completed: false },
    { id: 3, title: "Complete medical report", patient: "Maria Garcia", due: "Apr 24", completed: false }
  ]
};

const DocDash = () => {
  // State for all data
  const [data, setData] = useState({
    notifications: [],
    appointments: [],
    messages: [],
    stats: null,
    patientDistribution: null,
    tasks: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [newTask, setNewTask] = useState('');

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // In a real app, you might want to fetch these in parallel with Promise.all
        const notifications = await mockApi.fetchNotifications();
        const appointments = await mockApi.fetchAppointments();
        const messages = await mockApi.fetchMessages();
        const stats = await mockApi.fetchStats();
        const patientDistribution = await mockApi.fetchPatientDistribution();
        const tasks = await mockApi.fetchTasks();
        
        setData({
          notifications,
          appointments,
          messages,
          stats,
          patientDistribution,
          tasks
        });
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // API action handlers - replace with actual API calls
  const markNotificationAsRead = async (id) => {
    try {
      // In a real app, you would call an API endpoint here
      // await api.markNotificationAsRead(id);
      
      setData(prev => ({
        ...prev,
        notifications: prev.notifications.map(notification => 
          notification.id === id ? {...notification, read: true} : notification
        )
      }));
    } catch (err) {
      console.error("Failed to mark notification as read:", err);
    }
  };

  const dismissNotification = async (id) => {
    try {
      // await api.dismissNotification(id);
      
      setData(prev => ({
        ...prev,
        notifications: prev.notifications.filter(notification => notification.id !== id)
      }));
    } catch (err) {
      console.error("Failed to dismiss notification:", err);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    
    try {
      // In a real app: await api.addTask({ title: newTask });
      const newTaskItem = {
        id: Date.now(), // temporary ID
        title: newTask,
        patient: '',
        due: 'Today',
        completed: false
      };
      
      setData(prev => ({
        ...prev,
        tasks: [...prev.tasks, newTaskItem]
      }));
      
      setNewTask('');
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  const toggleTaskCompletion = async (id) => {
    try {
      // await api.toggleTaskCompletion(id);
      
      setData(prev => ({
        ...prev,
        tasks: prev.tasks.map(task => 
          task.id === id ? {...task, completed: !task.completed} : task
        )
      }));
    } catch (err) {
      console.error("Failed to toggle task completion:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      // await api.deleteTask(id);
      
      setData(prev => ({
        ...prev,
        tasks: prev.tasks.filter(task => task.id !== id)
      }));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm max-w-md">
          <div className="text-red-500 mb-4">
            <X className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading data</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h1 className="text-3xl font-bold">Welcome Doc!</h1>
              <p className="mt-2 text-teal-100">
                Tuesday, April 22, 2025 | {data.stats?.appointmentsToday || 0} patients scheduled today
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
               <Link to='/doc/docappointments'>
               <button className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 shadow-sm">
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
                </button>
               </Link>
             <Link to='/doc/mypatients'>
             <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm">
                <MessageCircle className="mr-2 h-5 w-5" />
                Messages
              </button>
             </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Patients</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{data.stats?.totalPatients || 0}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Calendar className="h-6 w-6 text-pink-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Appointments</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{data.stats?.appointmentsToday || 0}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Unread Messages</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{data.stats?.unreadMessages || 0}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Today's Appointments</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.appointments.map(appointment => (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{appointment.patient}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            appointment.status === 'Confirmed'
                              ? 'bg-green-100 text-green-900'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-100 text-right">
               <Link to='/doc/docappointments'>
               <button className="text-sm font-medium text-teal-600 hover:text-teal-800">
                  View All Appointments
                </button>
               </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Patient Distribution</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-4">By Concern</h3>
                    <div className="space-y-4">
                      {data.patientDistribution?.byConcern.map((concern, index) => {
                        const colors = ['teal', 'pink', 'blue', 'green'];
                        return (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-600">{concern.name}</span>
                              <span className="text-sm font-medium text-gray-900">{concern.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`bg-${colors[index]}-500 h-2 rounded-full`} 
                                style={{ width: `${concern.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-4">By Age Group</h3>
                    <div className="space-y-4">
                      {data.patientDistribution?.byAge.map((ageGroup, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">{ageGroup.name}</span>
                            <span className="text-sm font-medium text-gray-900">{ageGroup.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-teal-600 h-2 rounded-full" 
                              style={{ width: `${ageGroup.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
           
            
            
            {/* To-Do List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">To-Do List</h2>
              </div>
              <div className="p-4">
                {/* Add new task form */}
                <div className="flex mb-4">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    onClick={addTask}
                    className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Tasks list */}
                <div className="space-y-3">
                  {data.tasks.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleTaskCompletion(task.id)}
                          className={`p-1 rounded-full mr-3 ${task.completed ? 'text-green-500 bg-green-100' : 'text-gray-400 bg-gray-200'}`}
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <div>
                          <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {task.title}
                          </p>
                         
                        </div>
                      </div>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  
                  {data.tasks.length === 0 && (
                    <p className="text-center text-gray-500 py-4">No tasks yet. Add one above!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DocDash;