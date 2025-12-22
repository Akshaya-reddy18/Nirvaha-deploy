import React from "react";
import { motion } from "framer-motion";
import { Brain, Music, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain size={40} className="text-purple-500" />,
    title: "AI-Powered",
    description: "Smart algorithms that adapt to your needs and learn over time.",
  },
  {
    icon: <Music size={40} className="text-pink-500" />,
    title: "Seamless Audio",
    description: "Crystal-clear sound processing with instant language adaptation.",
  },
  {
    icon: <Palette size={40} className="text-blue-500" />,
    title: "Beautiful UI",
    description: "Modern, clean, and visually stunning interface designs.",
  },
  {
    icon: <Zap size={40} className="text-yellow-500" />,
    title: "Fast Performance",
    description: "Optimized for speed without compromising on quality.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Features
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white text-center">
              {feature.title}
            </h3>
            <p className="text-gray-200 text-center mt-2">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
