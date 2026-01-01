import { motion } from "motion/react";
import { Activity, Calendar, TrendingUp, Award, Clock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DashboardPreview() {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-white via-teal-50/20 to-emerald-50/20">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-48 -right-48 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-800 mb-4">Your Wellness Dashboard</h2>
          <p className="max-w-2xl mx-auto text-lg text-teal-700">
            Visualize your spiritual journey with beautiful analytics, personalized insights, 
            and progress tracking that celebrates every step of your growth.
          </p>
        </motion.div>

        {/* Dashboard Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Mood Sphere Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-xl border border-emerald-200/30"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-teal-800 mb-1">Your Emotional State</h4>
                <p className="text-sm text-teal-600">Last 7 days</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* 3D Mood Sphere Visualization */}
            <div className="relative h-64 flex items-center justify-center">
              {/* Outer Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2 border-emerald-300/30"
                  style={{
                    width: `${160 + i * 40}px`,
                    height: `${160 + i * 40}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}

              {/* Central Sphere */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 rounded-full bg-gradient-to-br from-lime-400 via-emerald-400 to-teal-400 flex items-center justify-center shadow-2xl"
                style={{
                  boxShadow: "0 20px 60px rgba(34, 197, 94, 0.4)",
                }}
              >
                <div className="text-center text-white">
                  <div className="text-4xl mb-1">😊</div>
                  <div className="text-sm">Peaceful</div>
                </div>

                {/* Light Spot */}
                <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white/40 blur-xl" />
              </motion.div>

              {/* Emotion Points */}
              {[
                { emoji: "😌", label: "Calm", angle: 0, color: "from-teal-400 to-cyan-400" },
                { emoji: "😄", label: "Joy", angle: 90, color: "from-lime-400 to-emerald-400" },
                { emoji: "😔", label: "Low", angle: 180, color: "from-blue-400 to-indigo-400" },
                { emoji: "😮", label: "Alert", angle: 270, color: "from-orange-400 to-red-400" },
              ].map((emotion, i) => {
                const radius = 120;
                const x = Math.cos((emotion.angle * Math.PI) / 180) * radius;
                const y = Math.sin((emotion.angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-16 h-16 rounded-2xl bg-gradient-to-br ${emotion.color} flex flex-col items-center justify-center shadow-lg cursor-pointer`}
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: `${x}px`,
                      marginTop: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      },
                    }}
                  >
                    <div className="text-xl">{emotion.emoji}</div>
                    <div className="text-[8px] text-white mt-1">{emotion.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Meditation Streak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 shadow-xl text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-full border-2 border-white/30 border-t-white"
                />
              </div>
              <h4 className="text-white mb-1">Streak</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl">14</span>
                <span className="text-lg text-emerald-100">days</span>
              </div>
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-lime-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Total Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-emerald-200/30"
            >
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <h5 className="text-teal-800 mb-1">This Week</h5>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl text-teal-800">5.2</span>
                <span className="text-lg text-teal-600">hours</span>
              </div>
              <p className="text-xs text-emerald-600 mt-2">+23% from last week</p>
            </motion.div>
          </div>
        </div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -8 }}
          className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-xl border border-emerald-200/30"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-teal-800">Weekly Activity</h4>
            <Calendar className="w-6 h-6 text-emerald-500" />
          </div>

          {/* Activity Bar Chart */}
          <div className="flex items-end justify-between gap-3 h-48">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const height = [60, 80, 45, 90, 70, 85, 95][i];
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
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <motion.div
                    className={`w-full bg-gradient-to-t ${colors[i]} rounded-2xl relative group cursor-pointer`}
                    style={{ height: `${height}%` }}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: [
                        "0 4px 12px rgba(34, 197, 94, 0.2)",
                        "0 8px 20px rgba(34, 197, 94, 0.3)",
                        "0 4px 12px rgba(34, 197, 94, 0.2)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-teal-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      {[45, 60, 30, 75, 50, 68, 82][i]} min
                    </div>
                  </motion.div>
                  <span className="text-xs text-teal-600">{day}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
