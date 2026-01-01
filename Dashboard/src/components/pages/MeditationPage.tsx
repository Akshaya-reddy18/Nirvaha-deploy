import { motion } from "motion/react";
import { Hand, Play, Clock, Target, Flame, Wind, Droplet, Heart, Eye, Crown, Star } from "lucide-react";

export function MeditationPage() {
  const mudraDetails = [
    {
      name: "Gyan Mudra",
      subtitle: "Mudra of Knowledge",
      description: "Touch the tip of your thumb to the tip of your index finger, keeping the other three fingers straight.",
      benefits: ["Enhances concentration", "Improves memory", "Stimulates brain function", "Calms the mind"],
      chakra: "Crown Chakra",
      element: "Air & Space",
      duration: "15-30 minutes",
      color: "from-purple-400 to-indigo-500",
      icon: Crown,
      image: "/Mudras/GM.jpeg",
    },
    {
      name: "Prana Mudra",
      subtitle: "Mudra of Life",
      description: "Touch the tips of your thumb, ring finger, and little finger together, keeping index and middle fingers straight.",
      benefits: ["Increases vitality", "Boosts immune system", "Energizes the body", "Improves vision"],
      chakra: "Root Chakra",
      element: "Earth & Water",
      duration: "10-20 minutes",
      color: "from-red-400 to-orange-500",
      icon: Flame,
      image: "/Mudras/PM.jpeg",
    },
    {
      name: "Vayu Mudra",
      subtitle: "Mudra of Air",
      description: "Fold your index finger to touch the base of your thumb, then gently press with the thumb.",
      benefits: ["Reduces anxiety", "Balances air element", "Relieves gas", "Calms nervousness"],
      chakra: "Heart Chakra",
      element: "Air",
      duration: "15-45 minutes",
      color: "from-cyan-400 to-blue-500",
      icon: Wind,
      image: "/Mudras/AM.jpeg",
    },
    {
      name: "Varuna Mudra",
      subtitle: "Mudra of Water",
      description: "Touch the tip of your thumb to the tip of your little finger, keeping the other fingers straight.",
      benefits: ["Balances water element", "Improves skin health", "Hydrates body", "Enhances fluid circulation"],
      chakra: "Sacral Chakra",
      element: "Water",
      duration: "15-30 minutes",
      color: "from-blue-400 to-teal-500",
      icon: Droplet,
      image: "/Mudras/VM.jpeg",
    },
  ];

  const guidedSessions = [
    {
      title: "Morning Awakening",
      description: "Start your day with renewed energy and clarity",
      duration: "10 min",
      level: "Beginner",
      type: "Energizing",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
      color: "from-orange-400 to-yellow-500",
    },
    {
      title: "Stress Relief",
      description: "Release tension and find inner calm",
      duration: "15 min",
      level: "All Levels",
      type: "Relaxing",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400",
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Deep Meditation",
      description: "Journey into profound stillness and awareness",
      duration: "30 min",
      level: "Advanced",
      type: "Contemplative",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400",
      color: "from-indigo-400 to-purple-500",
    },
    {
      title: "Chakra Balance",
      description: "Align and harmonize your energy centers",
      duration: "20 min",
      level: "Intermediate",
      type: "Healing",
      image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=400",
      color: "from-emerald-400 to-green-500",
    },
    {
      title: "Loving Kindness",
      description: "Cultivate compassion for self and others",
      duration: "12 min",
      level: "Beginner",
      type: "Heart-Opening",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400",
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Evening Wind Down",
      description: "Prepare for restful, rejuvenating sleep",
      duration: "18 min",
      level: "All Levels",
      type: "Calming",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400",
      color: "from-violet-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-6">Meditation & Mudras</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Discover the ancient art of mudras and guided meditation practices 
            to channel energy, balance your chakras, and deepen your spiritual journey.
          </p>
        </motion.div>

        {/* Mudra Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {mudraDetails.map((mudra, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${mudra.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                />

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-emerald-200/30 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className="w-20 h-20 mb-6 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden"
                  >
                    <img 
                      src={mudra.image} 
                      alt={mudra.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-teal-800 mb-2">{mudra.name}</h3>
                  <p className="text-sm text-teal-600 mb-4">{mudra.subtitle}</p>

                  {/* Description */}
                  <p className="text-teal-700 mb-6 leading-relaxed">{mudra.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h5 className="text-teal-800 mb-3">Benefits</h5>
                    <ul className="space-y-2">
                      {mudra.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2 text-sm text-teal-700"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${mudra.color}`} />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200/30">
                    <div>
                      <p className="text-xs text-teal-600 mb-1">Chakra</p>
                      <p className="text-xs text-teal-800">{mudra.chakra}</p>
                    </div>
                    <div>
                      <p className="text-xs text-teal-600 mb-1">Element</p>
                      <p className="text-xs text-teal-800">{mudra.element}</p>
                    </div>
                    <div>
                      <p className="text-xs text-teal-600 mb-1">Duration</p>
                      <p className="text-xs text-teal-800">{mudra.duration}</p>
                    </div>
                  </div>

                  {/* Practice Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full py-3 bg-gradient-to-r ${mudra.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                  >
                    <Play className="w-4 h-4" />
                    Practice Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Guided Meditation Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-extrabold mb-10"
          >
            Guided Meditation Sessions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidedSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-emerald-200/30">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${session.color} opacity-60`} />
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <Clock className="w-3 h-3 text-teal-600" />
                      <span className="text-xs text-teal-800">{session.duration}</span>
                    </div>

                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                        <Play className="w-7 h-7 text-emerald-600 ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        {session.level}
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                        {session.type}
                      </span>
                    </div>

                    <h4 className="text-teal-800 mb-2">{session.title}</h4>
                    <p className="text-sm text-teal-600 leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
