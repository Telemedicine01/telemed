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
  MoreVertical,
  Clock,
  CheckCheck,
  X,
  Mail,
  FileText,
} from 'lucide-react';



const DocChat = () => {
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
                <h2 className="text-lg font-medium text-gray-900">Patient Name</h2>
                <p className="text-sm text-gray-500">Age years • Gender</p>
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
              <button className="p-2 rounded-full hover:bg-gray-100" title="Patient Info">
                <Info size={20} />
              </button>
            </div>
          </div>
        </header>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">
                Date
              </span>
            </div>
            <div className="flex mb-4 justify-end">
              <div className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 bg-blue-600 text-white">
                <div className="text-sm">Message text</div>
                <div className="flex items-center justify-end mt-1">
                  <span className="text-xs text-blue-200">Time</span>
                </div>
              </div>
            </div>
          </div>
          <div  />
        </div>
        
        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form className="flex items-center">
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
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
      
      {/* Patient Info Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Patient Information</h3>
            <button className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
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
              <h2 className="text-xl font-medium text-gray-900">Patient Name</h2>
              <p className="text-sm text-gray-500">Age years • Gender</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                <span className="text-sm text-gray-800">Phone Number</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <span className="text-sm text-gray-800">Email Address</span>
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
                  <p className="text-sm text-gray-600">Date</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar size={16} className="text-gray-400 mr-2 mt-0.5" />
                <div>
                  <span className="text-sm text-gray-800 font-medium">Next Appointment</span>
                  <p className="text-sm text-gray-600">Date</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Medical Information</h4>
            <div className="bg-gray-50 rounded-md p-3">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Current Condition</h5>
              <p className="text-sm text-gray-800 mb-4">Condition Details</p>
              
              <h5 className="text-sm font-medium text-gray-700 mb-2">Medical History</h5>
              <ul className="list-disc pl-5 text-sm text-gray-800 mb-4">
                <li className="mb-1">History Item 1</li>
                <li className="mb-1">History Item 2</li>
              </ul>
              
              <h5 className="text-sm font-medium text-gray-700 mb-2">Current Medications</h5>
              <ul className="list-disc pl-5 text-sm text-gray-800">
                <li className="mb-1">Medication 1</li>
                <li className="mb-1">Medication 2</li>
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
    </div>
  );
}

export default DocChat;