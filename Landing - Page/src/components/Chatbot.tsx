import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Heart, Sparkles, Wifi, WifiOff } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your Nirvaha website support assistant. How can I help you today? You can ask about navigation, report bugs, or share feedback.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // WebSocket connection management
  useEffect(() => {
    const connectWebSocket = () => {
      try {
        // Use environment variable or fallback to localhost
        const wsUrl = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:8081/chat';
        const ws = new WebSocket(wsUrl);
        
        ws.onopen = () => {
          console.log('WebSocket connected');
          setIsConnected(true);
          setConnectionError(null);
          if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
            reconnectTimeoutRef.current = null;
          }
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === 'bot_response') {
              const botMessage: Message = {
                id: Date.now().toString(),
                text: data.message,
                sender: 'bot',
                timestamp: new Date()
              };
              setMessages(prev => [...prev, botMessage]);
              setIsTyping(false);
            }
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        };

        ws.onclose = () => {
          console.log('WebSocket disconnected');
          setIsConnected(false);
          setConnectionError('Connection lost. Attempting to reconnect...');
          
          // Attempt to reconnect after 3 seconds
          reconnectTimeoutRef.current = setTimeout(() => {
            connectWebSocket();
          }, 3000);
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          setConnectionError('Connection error. Please check your internet connection.');
          setIsConnected(false);
        };

        wsRef.current = ws;
      } catch (error) {
        console.error('Failed to create WebSocket connection:', error);
        setConnectionError('Failed to connect to chat service.');
        setIsConnected(false);
      }
    };

    // Connect when component mounts
    connectWebSocket();

    // Cleanup on unmount
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, []);

  const botResponses = [
    "Thank you for your feedback! I've noted your concern and will pass it along to our development team.",
    "I understand you're having trouble with navigation. Let me help you find what you're looking for. What specific page or feature are you trying to access?",
    "I've logged this as a bug report. Our technical team will investigate and fix this issue. Thank you for reporting it!",
    "That's helpful feedback! I'll make sure our team sees this suggestion for improvement.",
    "I can help you navigate the website. What specific information or feature are you looking for?",
    "Thank you for reporting this issue. I've documented it and our team will work on a fix.",
    "I appreciate you taking the time to share this feedback. It helps us improve the website experience.",
    "I understand your concern. Let me help you find the right section or report this issue to our team.",
    "Thank you for your patience. I've noted this issue and will ensure it gets addressed.",
    "Your feedback is valuable to us. I've recorded your suggestion for our development team to review.",
    "I can help you with website navigation or report any issues you're experiencing. What do you need assistance with?",
    "Thank you for bringing this to our attention. I've logged this issue for our technical team to investigate."
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Send message via WebSocket if connected
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({
          type: 'user_message',
          message: inputText,
          timestamp: new Date().toISOString()
        }));
      } catch (error) {
        console.error('Error sending WebSocket message:', error);
        // Fallback to local response
        handleFallbackResponse();
      }
    } else {
      // Fallback to local responses if WebSocket is not connected
      handleFallbackResponse();
    }
  };

  const handleFallbackResponse = () => {
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Nirvaha Support</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-emerald-100">Website Support Assistant</p>
                  <div className="flex items-center space-x-1">
                    {isConnected ? (
                      <Wifi className="w-3 h-3 text-emerald-200" />
                    ) : (
                      <WifiOff className="w-3 h-3 text-red-200" />
                    )}
                    <span className="text-xs">
                      {isConnected ? 'Connected' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs px-4 py-2 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white animate-pulse" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {connectionError && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <WifiOff className="w-4 h-4 text-yellow-600" />
                  <p className="text-sm text-yellow-800">{connectionError}</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about navigation, report bugs, or share feedback..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
