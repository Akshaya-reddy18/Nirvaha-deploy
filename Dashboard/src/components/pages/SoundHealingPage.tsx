import { motion } from "motion/react";
import { Volume2, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart, Share2, Download } from "lucide-react";
import { useState } from "react";

export function SoundHealingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const soundLibrary = [
    {
      title: "Tibetan Singing Bowls",
      artist: "Sacred Sounds Collective",
      frequency: "432 Hz",
      duration: "15:30",
      category: "Bowl Therapy",
      color: "from-purple-400 to-pink-500",
      description: "Ancient healing vibrations from the Himalayas",
    },
    {
      title: "Ocean Waves & Rain",
      artist: "Nature Symphony",
      frequency: "528 Hz",
      duration: "20:00",
      category: "Nature Sounds",
      color: "from-blue-400 to-cyan-500",
      description: "Soothing water elements for deep relaxation",
    },
    {
      title: "Theta Binaural Beats",
      artist: "NeuroSound Lab",
      frequency: "639 Hz",
      duration: "30:00",
      category: "Binaural",
      color: "from-indigo-400 to-purple-500",
      description: "Deep meditation and subconscious healing",
    },
    {
      title: "Crystal Bowl Meditation",
      artist: "Quantum Healing",
      frequency: "741 Hz",
      duration: "18:45",
      category: "Crystal Therapy",
      color: "from-emerald-400 to-teal-500",
      description: "Purifying frequencies for cellular healing",
    },
    {
      title: "Forest Ambience",
      artist: "Earth Sounds",
      frequency: "396 Hz",
      duration: "25:00",
      category: "Nature Sounds",
      color: "from-green-400 to-emerald-500",
      description: "Grounding energy from ancient forests",
    },
    {
      title: "Chakra Tuning",
      artist: "Energy Masters",
      frequency: "852 Hz",
      duration: "22:30",
      category: "Chakra Healing",
      color: "from-violet-400 to-purple-500",
      description: "Balance all seven energy centers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-800 text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
          >
            <Volume2 className="w-4 h-4 text-lime-300" />
            <span className="text-sm text-emerald-100">Vibrational Healing</span>
          </motion.div>

          <h1 className="text-white mb-4">Sound Healing Library</h1>
          <p className="max-w-3xl mx-auto text-lg text-emerald-100">
            Immerse yourself in therapeutic frequencies and healing vibrations. 
            Each sound is carefully crafted to restore harmony and promote deep healing.
          </p>
        </motion.div>

        {/* Featured Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-[48px] p-12 border border-white/20 overflow-hidden shadow-2xl">
            {/* Background Waveform */}
            <div className="absolute inset-0 flex items-center justify-center gap-1 px-12 opacity-20">
              {Array.from({ length: 80 }).map((_, i) => {
                const height = Math.sin(i * 0.15) * 40 + 60;
                return (
                  <motion.div
                    key={i}
                    className={`flex-1 bg-gradient-to-t ${soundLibrary[currentTrack].color} rounded-full`}
                    style={{ minWidth: "3px" }}
                    animate={{
                      height: isPlaying ? [`${height}%`, `${height * 0.6}%`, `${height * 1.1}%`, `${height}%`] : `${height * 0.3}%`,
                      opacity: isPlaying ? [0.6, 1, 0.6] : 0.3,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "easeInOut",
                      delay: i * 0.02,
                    }}
                  />
                );
              })}
            </div>

            <div className="relative z-10">
              {/* Track Info */}
              <div className="flex items-center gap-8 mb-8">
                <motion.div
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    duration: 20,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "linear",
                  }}
                  className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${soundLibrary[currentTrack].color} shadow-2xl flex items-center justify-center flex-shrink-0`}
                  style={{
                    boxShadow: "0 20px 60px rgba(163, 230, 53, 0.3)",
                  }}
                >
                  <Volume2 className="w-16 h-16 text-white" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
                      {soundLibrary[currentTrack].category}
                    </span>
                    <span className="px-3 py-1 bg-lime-400/20 backdrop-blur-sm text-xs rounded-full text-lime-300">
                      {soundLibrary[currentTrack].frequency}
                    </span>
                  </div>
                  <h2 className="text-white mb-2">{soundLibrary[currentTrack].title}</h2>
                  <p className="text-emerald-200 mb-1">{soundLibrary[currentTrack].artist}</p>
                  <p className="text-sm text-emerald-300">{soundLibrary[currentTrack].description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-emerald-200 mb-2">
                  <span>2:45</span>
                  <span>{soundLibrary[currentTrack].duration}</span>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${soundLibrary[currentTrack].color} rounded-full`}
                    initial={{ width: "20%" }}
                    animate={{ width: isPlaying ? "60%" : "20%" }}
                    transition={{ duration: 2 }}
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer" />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Shuffle className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentTrack((currentTrack - 1 + soundLibrary.length) % soundLibrary.length)}
                  className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <SkipBack className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${soundLibrary[currentTrack].color} flex items-center justify-center shadow-2xl`}
                  style={{
                    boxShadow: "0 20px 60px rgba(163, 230, 53, 0.4)",
                  }}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentTrack((currentTrack + 1) % soundLibrary.length)}
                  className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <SkipForward className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Repeat className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sound Library Grid */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white mb-8"
        >
          Full Library
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soundLibrary.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setCurrentTrack(index)}
              className={`group relative cursor-pointer ${currentTrack === index ? "ring-2 ring-lime-400" : ""}`}
            >
              {/* Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
              />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Volume2 className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white truncate mb-1">{track.title}</h4>
                    <p className="text-sm text-emerald-200 truncate">{track.artist}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full">{track.category}</span>
                  <span className="text-xs text-lime-300">{track.frequency}</span>
                </div>

                <p className="text-sm text-emerald-200 mb-4 line-clamp-2">{track.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-200">{track.duration}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                  >
                    <Play className="w-4 h-4 ml-0.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
