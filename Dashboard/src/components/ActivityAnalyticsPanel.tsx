// import { motion } from 'motion/react';

// export function ActivityAnalyticsPanel() {
  
//   return (
//     <section className="relative min-h-screen px-6 overflow-hidden flex items-center"
//       style={{
//         background: "linear-gradient(180deg, #0a2f2a 0%, #0f3d38 14%, #1a5d54 28%, #2e7f74 42%, #4fa89d 56%, #6dc5b8 70%, #8dd9ce 84%, #a9e7da 100%)"
//       }}
//     >
//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {Array.from({ length: 15 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 rounded-full bg-white/20"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.2, 0.5, 0.2],
//               scale: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto">
//         {/* Main Grid Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Editorial Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex items-center"
//           >
//             <div className="max-w-2xl">
//               <motion.h2 
//                 className="text-white/90 text-base md:text-lg lg:text-xl font-semibold uppercase tracking-[0.25em] mb-4"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 Welcome Back
//               </motion.h2>
              
//               <motion.h1 
//                 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 <span className="inline-block">Soul</span>{' '}
//                 <motion.span 
//                   className="inline-block bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent"
//                   animate={{ 
//                     backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                   style={{ backgroundSize: '200% 200%' }}
//                 >
//                   Seeker
//                 </motion.span>
//               </motion.h1>
              
//               <motion.p 
//                 className="text-white/90 text-xl md:text-2xl font-light leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//               >
//                 Your sanctuary for mindfulness, balance, and inner peace.
//               </motion.p>
//             </div>
//           </motion.div>

//           {/* Right Side - Yoga Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ 
//               opacity: 1, 
//               x: 0,
//               y: [0, -15, 15, -10, 10, 0],
//               rotateZ: [0, 2, -2, 1.5, -1.5, 0]
//             }}
//             transition={{ 
//               duration: 0.8, 
//               delay: 0.4,
//               y: {
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               },
//               rotateZ: {
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }
//             }}
//             className="relative w-full max-w-lg mx-auto lg:ml-auto"
//           >
//             <img 
//               src="/yoga-meditation.jpg" 
//               alt="Meditation Silhouettes" 
//               className="w-full h-auto rounded-[32px] shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'motion/react';

export function ActivityAnalyticsPanel() {
  
  return (
    <section className="relative min-h-screen px-6 overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(180deg, #072d28 0%, #0f3d38 25%, #1b5e52 50%, #2e7f74 75%, #6dc5b8 100%)"
      }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scale: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="max-w-2xl">
              <motion.h2 
                className="text-white/90 text-base md:text-lg lg:text-xl font-semibold uppercase tracking-[0.25em] mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Welcome Back
              </motion.h2>
              
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="inline-block">Soul</span>{' '}
                <motion.span 
                  className="inline-block bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Seeker
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-white/90 text-xl md:text-2xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Your sanctuary for mindfulness, balance, and inner peace.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Yoga Image */}
          <div
            className="relative w-full max-w-lg mx-auto lg:ml-auto"
          >
            <img 
              src="/yoga-meditation.jpg" 
              alt="Meditation Silhouettes" 
              className="w-full h-auto rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}