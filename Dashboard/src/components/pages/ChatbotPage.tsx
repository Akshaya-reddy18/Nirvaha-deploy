import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, Sparkles, Mic, Image as ImageIcon, Smile } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Message = { type: "ai" | "user"; content: string; timestamp: string };
type Session = { id: string; title: string; messages: Message[]; createdAt: number; updatedAt: number };

export function ChatbotPage() {
  const initialMessage: Message = useMemo(
    () => ({
      type: "ai",
      content:
        "Namaste 🙏 I'm your NIRVAHA AI guide. I'm here to support your spiritual journey with personalized guidance, meditation recommendations, and ancient wisdom. How may I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }),
    []
  );

  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const currentSession = useMemo(
    () => sessions.find((s) => s.id === currentSessionId) || null,
    [sessions, currentSessionId]
  );
  const messages = currentSession?.messages ?? [];
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Helpers to persist sessions
  const saveSessions = (next: Session[]) => {
    setSessions(next);
    try {
      localStorage.setItem("nirvaha_chat_sessions", JSON.stringify(next));
    } catch {}
  };

  const startNewChat = () => {
    const id = crypto.randomUUID?.() || `${Date.now()}`;
    const newSession: Session = {
      id,
      title: "New Chat",
      messages: [initialMessage],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const next = [newSession, ...sessions];
    saveSessions(next);
    setCurrentSessionId(id);
  };

  const loadSession = (id: string) => {
    setCurrentSessionId(id);
    setShowHistory(false);
  };

  const renameSession = (id: string, title: string) => {
    const next = sessions.map((s) => (s.id === id ? { ...s, title, updatedAt: Date.now() } : s));
    saveSessions(next);
  };

  const deleteSession = (id: string) => {
    const next = sessions.filter((s) => s.id !== id);
    saveSessions(next);
    if (currentSessionId === id) {
      if (next.length) setCurrentSessionId(next[0].id);
      else startNewChat();
    }
  };

  // Load sessions on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("nirvaha_chat_sessions");
      if (raw) {
        const parsed: Session[] = JSON.parse(raw);
        if (parsed.length) {
          setSessions(parsed);
          setCurrentSessionId(parsed[0].id);
          return;
        }
      }
    } catch {}
    // Fallback to a default session
    const id = crypto.randomUUID?.() || `${Date.now()}`;
    const defaultSession: Session = {
      id,
      title: "Welcome",
      messages: [initialMessage],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setSessions([defaultSession]);
    setCurrentSessionId(id);
  }, [initialMessage]);

  const quickPrompts = [
    "Help me reduce stress",
    "Recommend a meditation",
    "Explain chakras",
    "Morning routine ideas",
    "Sound healing benefits",
    "Improve focus",
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    if (!currentSession) return;

    // Add user message to current session
    const userMsg: Message = {
      type: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    const next = sessions.map((s) =>
      s.id === currentSession.id
        ? { ...s, messages: [...s.messages, userMsg], updatedAt: Date.now(), title: s.title === "Welcome" || s.title === "New Chat" ? userMsg.content.slice(0, 30) : s.title }
        : s
    );
    saveSessions(next);

    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = {
        type: "ai",
        content:
          "That's a wonderful question! Based on your current energy, I recommend starting with a 10-minute breath awareness meditation. Focus on the natural rhythm of your breath, letting thoughts pass like clouds in the sky. Would you like me to guide you through this practice now? ✨",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      const next2 = sessions.map((s) =>
        s.id === currentSession.id
          ? { ...s, messages: [...s.messages, aiMsg], updatedAt: Date.now() }
          : s
      );
      saveSessions(next2);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 h-[calc(100vh-6rem)] flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-3">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(163, 230, 53, 0.4)",
                  "0 0 40px rgba(163, 230, 53, 0.6)",
                  "0 0 20px rgba(163, 230, 53, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl"
            >
              <Bot className="w-8 h-8 text-white" />
            </motion.div>

            <div>
              <h2 className="text-white">NIRVAHA AI Guide</h2>
              <div className="flex items-center gap-2 mt-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-lime-400"
                />
                <span className="text-sm text-white">Always here to help</span>
              </div>
            </div>
          </div>

          <p className="text-white">
            Your personal spiritual companion powered by advanced AI and ancient wisdom
          </p>
        </motion.div>

        {/* Top Bar: Title + History/New Chat */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-white">Chat</p>
            <h3 className="text-white">{currentSession?.title || "NIRVAHA AI"}</h3>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startNewChat}
              className="px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50 text-teal-700 hover:bg-emerald-50"
            >
              New Chat
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHistory(true)}
              className="px-3 py-2 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl shadow"
            >
              History
            </motion.button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 scroll-smooth">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.type === "ai" && (
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0"
                  >
                    <Bot className="w-5 h-5 text-white" />
                  </motion.div>
                )}

                <div
                  className={`max-w-[70%] ${
                    message.type === "ai"
                      ? "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl rounded-tl-sm"
                      : "bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-3xl rounded-tr-sm"
                  } p-5 shadow-lg`}
                >
                  <p className={`${message.type === "ai" ? "text-teal-800" : "text-white"} leading-relaxed`}>
                    {message.content}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === "ai" ? "text-teal-600" : "text-emerald-100"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>

                {message.type === "user" && (
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white">You</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl rounded-tl-sm px-6 py-4 shadow-lg">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                      animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-sm text-white mb-3">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setInputValue(prompt)}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 text-sm text-teal-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-sm"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-[32px] p-4 shadow-xl border border-emerald-200/30 mb-6"
        >
          <div className="flex items-end gap-3">
            {/* Attachment Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-all"
              >
                <ImageIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-all"
              >
                <Smile className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Input Field */}
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask me anything about meditation, mindfulness, or spiritual growth..."
                className="w-full bg-transparent text-teal-800 placeholder-teal-400 resize-none outline-none max-h-32"
                rows={1}
              />
            </div>

            {/* Send Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-all"
              >
                <Mic className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg"
                style={{
                  boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)",
                }}
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs text-center text-teal-600 mb-4"
        >
          <Sparkles className="w-3 h-3 inline mr-1" />
          NIRVAHA AI uses advanced natural language processing and spiritual wisdom databases
        </motion.p>

        {/* History Drawer */}
        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex justify-end"
              onClick={() => setShowHistory(false)}
            >
              <motion.div
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                exit={{ x: 400 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm h-full bg-white rounded-l-3xl p-6 shadow-2xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-teal-800">Chat History</h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowHistory(false)}
                    className="px-3 py-1 rounded-full bg-emerald-50 text-teal-700"
                  >
                    Close
                  </motion.button>
                </div>
                <div className="flex gap-2 mb-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startNewChat}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl"
                  >
                    New Chat
                  </motion.button>
                </div>
                <div className="flex-1 overflow-y-auto space-y-2">
                  {sessions.map((s) => (
                    <div key={s.id} className={`p-3 rounded-2xl border ${s.id === currentSessionId ? 'border-emerald-400 bg-emerald-50' : 'border-emerald-200 bg-white'}`}>
                      <button className="w-full text-left" onClick={() => loadSession(s.id)}>
                        <p className="text-teal-800 line-clamp-1">{s.title || 'Untitled'}</p>
                        <p className="text-xs text-teal-600">{new Date(s.updatedAt).toLocaleString()}</p>
                      </button>
                      <div className="flex items-center gap-2 mt-2">
                        <input
                          className="flex-1 px-2 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-teal-800"
                          defaultValue={s.title}
                          onBlur={(e) => renameSession(s.id, e.target.value)}
                        />
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => deleteSession(s.id)} className="px-2 py-1 text-rose-600 bg-rose-50 rounded-lg text-sm">
                          Delete
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
