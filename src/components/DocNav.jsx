import React, { useState } from "react";
import { Search, Bell, MessageSquare, Plus, Calendar, Clipboard, User } from "lucide-react";
import { Link } from "react-router-dom";

const DocNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New appointment request from Ama Asante", read: false },
    { id: 2, text: "Lab results ready for John Doe", read: false },
    { id: 3, text: "Meeting with Dr. Wilson at 3PM", read: true },
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <Plus className="text-white w-4 h-4" strokeWidth={2.5} />
            </div>
            <span className="ml-2 text-blue-900 font-bold text-xl tracking-tight">
              TeleHealth MD
            </span>
          </Link>
        </div>

        {/* Search Bar - Centered */}
        <div className="flex-1 max-w-md mx-auto">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search patients, appointments, records..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm outline-none transition-all"
              />
            </div>
          </form>
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions */}
          <Link to="/doc/docappointments" className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors relative" title="Appointments">
            <Calendar className="h-5 w-5 text-blue-600" />
          </Link>
          
          <Link to="/doc/mypatients" className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors relative" title="Patient Records">
            <Clipboard className="h-5 w-5 text-blue-600" />
          </Link>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50">
                <div className="p-3 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-medium text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <p className="text-sm text-gray-700">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">Just now</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="p-2 border-t border-gray-100 bg-gray-50">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-1">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <Link to="/doc/docchat" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </Link>

          {/* User Profile */}
          <Link to="/doc/docprofile" className="flex items-center hover:bg-gray-50 rounded-full p-1 transition-colors">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
            <User className="h-5 w-5 text-white"/>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 mr-1 hidden md:inline">Dr. Smith</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DocNav;