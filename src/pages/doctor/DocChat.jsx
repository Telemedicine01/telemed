import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Paperclip, 
  ChevronLeft, 
  Phone, 
  Video, 
  Calendar, 
  User, 
  Info, 
  File, 
  Image as ImageIcon,
  Mic,
  Clock,
  CheckCheck
} from 'lucide-react';


const DocChat = () => {
const [message, setMessage] = useState('');
  const [showPatientInfo, setShowPatientInfo] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample patient data
  const patient = {
    id: 1,
    name: 'Sarah Johnson',
    age: 35,
    gender: 'Female',
    condition: 'Diabetes Type 2',
    lastVisit: 'Mar 28, 2025',
    nextAppointment: 'Apr 28, 2025',
    phone: '(555) 123-4567',
    email: 'sarah.johnson@example.com',
    medicalHistory: [
      'Diagnosed with Type 2 Diabetes in 2021',
      'Hypertension (well-controlled)',
      'Allergic to penicillin'
    ],
    currentMedications: [
      'Metformin 500mg twice daily',
      'Lisinopril 10mg once daily'
    ]
  };
  
  // Sample chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'patient',
      text: 'Hello Dr. Miller, I wanted to ask about the medication side effects we discussed during my last visit.',
      time: '9:32 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 2,
      sender: 'doctor',
      text: 'Hi Sarah, of course. What specific side effects are you experiencing?',
      time: '9:45 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 3,
      sender: 'patient',
      text: "I've been feeling quite dizzy in the mornings after taking the Metformin. Is this normal or should I be concerned?",
      time: '9:48 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 4,
      sender: 'doctor',
      text: "Dizziness can be a side effect of Metformin, especially when you first start taking it. Are you taking it with food? That often helps reduce side effects.",
      time: '9:55 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 5,
      sender: 'patient',
      text: "I usually take it right after breakfast. Should I try taking it in the middle of the meal instead?",
      time: '10:01 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 6,
      sender: 'doctor',
      text: "Yes, that might help. Try taking it in the middle of your meal for a few days and let me know if the dizziness improves. Also, make sure you're staying well hydrated throughout the day.",
      time: '10:08 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 7,
      sender: 'patient',
      text: "I'll try that. Thank you, Doctor. One more thing - I noticed my blood sugar readings have been more stable this week, which is good news!",
      time: '10:12 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 8,
      sender: 'doctor',
      text: "That's excellent news, Sarah! It means the medication is working as intended. Keep monitoring and recording your readings so we can review them at your next appointment.",
      time: '10:15 AM',
      date: 'Apr 20, 2025',
      status: 'read'
    },
    {
      id: 9,
      sender: 'patient',
      text: "Here's my blood glucose log from the past week. The readings are much more consistent compared to last month.",
      time: '10:20 AM',
      date: 'Apr 20, 2025',
      status: 'read',
      attachment: {
        type: 'file',
        name: 'glucose_log_week12.pdf',
        size: '245 KB'
      }
    },
    {
      id: 10,
      sender: 'doctor',
      text: "Thank you for sharing your log. I can see clear improvement in your readings. Great job maintaining your diet and medication schedule!",
      time: '10:30 AM',
      date: 'Apr 20, 2025',
      status: 'delivered'
    }
  ]);
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'doctor',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'sent'
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
  };
  
  // Format date for message grouping
  const formatMessageDate = (date) => {
    const today = new Date().toLocaleDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString();
    
    if (new Date(date).toLocaleDateString() === today) {
      return 'Today';
    } else if (new Date(date).toLocaleDateString() === yesterdayStr) {
      return 'Yesterday';
    } else {
      return date;
    }
  };
  
  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = message.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Chat Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button className="mr-2 p-1 rounded-full hover:bg-gray-100 md:hidden">
                <ChevronLeft size={20} />
              </button>
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={20} className="text-blue-600" />
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-medium text-gray-900">{patient.name}</h2>
                <p className="text-sm text-gray-500">{patient.age} years • {patient.gender}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100" title="Voice Call">
                <Phone size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" title="Video Call">
                <Video size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" title="Schedule Appointment">
                <Calendar size={20} className="text-gray-600" />
              </button>
              <button 
                className={`p-2 rounded-full ${showPatientInfo ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'}`}
                onClick={() => setShowPatientInfo(!showPatientInfo)}
                title="Patient Info"
              >
                <Info size={20} />
              </button>
            </div>
          </div>
        </header>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date} className="mb-6">
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">
                  {formatMessageDate(date)}
                </span>
              </div>
              
              {groupedMessages[date].map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex mb-4 ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                      msg.sender === 'doctor' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div className="text-sm">{msg.text}</div>
                    
                    {msg.attachment && (
                      <div className={`mt-2 p-2 rounded flex items-center ${
                        msg.sender === 'doctor' ? 'bg-blue-700' : 'bg-gray-100'
                      }`}>
                        <div className="p-2 rounded bg-white text-blue-600">
                          {msg.attachment.type === 'file' ? <File size={20} /> : <ImageIcon size={20} />}
                        </div>
                        <div className="ml-2">
                          <div className={`text-sm font-medium ${msg.sender === 'doctor' ? 'text-white' : 'text-gray-800'}`}>
                            {msg.attachment.name}
                          </div>
                          <div className={`text-xs ${msg.sender === 'doctor' ? 'text-blue-200' : 'text-gray-500'}`}>
                            {msg.attachment.size}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-end mt-1">
                      <span className={`text-xs ${msg.sender === 'doctor' ? 'text-blue-200' : 'text-gray-500'}`}>
                        {msg.time}
                      </span>
                      
                      {msg.sender === 'doctor' && (
                        <span className="ml-1">
                          {msg.status === 'sent' && (
                            <Clock size={12} className="text-blue-200" />
                          )}
                          {msg.status === 'delivered' && (
                            <CheckCheck size={12} className="text-blue-200" />
                          )}
                          {msg.status === 'read' && (
                            <CheckCheck size={12} className="text-blue-200" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
              <Paperclip size={20} />
            </button>
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
              <ImageIcon size={20} />
            </button>
            <button type="button" className="p-2 mr-2 text-gray-500 hover:text-gray-700">
              <Mic size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={!message.trim()}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
      
      {/* Patient Info Sidebar */}
      {showPatientInfo && (
        <div className="w-80 bg-white border-l border-gray-200 shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Patient Information</h3>
              <button 
                onClick={() => setShowPatientInfo(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={28} className="text-blue-600" />
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-medium text-gray-900">{patient.name}</h2>
                <p className="text-sm text-gray-500">{patient.age} years • {patient.gender}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-800">{patient.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-800">{patient.email}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Appointments</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock size={16} className="text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-800 font-medium">Last Visit</span>
                    <p className="text-sm text-gray-600">{patient.lastVisit}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar size={16} className="text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-800 font-medium">Next Appointment</span>
                    <p className="text-sm text-gray-600">{patient.nextAppointment}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Medical Information</h4>
              <div className="bg-gray-50 rounded-md p-3">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Current Condition</h5>
                <p className="text-sm text-gray-800 mb-4">{patient.condition}</p>
                
                <h5 className="text-sm font-medium text-gray-700 mb-2">Medical History</h5>
                <ul className="list-disc pl-5 text-sm text-gray-800 mb-4">
                  {patient.medicalHistory.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
                
                <h5 className="text-sm font-medium text-gray-700 mb-2">Current Medications</h5>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  {patient.currentMedications.map((med, index) => (
                    <li key={index} className="mb-1">{med}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FileText size={16} className="mr-2" />
                View Full Medical Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// For rendering the email icon
function Mail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// For rendering the file text icon
function FileText(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function X(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default  DocChat;