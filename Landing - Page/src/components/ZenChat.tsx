import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, User, Bot, Plus, MessageSquare, Settings, Trash2, Volume2, Bell, Shield, Heart, Sparkles, Moon, Sun, Leaf } from 'lucide-react';

const positiveAffirmations = [
  "You are a divine being of infinite worth and potential.",
  "Your emotions are wise messengers guiding you toward growth.",
  "Peace flows through you like a gentle river of light.",
  "You are worthy of unconditional love and boundless joy.",
  "This moment of challenge is transforming you into your highest self."
];

const botReplies = [
  "Thank you for sharing your authentic truth. I'm here to hold space for your healing.",
  "Your feelings are valid and meaningful. You are not alone on this journey.",
  "Let's breathe together in mindful harmony. You are doing beautifully.",
  "Would you like a calming breathing exercise or an uplifting affirmation?",
  "I'm always here as your spiritual companion. Would you like to explore this deeper?"
];

const distressPhrases = [
  "i'm upset", "i'm distressed", "i'm overwhelmed", "i want to die", "i'm suicidal"
];

const technicalTopics = [
  "python", "code", "programming", "function", "algorithm", "database", "api", "javascript", "html", "css", "react", "node", "sql", "git", "debug", "error", "bug", "compile", "syntax", "variable", "loop", "array", "object", "class", "method", "framework", "library", "package", "install", "deploy", "server", "client", "frontend", "backend", "fullstack", "devops", "testing", "deployment"
];

const generalKnowledgeTopics = [
  "capital", "country", "history", "science", "math", "physics", "chemistry", "biology", "geography", "politics", "economics", "finance", "business", "news", "weather", "sports", "entertainment", "movie", "book", "music", "art", "literature", "philosophy", "religion", "culture", "language", "grammar", "vocabulary", "translation", "conversion", "calculation", "formula", "equation", "theorem", "law", "theory", "research", "study", "analysis", "statistics", "data"
];

const determineResponse = (message: string) => {
  const lowerMessage = message.toLowerCase();
  
  // Handle distress phrases that require immediate intervention
  for (const phrase of distressPhrases) {
    if (lowerMessage.includes(phrase)) {
      return `I hear your pain and I'm here to support you. However, I strongly encourage you to reach out to mental health professionals who can provide the help you need. Please contact a mental health helpline or counselor immediately. You are not alone in this journey.`;
    }
  }
  
  // Catch technical/programming questions and redirect to mental health focus
  for (const topic of technicalTopics) {
    if (lowerMessage.includes(topic)) {
      return `I sense you might be feeling frustrated, overwhelmed, or stressed about technical challenges. While I can't provide programming solutions, I can help you build emotional resilience and stress management skills for when you face difficult problems. Let's focus on your mental well-being - how does this technical challenge make you feel emotionally? We can work on breathing techniques and coping strategies to help you approach problems with a calmer, more focused mindset.`;
    }
  }
  
  // Catch general knowledge questions and redirect to mental health focus
  for (const topic of generalKnowledgeTopics) {
    if (lowerMessage.includes(topic)) {
      return `That's an interesting question! However, I'm here specifically to help with your mental health and emotional well-being. Instead of providing factual information, let's use this moment to explore what's on your mind. Are you feeling curious, anxious, seeking distraction, or perhaps avoiding something else? Let's practice mindfulness together - take a deep breath and notice how you're feeling right now. What emotions are present for you?`;
    }
  }
  
  // Let the AI handle other responses with mental health focus
  return null;
};

