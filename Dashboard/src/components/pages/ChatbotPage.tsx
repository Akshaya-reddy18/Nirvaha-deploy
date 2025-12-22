import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, Sparkles, Mic, Image as ImageIcon, Smile } from "lucide-react";
import { useState } from "react";

export function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Namaste 🙏 I'm your NIRVAHA AI guide. I'm here to support your spiritual journey with personalized guidance, meditation recommendations, and ancient wisdom. How may I assist you today?",
      timestamp: "10:30 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

    // Add user message
    setMessages([
      ...messages,
      {
        type: "user",
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "That's a wonderful question! Based on your current energy, I recommend starting with a 10-minute breath awareness meditation. Focus on the natural rhythm of your breath, letting thoughts pass like clouds in the sky. Would you like me to guide you through this practice now? ✨",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white pt-24 pb-0">
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
              <h2 className="text-teal-800">NIRVAHA AI Guide</h2>
              <div className="flex items-center gap-2 mt-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-lime-400"
                />
                <span className="text-sm text-teal-600">Always here to help</span>
              </div>
            </div>
          </div>

          <p className="text-teal-700">
            Your personal spiritual companion powered by advanced AI and ancient wisdom
          </p>
        </motion.div>

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
            <p className="text-sm text-teal-600 mb-3">Quick suggestions:</p>
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
      </div>
    </div>
  );
}
