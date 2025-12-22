import { motion } from "motion/react";
import { ArrowRight, Sparkles, Gift, Crown } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing Waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-48 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "rgba(163, 230, 53, 0.15)" : "rgba(20, 184, 166, 0.15)"
              }, transparent)`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Sacred Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-10 h-10 text-lime-300" />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-white mb-6">
            Begin Your Journey to
            <motion.span
              className="block bg-gradient-to-r from-lime-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Enlightenment Today
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join thousands who have transformed their lives through NIRVAHA's 
          revolutionary approach to spiritual wellness. Your path to inner peace 
          starts with a single breath.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-white text-emerald-700 rounded-full shadow-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-lime-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Crown className="w-6 h-6" />
              Start Free Trial
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: "0 0 60px rgba(163, 230, 53, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full border-2 border-white/30 hover:border-white/60 transition-all shadow-xl text-lg"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Gift, text: "7-Day Free Trial" },
            { icon: Sparkles, text: "No Credit Card Required" },
            { icon: Crown, text: "Cancel Anytime" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-emerald-50"
            >
              <item.icon className="w-4 h-4 text-lime-300" />
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-sm text-emerald-100 mb-6">Trusted by leading wellness organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {["Wellness+", "MindCare", "Zen Institute", "SoulPath"].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-white text-lg font-medium tracking-wider"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-lime-400/20 via-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