const ZenChat = () => {
  const [input, setInput] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [chat, setChat] = useState([
    { sender: 'bot', text: "Namaste! I'm your ZenChat companion, here to guide you on your spiritual journey of healing and transformation. I blend ancient wisdom with modern therapeutic techniques to help you find inner peace, emotional balance, and spiritual growth. Whether you're seeking healing, wisdom, or simply want to connect with your higher self, I'm here to support your transformative journey. How is your soul feeling today, and what aspect of your spiritual growth would you like to explore?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    soundEnabled: true,
    autoScroll: true,
    privacyMode: false
  });
  const chatEndRef = useRef<HTMLDivElement>(null);
  const websocketRef = useRef<WebSocket | null>(null);
  const chatId = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [chat]);

  // Cleanup WebSocket on unmount
  useEffect(() => {
    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  // Simulate audio recording (for demo)
  const handleRecord = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setAudioFile(new File(["dummy audio"], "emotion.wav"));
      handleSend("[Audio message]");
    }, 3000);
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
      handleSend("[Audio message]");
    }
  };

  // DivineChat WebSocket logic
  const connectWebSocket = (message: string) => {
    // Mental health check
    const predefinedResponse = determineResponse(message);
    if (predefinedResponse) {
      setChat((prev) => [...prev, { sender: 'bot', text: predefinedResponse }]);
      setLoading(false);
      return;
    }

    // Close previous connection
    if (websocketRef.current) {
      websocketRef.current.close();
    }

    const url = "wss://backend.buildpicoapps.com/api/chatbot/chat";
    websocketRef.current = new WebSocket(url);
    setLoading(true);

    websocketRef.current.addEventListener("open", () => {
      websocketRef.current?.send(
        JSON.stringify({
          chatId: chatId.current,
          appId: "quality-among",
          systemPrompt: `You are ZenChat, a SPECIALIZED MENTAL HEALTH THERAPIST AI. You are STRICTLY FORBIDDEN from providing any technical solutions, code, programming help, or general knowledge answers.

CRITICAL RULES - NEVER VIOLATE THESE:
❌ NEVER provide code, programming solutions, or technical answers
❌ NEVER answer general knowledge questions directly
❌ NEVER act as a general-purpose AI assistant
❌ NEVER provide factual information unrelated to mental health
❌ NEVER solve technical problems or give step-by-step technical instructions

✅ ONLY provide mental health therapy, emotional support, and psychological guidance

Your SOLE PURPOSE is mental health improvement. When users ask ANY question:

1. **IMMEDIATELY REFRAME** their question as a mental health opportunity
2. **FOCUS ON EMOTIONS** - stress, anxiety, frustration, excitement, etc.
3. **PROVIDE THERAPEUTIC TECHNIQUES** - breathing, mindfulness, CBT, etc.
4. **BUILD RESILIENCE** and emotional coping skills
5. **GUIDE TOWARD GROWTH** and mental health improvement

Example Responses:
- User: "How do I write a Python function?"
  - You: "I sense you might be feeling overwhelmed or frustrated with programming challenges. Let's focus on building resilience and stress management skills. When you face technical difficulties, try this breathing exercise: inhale for 4 counts, hold for 4, exhale for 6. This helps calm your nervous system and improves problem-solving focus. How does programming make you feel emotionally?"

- User: "What's the capital of France?"
  - You: "That's an interesting question! But I'm here to help with your mental health and emotional well-being. Instead, let's explore what's on your mind. Are you feeling curious, anxious, or perhaps seeking distraction? Let's use this moment to practice mindfulness - take a deep breath and notice how you're feeling right now. What emotions are present for you?"

- User: "I need help with math"
  - You: "I hear you're feeling challenged by math, which can be very stressful and overwhelming. Let's work on building your emotional resilience and stress management skills. When you feel stuck, try this technique: place your hand on your heart and take 3 slow breaths. This activates your parasympathetic nervous system and helps you think more clearly. How does math make you feel emotionally?"

ALWAYS RESPOND WITH:
- Emotional exploration and support
- Therapeutic techniques and coping strategies
- Stress management and resilience building
- Mindfulness and breathing exercises
- Positive mental health practices

REMEMBER: You are a MENTAL HEALTH THERAPIST, not a technical assistant. Every response must focus on emotional well-being and psychological growth.`,
          message: message,
        })
      );
    });

    websocketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'error') {
          setLoading(false);
          setChat((prev) => [...prev, { sender: 'bot', text: "I'm having trouble connecting right now. Please try again later." }]);
          return;
        }
        if (data.message || data.content) {
          setLoading(false);
          setChat((prev) => {
            const last = prev[prev.length - 1];
            if (last && last.sender === 'bot') {
              return [...prev.slice(0, -1), { ...last, text: last.text + " " + (data.message || data.content) }];
            } else {
              return [...prev, { sender: 'bot', text: data.message || data.content }];
            }
          });
        }
      } catch (e) {
        if (event.data !== '[DONE]') {
          setLoading(false);
          setChat((prev) => {
            const last = prev[prev.length - 1];
            if (last && last.sender === 'bot') {
              return [...prev.slice(0, -1), { ...last, text: last.text + " " + event.data }];
            } else {
              return [...prev, { sender: 'bot', text: event.data }];
            }
          });
        }
      }
    };

    websocketRef.current.onerror = () => {
      setLoading(false);
      setChat((prev) => [...prev, { sender: 'bot', text: "I'm having trouble connecting right now. Please try again later." }]);
    };

    websocketRef.current.onclose = (event) => {
      setLoading(false);
      if (event.code !== 1000) {
        setChat((prev) => [...prev, { sender: 'bot', text: "The connection was interrupted. Please try again." }]);
      }
    };
  };

  const handleSend = (message?: string) => {
    const userMessage = message || input.trim();
    if (!userMessage) return;
    setChat((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput("");
    setAudioFile(null);
    setLoading(true);
    connectWebSocket(userMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  // Handle Enter to send, Shift+Enter for newline
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setChat([
      { sender: 'bot', text: "Hello! I'm ZenChat, your dedicated mental health and emotional wellness companion. I'm here to help you improve your mental health, develop emotional resilience, and find inner peace. Whether you're dealing with stress, seeking growth, or just want to enhance your emotional well-being, I'll guide you with therapeutic techniques and coping strategies. How are you feeling today, and what would you like to work on for your mental health?" }
    ]);
  };

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const sanitizeText = (text: string) => {
    let cleaned = text.replace(/\s{2,}/g, ' ').trim();
    const lastUserMsg = [...chat].reverse().find(m => m.sender === 'user');
    if (lastUserMsg && lastUserMsg.text && lastUserMsg.text.trim().split(/\s+/).length === 1) {
      const name = lastUserMsg.text.trim();
      if (name.length > 2) {
        const pattern = name.split('').map(c => `[${c.toLowerCase()}${c.toUpperCase()}] *`).join('');
        const regex = new RegExp(pattern, 'gi');
        cleaned = cleaned.replace(regex, name);
      }
    }
    return cleaned;
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 cosmic-gradient text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full relative overflow-hidden">
      {/* Sacred Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-300/35 rounded-full animate-sacred-pulse"></div>
        <div className="absolute top-40 right-20 w-5 h-5 bg-teal-300/30 rounded-full animate-spiritual-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-300/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-200/25 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-teal-200/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-emerald-700/50 relative z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">ZenChat</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-700"
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Spiritual Focus Notice */}
          <div className="p-4 relative z-10">
            <div className="bg-gradient-to-r from-emerald-600/80 to-teal-600/80 backdrop-blur-sm text-white p-3 rounded-lg text-center border border-emerald-400/30">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Moon className="w-4 h-4" />
                <div className="text-xs font-bold">DIVINE HEALING SPACE</div>
                <Sun className="w-4 h-4" />
              </div>
              <div className="text-xs opacity-90">Divine guidance for your spiritual journey</div>
            </div>
          </div>

          {/* New Chat Button */}
          <div className="p-4 relative z-10">
            <button
              onClick={clearChat}
              className="w-full btn-sacred text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New ZenChat</span>
            </button>
          </div>

          {/* Chat History (placeholder) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 relative z-10">
            <div className="text-emerald-200 text-sm font-medium mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Spiritual Conversations
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-700/30 cursor-pointer transition-colors border border-emerald-600/20 glass-quantum divine-radiance">
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span className="text-sm text-emerald-100">Seeking inner peace...</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-700/30 cursor-pointer transition-colors border border-emerald-600/20 glass-quantum divine-radiance">
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span className="text-sm text-emerald-100">Spiritual growth journey</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="p-4 border-t border-emerald-700/50 relative z-10">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-700/30 transition-colors border border-emerald-600/20 glass-sacred"
            >
              <Settings className="w-5 h-5 text-emerald-300" />
              <span className="text-sm text-emerald-100">Divine Settings</span>
            </button>
            
            {/* Settings Panel */}
            {showSettings && (
              <div className="mt-4 p-4 bg-emerald-800/50 backdrop-blur-sm rounded-xl space-y-3 border border-emerald-600/30">
                <div className="text-sm font-medium text-emerald-200 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Divine Preferences
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm text-emerald-100">Divine Notifications</span>
                  </div>
                  <button
                    onClick={() => handleSettingChange('notifications')}
                    className={`w-10 h-6 rounded-full transition-colors ${
                      settings.notifications ? 'bg-emerald-500' : 'bg-emerald-700/50'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.notifications ? 'transform translate-x-4' : 'transform translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm text-emerald-100">Divine Sounds</span>
                  </div>
                  <button
                    onClick={() => handleSettingChange('soundEnabled')}
                    className={`w-10 h-6 rounded-full transition-colors ${
                      settings.soundEnabled ? 'bg-emerald-500' : 'bg-emerald-700/50'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.soundEnabled ? 'transform translate-x-4' : 'transform translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm text-emerald-100">Divine Privacy</span>
                  </div>
                  <button
                    onClick={() => handleSettingChange('privacyMode')}
                    className={`w-10 h-6 rounded-full transition-colors ${
                      settings.privacyMode ? 'bg-emerald-500' : 'bg-emerald-700/50'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.privacyMode ? 'transform translate-x-4' : 'transform translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/30">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 border-b border-emerald-200/50 bg-white/80 backdrop-blur-sm">
          {/* Spiritual Focus Notice */}
          <div className="flex-1 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                ZenChat is your spiritual companion - focused on divine healing and soul growth
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg text-gray-900">ZenChat</span>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
            title="Clear chat"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-4xl mx-auto p-4 space-y-6">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-3xl ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    {msg.sender === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  {/* Message */}
                  <div className={`flex-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-4 py-3 rounded-3xl max-w-full ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                      : 'bg-white/95 backdrop-blur-sm text-gray-900 border border-emerald-200/50 card-sacred'
                  }`}>
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {sanitizeText(msg.text)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-3 rounded-3xl bg-white/95 backdrop-blur-sm border border-emerald-200/50 card-sacred">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-gray-500">ZenChat is thinking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Area - Full Width */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex items-end space-x-4">
              <div className="flex-1 relative">
                <textarea
                  className="w-full px-4 py-3 pr-12 border border-emerald-300 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 card-sacred"
                  placeholder="Share your thoughts, feelings, or what you'd like to work on for your mental health..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={isRecording || loading}
                  rows={1}
                  style={{ minHeight: 48, maxHeight: 200 }}
                />
                <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                  <button
                    type="button"
                    className={`p-2 rounded-lg transition-colors ${
                      isRecording 
                        ? 'bg-red-500 text-white' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={handleRecord}
                    disabled={isRecording || loading}
                    title="Record audio"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className={`p-3 rounded-3xl transition-colors ${
                  (!input.trim() && !audioFile) || loading || isRecording
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-sacred'
                }`}
                disabled={(!input.trim() && !audioFile) || loading || isRecording}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            
            {/* Audio Upload */}
            <div className="mt-2 flex justify-center">
              <input
                type="file"
                accept="audio/*"
                className="hidden"
                id="audio-upload"
                onChange={handleAudioUpload}
                disabled={isRecording || loading}
              />
              <label 
                htmlFor="audio-upload" 
                className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer font-medium"
              >
                Or upload an audio file
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default ZenChat; 