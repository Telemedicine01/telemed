import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  Clock,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  X,
  Plus,
  Trash2,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock API functions
const mockApi = {
  fetchAppointments: async () => [
    { id: 1, doctor: "Dr. Sarah Johnson", time: "09:30 AM", date: "Today", type: "Follow-up", status: "Confirmed" },
    { id: 2, doctor: "Dr. Michael Chen", time: "02:15 PM", date: "Tomorrow", type: "Consultation", status: "Confirmed" }
  ],
  fetchMessages: async () => [
    { id: 1, from: "Dr. Sarah Johnson", subject: "Test Results", time: "1 hour ago", unread: true },
    { id: 2, from: "Nurse Practitioner", subject: "Medication Refill", time: "Yesterday", unread: false }
  ],
  fetchHealthData: async () => ({
    lastCheckup: "April 10, 2025",
    nextCheckup: "October 10, 2025",
    medications: [
      { name: "Medication A", dosage: "50mg", frequency: "Once daily" },
      { name: "Medication B", dosage: "100mg", frequency: "Twice daily" }
    ]
  }),
  fetchTasks: async () => [
    { id: 1, title: "Take medication", time: "Morning", completed: false },
    { id: 2, title: "Exercise for 30 mins", time: "Evening", completed: false },
    { id: 3, title: "Drink 8 glasses of water", time: "All day", completed: false }
  ]
};

const PatDash = () => {
  const [data, setData] = useState({
    appointments: [],
    messages: [],
    healthData: null,
    tasks: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: 'Hello! How can I help you today?', time: 'Just now' }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const appointments = await mockApi.fetchAppointments();
        const messages = await mockApi.fetchMessages();
        const healthData = await mockApi.fetchHealthData();
        const tasks = await mockApi.fetchTasks();
        
        setData({
          appointments,
          messages,
          healthData,
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

  const toggleTaskCompletion = async (id) => {
    try {
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

  const addTask = async () => {
    if (!newTask.trim()) return;
    
    try {
      const newTaskItem = {
        id: Date.now(),
        title: newTask,
        time: '',
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

  const deleteTask = async (id) => {
    try {
      setData(prev => ({
        ...prev,
        tasks: prev.tasks.filter(task => task.id !== id)
      }));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage = {
      sender: 'user',
      text: message,
      time: 'Just now'
    };
    
    setChatMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    
    // Simulate assistant response after a delay
    setTimeout(() => {
      const responses = [
        "I understand your concern. Let me check that for you.",
        "That's a good question. Here's what I found...",
        "I can help with that. Would you like me to connect you with your doctor?",
        "Based on your records, I recommend..."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setChatMessages(prev => [...prev, {
        sender: 'assistant',
        text: randomResponse,
        time: 'Just now'
      }]);
    }, 1000);
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
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="mt-2 text-teal-100">
                Tuesday, April 22, 2025 | {data.appointments.length} upcoming appointments
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link to='/patient/appointments'>
                <button className="inline-flex items-center px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 shadow-sm">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Appointments
                </button>
              </Link>
              <Link to='/patient/messages'>
                <button className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-sm">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {data.appointments.map(appointment => (
                  <div key={appointment.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <User className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{appointment.doctor}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            appointment.status === 'Confirmed'
                              ? 'bg-green-100 text-green-900'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {appointment.date} at {appointment.time}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          {appointment.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {data.appointments.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No upcoming appointments
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-gray-100 text-right">
                <Link to='/patient/appointments'>
                  <button className="text-sm font-medium text-teal-600 hover:text-teal-800">
                    View All Appointments
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Health Summary */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Health Summary</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Checkups</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Last Checkup</p>
                        <p className="text-sm text-gray-500">{data.healthData?.lastCheckup}</p>
                      </div>
                      <div className="p-2 bg-green-100 rounded-full">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Next Checkup</p>
                        <p className="text-sm text-gray-500">{data.healthData?.nextCheckup}</p>
                      </div>
                      <div className="p-2 bg-teal-100 rounded-full">
                        <Calendar className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Current Medications</h3>
                  <div className="space-y-3">
                    {data.healthData?.medications.map((med, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">{med.name}</p>
                        <p className="text-xs text-gray-500">
                          {med.dosage} • {med.frequency}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Messages */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {data.messages.map(msg => (
                  <div key={msg.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${msg.unread ? 'bg-teal-100' : 'bg-gray-100'}`}>
                        <MessageCircle className={`h-5 w-5 ${msg.unread ? 'text-teal-600' : 'text-gray-500'}`} />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">{msg.from}</h3>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{msg.subject}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {data.messages.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No messages
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-gray-100 text-right">
                <Link to='/patient/messages'>
                  <button className="text-sm font-medium text-teal-600 hover:text-teal-800">
                    View All Messages
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Health Tasks */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Today's Health Tasks</h2>
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
                          {task.time && (
                            <p className="text-xs text-gray-500">{task.time}</p>
                          )}
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

      {/* Health Assistant Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {assistantOpen ? (
          <div className="w-80 bg-white rounded-t-xl shadow-xl overflow-hidden">
            <div 
              className="bg-teal-600 text-white p-4 flex justify-between items-center cursor-pointer"
              onClick={() => setAssistantOpen(false)}
            >
              <h3 className="font-medium">Health Assistant</h3>
              <ChevronDown className="h-5 w-5" />
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' 
                      ? 'bg-teal-100 text-gray-800' 
                      : 'bg-gray-100 text-gray-800'}`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 p-3">
              <div className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700"
                >
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setAssistantOpen(true)}
            className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default PatDash;