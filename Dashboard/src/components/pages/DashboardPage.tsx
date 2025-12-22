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
} from "lucide-react";

export function DashboardPage() {
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
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-teal-800 mb-2">Your Wellness Dashboard</h1>
              <p className="text-teal-700">Track your spiritual journey and celebrate your progress</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg cursor-pointer"
            >
              Export Report
            </motion.div>
          </div>
        </motion.div>

        {/* Top Stats Row */}
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
              <div className="px-3 py-1 bg-lime-100 rounded-full text-xs text-lime-700">+12</div>
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
                <p className="text-sm text-teal-600">Your journey through emotions</p>
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
                  boxShadow: "0 30px 80px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.3)",
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
                { emoji: "😌", label: "Calm", x: -140, y: 0, color: "from-teal-400 to-cyan-400" },
                { emoji: "😄", label: "Joy", x: 0, y: -140, color: "from-lime-400 to-emerald-400" },
                { emoji: "🧘", label: "Zen", x: 140, y: 0, color: "from-emerald-400 to-green-400" },
                { emoji: "✨", label: "Inspired", x: 0, y: 140, color: "from-purple-400 to-pink-400" },
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
                const isToday = i === 11;
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
            <Activity className="w-6 h-6 text-emerald-500" />
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
                      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
