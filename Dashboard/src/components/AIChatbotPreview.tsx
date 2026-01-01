import { motion } from "motion/react";
import { Bot, Sparkles, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AIChatbotPreview() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-white">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100/50 rounded-full border border-lime-300/30">
              <Sparkles className="w-4 h-4 text-lime-600" />
              <span className="text-sm text-lime-700">AI-Powered Guidance</span>
            </div>

            <h2 className="text-emerald-800">Your Personal Spiritual Companion</h2>

            <p className="text-lg text-teal-700">
              Meet NIRVAHA AI — your intelligent guide on the path to enlightenment. 
              Get personalized meditation recommendations, spiritual insights, and answers 
              to your deepest questions, available 24/7.
            </p>

            <ul className="space-y-4">
              {[
                "Personalized meditation guidance",
                "Real-time emotional support",
                "Ancient wisdom meets modern AI",
                "Context-aware spiritual advice",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-teal-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={() => navigate('/dashboard/chatbot')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Conversation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Floating Chat Window Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-200/50 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 flex items-center gap-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(163, 230, 53, 0.4)",
                      "0 0 40px rgba(163, 230, 53, 0.6)",
                      "0 0 20px rgba(163, 230, 53, 0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-emerald-300 flex items-center justify-center"
                >
                  <Bot className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-white">NIRVAHA AI</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" />
                    <span className="text-xs text-emerald-100">Always here for you</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[400px]">
                {/* AI Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                    <p className="text-sm text-teal-800">
                      Welcome! I'm here to guide you on your spiritual journey. 
                      How are you feeling today? 🙏
                    </p>
                  </div>
                </motion.div>

                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-sm text-white">
                      I'm feeling stressed. Can you recommend a meditation?
                    </p>
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                    <p className="text-sm text-teal-800">
                      I sense your tension. Let's try a 5-minute breath awareness meditation. 
                      Focus on your breath, let thoughts pass like clouds... ✨
                    </p>
                  </div>
                </motion.div>

                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-emerald-400"
                          animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
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
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-2xl shadow-xl flex items-center justify-center rotate-12"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}