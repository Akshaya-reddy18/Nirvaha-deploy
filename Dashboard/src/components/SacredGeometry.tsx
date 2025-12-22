import { motion } from "motion/react";

export function SacredGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Flower of Life Pattern */}
      <motion.svg
        className="absolute top-20 right-20 w-64 h-64 text-emerald-400"
        viewBox="0 0 200 200"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="135" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="65" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="117.5" cy="130" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="82.5" cy="130" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="117.5" cy="70" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="82.5" cy="70" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Metatron's Cube */}
      <motion.svg
        className="absolute bottom-32 left-20 w-72 h-72 text-teal-400"
        viewBox="0 0 200 200"
        animate={{
          rotate: -360,
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="57" y1="57" x2="143" y2="143" stroke="currentColor" strokeWidth="1" />
        <line x1="143" y1="57" x2="57" y2="143" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="160" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="160" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="57" cy="57" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="143" cy="143" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="143" cy="57" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="57" cy="143" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Sri Yantra Inspired */}
      <motion.svg
        className="absolute top-1/2 left-32 w-56 h-56 text-lime-400"
        viewBox="0 0 200 200"
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 70, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <polygon points="100,30 150,150 50,150" fill="none" stroke="currentColor" strokeWidth="1" />
        <polygon points="100,170 150,50 50,50" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Hexagonal Grid */}
      <motion.svg
        className="absolute bottom-20 right-40 w-80 h-80 text-emerald-300"
        viewBox="0 0 200 200"
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.polygon
            key={i}
            points="100,40 130,55 130,85 100,100 70,85 70,55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            transform={`scale(${1 + i * 0.3}) translate(${i * -15}, ${i * -15})`}
            animate={{
              rotate: [0, 60, 120, 180, 240, 300, 360],
            }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.svg>

      {/* Chakra-Inspired Circles */}
      <div className="absolute top-1/4 right-1/4">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-teal-400"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              marginLeft: `-${(60 + i * 30) / 2}px`,
              marginTop: `-${(60 + i * 30) / 2}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Floating Sacred Triangles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${10 + Math.floor(i / 4) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-400">
            <polygon
              points="20,5 35,35 5,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}

      {/* Lotus Petal Pattern */}
      <motion.svg
        className="absolute top-1/3 right-1/3 w-48 h-48 text-lime-300"
        viewBox="0 0 200 200"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="15"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </motion.svg>

      {/* Wireframe Cube */}
      <motion.svg
        className="absolute bottom-1/4 left-1/2 w-32 h-32 text-teal-300"
        viewBox="0 0 100 100"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <rect x="25" y="25" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="45" y="45" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="25" x2="45" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="55" y1="25" x2="75" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="55" x2="45" y2="75" stroke="currentColor" strokeWidth="1" />
        <line x1="55" y1="55" x2="75" y2="75" stroke="currentColor" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}
