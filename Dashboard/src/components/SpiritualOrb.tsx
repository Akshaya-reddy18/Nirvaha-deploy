import { motion } from "motion/react";

export function SpiritualOrb() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
      {/* Outer Aura Rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-emerald-300/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-teal-300/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full border border-lime-300/15"
        animate={{
          scale: [1, 1.7, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Orb Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Gradient Halo Background */}
        <motion.div
          className="absolute w-full h-full rounded-full bg-gradient-to-br from-lime-300/30 via-emerald-300/20 to-teal-300/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main 3D Spiritual Orb */}
        <motion.div
          className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #a3e635 0%, #22c55e 40%, #14b8a6 100%)",
            boxShadow: `
              0 0 60px rgba(163, 230, 53, 0.4),
              0 0 120px rgba(34, 197, 94, 0.3),
              inset 0 0 60px rgba(255, 255, 255, 0.2)
            `,
          }}
          animate={{
            boxShadow: [
              "0 0 60px rgba(163, 230, 53, 0.4), 0 0 120px rgba(34, 197, 94, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.2)",
              "0 0 80px rgba(163, 230, 53, 0.6), 0 0 160px rgba(34, 197, 94, 0.4), inset 0 0 80px rgba(255, 255, 255, 0.3)",
              "0 0 60px rgba(163, 230, 53, 0.4), 0 0 120px rgba(34, 197, 94, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner Light Spot */}
          <motion.div
            className="absolute top-[25%] left-[25%] w-[30%] h-[30%] rounded-full bg-white/40 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glass Refraction Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* Orbiting Particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const radius = 180;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-lime-400 to-emerald-400 shadow-lg"
            style={{
              boxShadow: "0 0 10px rgba(163, 230, 53, 0.6)",
            }}
            animate={{
              x: [x, x * 1.2, x],
              y: [y, y * 1.2, y],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 4) / 12,
            }}
          />
        );
      })}

      {/* Energy Streams */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 360) / 6;
        return (
          <motion.div
            key={`stream-${i}`}
            className="absolute top-1/2 left-1/2 w-1 origin-left"
            style={{
              height: "120px",
              background: "linear-gradient(to bottom, rgba(163, 230, 53, 0.4), transparent)",
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 2) / 6,
            }}
          />
        );
      })}

      {/* Rotating Sacred Ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-emerald-400/20 border-dashed" />
      </motion.div>

      {/* Counter-Rotating Sacred Ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[450px] lg:h-[450px] rounded-full border border-teal-400/15 border-dotted" />
      </motion.div>
    </div>
  );
}
