import { motion } from "motion/react";
import { Mail, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";
import { useState } from "react";

export function LoginPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    onNavigate("home");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white flex items-center justify-center p-6">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[40px] blur-2xl opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[40px] p-12 shadow-2xl border border-emerald-200/30">
              <motion.div
                className="w-20 h-20 mb-8 rounded-[28px] bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h1 className="text-emerald-800 mb-4">
                Welcome to NIRVAHA
              </h1>
              <p className="text-xl text-teal-700 mb-8">
                Your journey to inner peace and spiritual wellness begins here
              </p>

              <div className="space-y-4">
                {[
                  "Personalized meditation guidance",
                  "AI-powered spiritual companion",
                  "Connect with wellness experts",
                  "Track your mindfulness journey",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
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
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-emerald-200/30">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl text-teal-800 mb-1">50K+</div>
                    <div className="text-sm text-teal-600">Active Users</div>
                  </div>
                  <div className="w-px h-12 bg-emerald-200/30" />
                  <div className="text-center">
                    <div className="text-3xl text-teal-800 mb-1">1M+</div>
                    <div className="text-sm text-teal-600">Meditations</div>
                  </div>
                  <div className="w-px h-12 bg-emerald-200/30" />
                  <div className="text-center">
                    <div className="text-3xl text-teal-800 mb-1">4.9★</div>
                    <div className="text-sm text-teal-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login/Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl border border-emerald-200/30">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <h2 className="text-center text-emerald-800 mb-2">NIRVAHA</h2>
              <p className="text-center text-teal-600">Harmony of Mind</p>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-2 mb-8 p-2 bg-emerald-50 rounded-[24px]">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSignup(false)}
                className={`flex-1 py-3 rounded-[20px] transition-all ${
                  !isSignup
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-teal-700"
                }`}
              >
                Login
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSignup(true)}
                className={`flex-1 py-3 rounded-[20px] transition-all ${
                  isSignup
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-teal-700"
                }`}
              >
                Sign Up
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Signup Only) */}
              {isSignup && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-sm text-teal-800 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-emerald-200/50 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-teal-800 placeholder:text-teal-400 transition-all"
                    />
                  </div>
                </motion.div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm text-teal-800 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-emerald-200/50 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-teal-800 placeholder:text-teal-400 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm text-teal-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-12 pr-12 py-4 bg-white border-2 border-emerald-200/50 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-teal-800 placeholder:text-teal-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me / Forgot Password */}
              {!isSignup && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-lg border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    />
                    <span className="text-sm text-teal-700">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-[20px] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                {isSignup ? "Create Account" : "Sign In"}
              </motion.button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-emerald-200/30" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/90 text-teal-600">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="py-3 px-4 bg-white border-2 border-emerald-200/50 rounded-[20px] hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-teal-800">Google</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="py-3 px-4 bg-white border-2 border-emerald-200/50 rounded-[20px] hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-teal-800">Facebook</span>
                </motion.button>
              </div>
            </form>

            {/* Terms */}
            {isSignup && (
              <p className="text-xs text-center text-teal-600 mt-6">
                By signing up, you agree to our{" "}
                <button className="text-emerald-600 hover:text-emerald-700 underline">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="text-emerald-600 hover:text-emerald-700 underline">
                  Privacy Policy
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
