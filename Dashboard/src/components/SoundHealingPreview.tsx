import { motion } from "motion/react";
import { Volume2, Waves, Music, Radio } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SoundHealingPreview() {
  const navigate = useNavigate();
  const soundCategories = [
    {
      title: "Tibetan Bowls",
      frequency: "432 Hz",
      icon: Radio,
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Nature Sounds",
      frequency: "528 Hz",
      icon: Waves,
      color: "from-emerald-400 to-teal-400",
    },
    {
      title: "Binaural Beats",
      frequency: "639 Hz",
      icon: Volume2,
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Crystal Therapy",
      frequency: "741 Hz",
      icon: Music,
      color: "from-lime-400 to-emerald-400",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-800 text-white">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-32 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
            style={{
              bottom: `${i * 20}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6">Sound Healing Frequencies</h2>
          <p className="max-w-2xl mx-auto text-lg text-emerald-100">
            Immerse yourself in sacred frequencies that restore harmony to body, 
            mind, and spirit. Experience the transformative power of sound therapy.
          </p>
        </motion.div>

        {/* 3D Waveform Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="relative h-64 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 overflow-hidden">
            {/* 3D Waveform Effect */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 px-8">
              {Array.from({ length: 60 }).map((_, i) => {
                const height = Math.sin(i * 0.2) * 40 + 60;
                return (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-lime-400 via-emerald-400 to-teal-400 rounded-full"
                    style={{
                      minWidth: "4px",
                    }}
                    animate={{
                      height: [
                        `${height}%`,
                        `${height * 0.5}%`,
                        `${height * 1.2}%`,
                        `${height}%`,
                      ],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05,
                    }}
                  />
                );
              })}
            </div>

            {/* Sound Rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [0.8, 1.5],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-lime-400" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [0.8, 1.5],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-emerald-400" />
            </motion.div>

            {/* Center Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-emerald-400 flex items-center justify-center cursor-pointer shadow-2xl z-10"
              style={{
                boxShadow: "0 0 40px rgba(163, 230, 53, 0.6)",
              }}
            >
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Sound Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {soundCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity`}
              />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:border-white/40 transition-all">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h4 className="text-center text-white mb-2">{category.title}</h4>

                {/* Frequency Badge */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <span className="text-sm text-emerald-200">{category.frequency}</span>
                </div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm text-white transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Listen Now
                </motion.button>

                {/* Pulsing Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => navigate('/dashboard/sound')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-lime-400 to-emerald-400 text-teal-900 rounded-full shadow-2xl hover:shadow-emerald-400/50 transition-all"
          >
            Explore Full Sound Library
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Sound Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-lime-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
