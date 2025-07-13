import { useState, useEffect } from 'react';
import { Lock, Shield, MessageSquare, X, Check, Send } from 'lucide-react';

const Anonymous = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [showSafetyTips, setShowSafetyTips] = useState(true);

  useEffect(() => {
    // Simulate connection
    setTimeout(() => {
      setConnectionStatus('Connected securely');
      
      // Simulate initial counselor message
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hello, I'm Sarah. I'm a trained counselor here to support you. You're safe here - this chat is completely anonymous. How can I help you today?",
            sender: 'counselor',
            timestamp: new Date()
          }
        ]);
      }, 1000);
    }, 1500);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMsg]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate counselor response after delay
    setTimeout(() => {
      const counselorMsg = {
        id: messages.length + 2,
        text: "I hear what you're saying. It takes courage to share this. Can you tell me more about how this has affected you?",
        sender: 'counselor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, counselorMsg]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 rounded-full mb-4">
            <Lock className="w-5 h-5 text-pink-400 mr-2" />
            <span className="text-pink-400 font-medium text-sm">ANONYMOUS CHAT</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            You're Connected Securely
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This chat is 100% anonymous. Nothing you say will be recorded or shared.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chat header */}
          <div className="bg-pink-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white p-1 rounded-full mr-3">
                <Shield className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Confidential Support</h3>
                <p className="text-pink-100 text-sm">{connectionStatus}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-green-300 rounded-full animate-pulse"></span>
              <span className="text-pink-100 text-sm">Live</span>
            </div>
          </div>

          {/* Chat container */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {showSafetyTips && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Your Safety Matters</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>We'll never ask for personal details</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Close this window to end chat immediately</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No history is saved on your device</span>
                      </li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setShowSafetyTips(false)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <MessageSquare className="w-12 h-12 mb-4 opacity-30" />
                <p>Connecting you with a trained counselor...</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.sender === 'user' 
                      ? 'bg-pink-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-pink-200' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message input */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={newMessage.trim() === ''}
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center">
              <Lock className="w-3 h-3 mr-1" />
              Messages are encrypted and will be deleted when you leave
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Anonymous;