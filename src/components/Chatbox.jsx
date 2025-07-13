import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, XCircle, ChevronDown, MessageSquare } from 'lucide-react';

const Chatbox = () => {
    const [chatMessages, setMessages] = useState([]);
    const [message, setMessage] = useState(''); // Corrected: Changed 'input' to 'message'
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [assistantOpen, setAssistantOpen] = useState(false); // Added state for controlling chatbox visibility
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;  // Corrected: Check 'message'
        const userMessage = { sender: 'user', text: message, time: new Date().toLocaleTimeString() }; // Added time
        const currentMessage = message.trim(); // Save current message
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        setMessage(''); // Clear input field
        setError(null);

        try {
            console.log("Sending request to API:", currentMessage);

            const response = await fetch('https://telemedicine-api-09u5.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: currentMessage }),
            });

            console.log("API Response status:", response.status);

            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response data:", data);

            if (data && data.reply) {
                const botMessage = { sender: 'bot', text: data.reply, time: new Date().toLocaleTimeString() }; // Added time
                setMessages((prev) => [...prev, botMessage]);
            } else {
                throw new Error("Invalid response format from API");
            }
        } catch (error) {
            console.error("API Error:", error);
            setError(error.message);
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: `Error: ${error.message}. Please try again or check the server connection.`, time: new Date().toLocaleTimeString() } // Added time
            ]);
        } finally {
            setLoading(false);
        }
    };

    // Test API connection on component mount
    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch('https://telemedicine-api-09u5.onrender.com/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: "Hello" }),
                });

                if (!response.ok) {
                    console.warn("API connection test failed:", response.status);
                    setError(`API connection test failed with status: ${response.status}`);
                } else {
                    console.log("API connection test successful");
                }
            } catch (error) {
                console.error("API connection test error:", error);
                setError(`Cannot connect to API: ${error.message}`);
            }
        };

        testConnection();
    }, []);

   

    return (
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
                        <div ref={messagesEndRef} /> {/* Ref for scrolling */}
                    </div>

                    <div className="border-t border-gray-200 p-3">
                        <div className="flex">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
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
                         {loading && <p className="mt-2 text-xs text-gray-500">Loading...</p>}
                        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
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
    );
};

export default Chatbox;
