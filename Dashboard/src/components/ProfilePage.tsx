import { motion } from "motion/react";
import {
  Activity,
  TrendingUp,
  Award,
  Clock,
  Heart,
  Zap,
  Target,
  Calendar,
  BarChart3,
  Brain,
  Wind,
  Sun,
  Moon,
  Flame,
  Settings,
  Bell,
  Shield,
  CreditCard,
  User,
  Mail,
  MapPin,
  Edit2,
  Download,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { ShareProfileCard } from "./ShareProfileCard";
import { useAuth } from "../contexts/AuthContext";

export function ProfilePage() {
  const { user } = useAuth();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState({
    theme: "system" as "light" | "dark" | "system",
    language: "en" as "en" | "hi" | "te" | "kn",
    emailNotifications: true,
    pushNotifications: true,
    profileVisibility: "friends" as "public" | "friends" | "private",
    showOnlineStatus: true,
    dataSharing: false,
  });
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const weeklyData = [
    { day: "Mon", minutes: 45, mood: "calm", intensity: 60 },
    { day: "Tue", minutes: 60, mood: "energized", intensity: 80 },
    { day: "Wed", minutes: 30, mood: "stressed", intensity: 45 },
    { day: "Thu", minutes: 75, mood: "peaceful", intensity: 90 },
    { day: "Fri", minutes: 50, mood: "focused", intensity: 70 },
    { day: "Sat", minutes: 90, mood: "joyful", intensity: 95 },
    { day: "Sun", minutes: 120, mood: "blissful", intensity: 100 },
  ];

  const recommendations = [
    {
      title: "Morning Breath Work",
      type: "Pranayama",
      duration: "10 min",
      benefit: "Energy Boost",
      icon: Wind,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Chakra Alignment",
      type: "Meditation",
      duration: "20 min",
      benefit: "Balance",
      icon: Flame,
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Evening Relaxation",
      type: "Sound Healing",
      duration: "15 min",
      benefit: "Deep Rest",
      icon: Moon,
      color: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-emerald-200/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Profile Avatar */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-[32px] bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-2xl overflow-hidden"
                  style={{
                    boxShadow: "0 20px 60px rgba(34, 197, 94, 0.4)",
                  }}
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl">🧘</span>
                  )}
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-lime-400 rounded-2xl shadow-lg flex items-center justify-center text-white"
                >
                  <Edit2 className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-teal-800 mb-2">{user?.name || "Arjun Mehta"}</h1>
                    <p className="text-teal-700 mb-4">
                      Spiritual Seeker • Meditation Enthusiast
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-sm text-teal-600">
                        <Mail className="w-4 h-4" />
                        {user?.email || "arjun.mehta@example.com"}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-teal-600">
                        <MapPin className="w-4 h-4" />
                        Mumbai, India
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsShareModalOpen(true)}
                      className="px-6 py-3 bg-gradient-to-r from-lime-400 to-emerald-400 text-teal-900 rounded-2xl shadow-lg flex items-center gap-2"
                    >
                      <Share2 className="w-5 h-5" />
                      Share Profile
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg"
                    >
                      {/* Account Settings */}
                    </motion.button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4">
                    <div className="text-2xl text-teal-800 mb-1">127</div>
                    <div className="text-sm text-teal-600">Sessions</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4">
                    <div className="text-2xl text-teal-800 mb-1">21</div>
                    <div className="text-sm text-teal-600">Day Streak</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4">
                    <div className="text-2xl text-teal-800 mb-1">42hrs</div>
                    <div className="text-sm text-teal-600">Total Time</div>
                  </div>
                </div>

                {/* Followers/Following/Posts Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 text-center hover:shadow-lg transition-all cursor-pointer">
                    <div className="text-3xl text-blue-600 font-bold mb-1">{user?.followers ?? "1.2K"}</div>
                    <div className="text-sm text-blue-700 font-semibold">Followers</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center hover:shadow-lg transition-all cursor-pointer">
                    <div className="text-3xl text-purple-600 font-bold mb-1">{user?.following ?? 456}</div>
                    <div className="text-sm text-purple-700 font-semibold">Following</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 text-center hover:shadow-lg transition-all cursor-pointer">
                    <div className="text-3xl text-orange-600 font-bold mb-1">{user?.posts ?? 87}</div>
                    <div className="text-sm text-orange-700 font-semibold">Posts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[32px] p-6 shadow-xl text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full border-2 border-white/30 border-t-white"
                />
              </div>
              <h4 className="text-white mb-1">Meditation Streak</h4>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl">21</span>
                <span className="text-xl text-emerald-100">days</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-lime-300"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-xs text-emerald-100 mt-2">Goal: 30 days</p>
            </div>
          </motion.div>

          {/* Total Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
            <h5 className="text-teal-800 mb-1">This Week</h5>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl text-teal-800">8.5</span>
              <span className="text-xl text-teal-600">hours</span>
            </div>
            <p className="text-sm text-emerald-600">+32% from last week</p>
          </motion.div>

          {/* Sessions Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-teal-600" />
              <div className="px-3 py-1 bg-lime-100 rounded-full text-xs text-lime-700">
                +12
              </div>
            </div>
            <h5 className="text-teal-800 mb-1">Sessions</h5>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl text-teal-800">47</span>
              <span className="text-xl text-teal-600">total</span>
            </div>
            <p className="text-sm text-teal-600">This month</p>
          </motion.div>

          {/* Wellness Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-lime-400 to-emerald-500 rounded-[32px] p-6 shadow-xl text-white overflow-hidden relative"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Brain className="w-8 h-8" />
                <Zap className="w-6 h-6" />
              </div>
              <h5 className="text-white mb-1">Wellness Score</h5>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl">92</span>
                <span className="text-xl text-emerald-100">/100</span>
              </div>
              <p className="text-sm text-emerald-100">Excellent progress!</p>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Mood Sphere - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -8 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-teal-800 mb-1">Emotional Landscape</h3>
                <p className="text-sm text-teal-600">
                  Your journey through emotions
                </p>
              </div>
              <Heart className="w-8 h-8 text-emerald-500" />
            </div>

            {/* 3D Mood Visualization */}
            <div className="relative h-80 flex items-center justify-center mb-6">
              {/* Orbiting Rings */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2 border-emerald-300/20"
                  style={{
                    width: `${200 + i * 50}px`,
                    height: `${200 + i * 50}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 30 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Central 3D Sphere */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-48 h-48 rounded-full bg-gradient-to-br from-lime-400 via-emerald-400 to-teal-400 flex items-center justify-center shadow-2xl z-10"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">😊</div>
                  <div className="text-lg">Peaceful</div>
                  <div className="text-xs text-emerald-100 mt-1">Primary State</div>
                </div>
                {/* Light spot */}
                <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-white/40 blur-2xl" />
              </motion.div>

              {/* Emotion Data Points */}
              {[
                {
                  emoji: "😌",
                  label: "Calm",
                  x: -140,
                  y: 0,
                  color: "from-teal-400 to-cyan-400",
                },
                {
                  emoji: "😄",
                  label: "Joy",
                  x: 0,
                  y: -140,
                  color: "from-lime-400 to-emerald-400",
                },
                {
                  emoji: "🧘",
                  label: "Zen",
                  x: 140,
                  y: 0,
                  color: "from-emerald-400 to-green-400",
                },
                {
                  emoji: "✨",
                  label: "Inspired",
                  x: 0,
                  y: 140,
                  color: "from-purple-400 to-pink-400",
                },
              ].map((emotion, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-20 h-20 rounded-3xl bg-gradient-to-br ${emotion.color} flex flex-col items-center justify-center shadow-xl cursor-pointer`}
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: `${emotion.x}px`,
                    marginTop: `${emotion.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    },
                  }}
                >
                  <div className="text-2xl">{emotion.emoji}</div>
                  <div className="text-[10px] text-white mt-1">{emotion.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calendar Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white/80 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-teal-800">December 2024</h4>
              <Calendar className="w-6 h-6 text-emerald-500" />
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-xs text-center text-teal-600 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => {
                const hasSession = Math.random() > 0.3;
                const isToday = i === 16;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className={`aspect-square flex items-center justify-center text-sm rounded-xl cursor-pointer ${
                      isToday
                        ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg"
                        : hasSession
                        ? "bg-emerald-100 text-emerald-700"
                        : "text-teal-400"
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs pt-4 border-t border-emerald-200/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-100" />
                <span className="text-teal-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-br from-emerald-500 to-teal-500" />
                <span className="text-teal-600">Today</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ y: -8 }}
          className="bg-white/80 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-emerald-200/30 mb-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-teal-800">Weekly Practice Flow</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export Report
            </motion.button>
          </div>

          <div className="flex items-end justify-between gap-4 h-64">
            {weeklyData.map((day, i) => {
              const height = (day.minutes / 120) * 100;
              const colors = [
                "from-emerald-400 to-teal-400",
                "from-teal-400 to-cyan-400",
                "from-cyan-400 to-blue-400",
                "from-lime-400 to-emerald-400",
                "from-emerald-400 to-green-400",
                "from-teal-400 to-emerald-400",
                "from-lime-400 to-teal-400",
              ];

              return (
                <motion.div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-3 group"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                >
                  <motion.div
                    className={`w-full bg-gradient-to-t ${colors[i]} rounded-3xl relative cursor-pointer`}
                    style={{ height: `${height}%` }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{
                      boxShadow: [
                        "0 4px 16px rgba(34, 197, 94, 0.2)",
                        "0 8px 24px rgba(34, 197, 94, 0.3)",
                        "0 4px 16px rgba(34, 197, 94, 0.2)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-teal-800 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
                      <div>{day.minutes} min</div>
                      <div className="text-emerald-200">{day.mood}</div>
                    </div>
                  </motion.div>
                  <span className="text-sm text-teal-600">{day.day}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-teal-800 mb-6"
        >
          Recommended for You
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${rec.color} rounded-[32px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-emerald-200/30">
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  className={`w-16 h-16 mb-4 rounded-3xl bg-gradient-to-br ${rec.color} flex items-center justify-center shadow-lg`}
                >
                  <rec.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h4 className="text-teal-800 mb-2">{rec.title}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                    {rec.type}
                  </span>
                  <span className="text-xs text-teal-600">{rec.duration}</span>
                </div>
                <p className="text-sm text-teal-600 mb-4">{rec.benefit}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${rec.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all`}
                >
                  Start Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Settings Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Account Settings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-teal-800">Account Settings</h4>
            </div>

            <div className="space-y-4">
              <motion.button
                onClick={() => setIsSettingsOpen(true)}
                whileHover={{ x: 4 }}
                className="w-full flex items-center justify-between p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-800">Preferences & Settings</span>
                </div>
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                className="w-full flex items-center justify-between p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-800">Notifications</span>
                </div>
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                className="w-full flex items-center justify-between p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-800">Privacy & Security</span>
                </div>
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[32px] p-6 shadow-xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white">Subscription</h4>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-emerald-100 text-sm mb-2">Current Plan</p>
                <p className="text-2xl text-white mb-1">Premium Annual</p>
                <p className="text-emerald-100 text-sm">Renews on Jan 15, 2025</p>
              </div>

              <div className="h-px bg-white/20 my-4" />

              <div className="flex items-center justify-between">
                <span className="text-emerald-100">Next billing</span>
                <span className="text-white">$99.99</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white/20 backdrop-blur-xl text-white rounded-2xl hover:bg-white/30 transition-all mt-4"
              >
                Manage Subscription
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Preferences Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[32px] p-8 shadow-2xl border border-emerald-200/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="float-right text-teal-600 hover:text-teal-800 text-2xl font-bold leading-none"
            >
              ×
            </button>

            <h2 className="text-teal-800 mb-8">Preferences</h2>

            <div className="space-y-8">
              {/* Theme & Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Theme */}
                <div>
                  <label className="block">
                    <p className="text-teal-800 font-semibold mb-2">Theme</p>
                    <p className="text-teal-600 text-sm mb-3">Choose light, dark or system</p>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200/60 bg-white text-teal-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={prefs.theme}
                    onChange={(e) => setPrefs({ ...prefs, theme: e.target.value as "light" | "dark" | "system" })}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>

                {/* Language */}
                <div>
                  <label className="block">
                    <p className="text-teal-800 font-semibold mb-2">Language</p>
                    <p className="text-teal-600 text-sm mb-3">App display language</p>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200/60 bg-white text-teal-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={prefs.language}
                    onChange={(e) => setPrefs({ ...prefs, language: e.target.value as "en" | "hi" | "te" | "kn" })}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="te">Telugu</option>
                    <option value="kn">Kannada</option>
                  </select>
                </div>
              </div>

              {/* Notifications */}
              <div>
                <h4 className="text-teal-800 font-semibold mb-4">Notifications</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors">
                    <span className="text-teal-800">Email notifications</span>
                    <input
                      type="checkbox"
                      checked={prefs.emailNotifications}
                      onChange={(e) => setPrefs({ ...prefs, emailNotifications: e.target.checked })}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors">
                    <span className="text-teal-800">Push notifications</span>
                    <input
                      type="checkbox"
                      checked={prefs.pushNotifications}
                      onChange={(e) => setPrefs({ ...prefs, pushNotifications: e.target.checked })}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* Privacy */}
              <div>
                <h4 className="text-teal-800 font-semibold mb-4">Privacy</h4>
                <div className="space-y-3">
                  {/* Profile Visibility */}
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <label className="block">
                      <p className="text-teal-800 font-medium mb-2">Profile visibility</p>
                    </label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-emerald-200/60 bg-white text-teal-800"
                      value={prefs.profileVisibility}
                      onChange={(e) => setPrefs({ ...prefs, profileVisibility: e.target.value as "public" | "friends" | "private" })}
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <label className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors">
                    <span className="text-teal-800">Show online status</span>
                    <input
                      type="checkbox"
                      checked={prefs.showOnlineStatus}
                      onChange={(e) => setPrefs({ ...prefs, showOnlineStatus: e.target.checked })}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors">
                    <span className="text-teal-800">Allow anonymous data sharing</span>
                    <input
                      type="checkbox"
                      checked={prefs.dataSharing}
                      onChange={(e) => setPrefs({ ...prefs, dataSharing: e.target.checked })}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-emerald-200/30">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSaveMessage("Preferences saved");
                    setTimeout(() => setSaveMessage(null), 2000);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Save Changes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSettingsOpen(false)}
                  className="flex-1 py-3 bg-emerald-100 text-teal-800 rounded-xl hover:bg-emerald-200 transition-colors"
                >
                  Close
                </motion.button>
              </div>

              {saveMessage && (
                <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-800 text-center">
                  {saveMessage}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Share Profile Modal */}
      <ShareProfileCard
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        userName="Arjun Mehta"
        userTitle="Spiritual Seeker • Meditation Enthusiast"
        userEmail="arjun.mehta@example.com"
        userLocation="Mumbai, India"
        stats={{
          sessions: 127,
          streak: 21,
          totalTime: "42hrs",
          wellnessScore: 92,
        }}
      />
    </div>
  );
}
