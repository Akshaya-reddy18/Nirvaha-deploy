// import { motion } from "motion/react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Hand, Heart, Zap, Wind, Flame, Droplet } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export function MeditationPreview() {
//   const navigate = useNavigate();
//   const mudras = [
//     {
//       name: "Gyan Mudra",
//       description: "Knowledge & Wisdom",
//       chakra: "Crown",
//       color: "from-purple-400 to-indigo-400",
//       image: "/Mudras/GM.jpeg",
//     },
//     {
//       name: "Anjali Mudra",
//       description: "Heart Connection",
//       chakra: "Heart",
//       color: "from-emerald-400 to-green-400",
//       image: "/Mudras/AM.jpeg",
//     },
//     {
//       name: "Prana Mudra",
//       description: "Life Force Energy",
//       chakra: "Root",
//       color: "from-red-400 to-rose-400",
//       image: "/Mudras/PM.jpeg",
//     },
//     {
//       name: "Vayu Mudra",
//       description: "Air Element",
//       chakra: "Throat",
//       color: "from-cyan-400 to-blue-400",
//       image: "/Mudras/VM.jpeg",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a5d54 0%, #2e7f74 25%, #4fa89d 50%, #6dc5b8 75%, #a9e7da 100%)" }}>
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6">Mudras & Meditation</h2>
//           <p className="max-w-2xl mx-auto text-lg text-teal-700">
//             Harness the power of sacred hand gestures to channel energy, 
//             balance chakras, and deepen your meditation practice.
//           </p>
//         </motion.div>

//         {/* Mudra Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {mudras.map((mudra, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//               className="group relative"
//             >
//               {/* Glow Effect */}
//               <motion.div
//                 className={`absolute inset-0 bg-gradient-to-br ${mudra.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
//               />

//               {/* Card */}
//               <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-emerald-200/30 hover:border-emerald-300 transition-all">
//                 {/* Mudra Image Container */}
//                 <motion.div
//                   whileHover={{ rotate: [0, -10, 10, 0] }}
//                   transition={{ duration: 0.5 }}
//                   className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${mudra.color} flex items-center justify-center shadow-lg overflow-hidden`}
//                 >
//                   <img 
//                     src={mudra.image} 
//                     alt={mudra.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>

//                 <h4 className="text-center text-teal-800 mb-2">{mudra.name}</h4>
//                 <p className="text-sm text-center text-teal-600 mb-3">
//                   {mudra.description}
//                 </p>

//                 {/* Chakra Badge */}
//                 <div className="flex items-center justify-center gap-2">
//                   <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${mudra.color}`} />
//                   <span className="text-xs text-teal-500">{mudra.chakra} Chakra</span>
//                 </div>

//                 {/* Energy Glow Animation */}
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-br ${mudra.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
//                   animate={{
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Guided Meditation Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-[40px] p-12 shadow-2xl overflow-hidden"
//         >
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <svg className="w-full h-full" viewBox="0 0 100 100">
//               <pattern
//                 id="meditation-pattern"
//                 x="0"
//                 y="0"
//                 width="20"
//                 height="20"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <circle cx="10" cy="10" r="1" fill="white" />
//               </pattern>
//               <rect width="100" height="100" fill="url(#meditation-pattern)" />
//             </svg>
//           </div>

//           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left: Image */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="relative"
//             >
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <ImageWithFallback
//                   src="https://images.unsplash.com/photo-1641391400773-dcdd2f5ab7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwemVuJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY1NTIwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
//                   alt="Peaceful meditation"
//                   className="w-full h-[400px] object-cover"
//                 />
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
//               </div>

//               {/* Floating Badge */}
//               <motion.div
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
//                     <Heart className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-green-900">Active Users</div>
//                     <div className="bg-gradient-to-r from-green-900 to-green-800 bg-clip-text text-transparent font-bold">50K+</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right: Content */}
//             <div className="space-y-6 text-white">
//               <h3 className="text-white">Guided Meditation Sessions</h3>
//               <p className="text-green-100 text-lg leading-relaxed">
//                 From beginner to advanced, discover hundreds of guided meditations 
//                 tailored to your needs. Each session is designed to bring peace, 
//                 clarity, and spiritual growth.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   { icon: Flame, title: "Morning Energizer", duration: "10 min" },
//                   { icon: Droplet, title: "Evening Relaxation", duration: "15 min" },
//                   { icon: Wind, title: "Breath Awareness", duration: "20 min" },
//                 ].map((session, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ x: 10 }}
//                     className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
//                       <session.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h5 className="text-white mb-1">{session.title}</h5>
//                       <p className="text-xs text-green-200">{session.duration}</p>
//                     </div>
//                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                       <svg
//                         className="w-5 h-5 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.button
//                 onClick={() => navigate('/dashboard/meditation')}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-8 py-4 bg-white text-green-800 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
//               >
//                 Explore All Sessions
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Hand, Heart, Zap, Wind, Flame, Droplet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MeditationPreview() {
  const navigate = useNavigate();
  const mudras = [
    {
      name: "Gyan Mudra",
      description: "Knowledge & Wisdom",
      chakra: "Crown",
      color: "from-purple-400 to-indigo-400",
      image: "/Mudras/GM.jpeg",
    },
    {
      name: "Anjali Mudra",
      description: "Heart Connection",
      chakra: "Heart",
      color: "from-emerald-400 to-green-400",
      image: "/Mudras/AM.jpeg",
    },
    {
      name: "Prana Mudra",
      description: "Life Force Energy",
      chakra: "Root",
      color: "from-red-400 to-rose-400",
      image: "/Mudras/PM.jpeg",
    },
    {
      name: "Vayu Mudra",
      description: "Air Element",
      chakra: "Throat",
      color: "from-cyan-400 to-blue-400",
      image: "/Mudras/VM.jpeg",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a5d54 0%, #2e7f74 25%, #4fa89d 50%, #6dc5b8 75%, #a9e7da 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6">Mudras & Meditation</h2>
          <p className="max-w-2xl mx-auto text-lg text-teal-700">
            Harness the power of sacred hand gestures to channel energy, 
            balance chakras, and deepen your meditation practice.
          </p>
        </motion.div>

        {/* Mudra Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mudras.map((mudra, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br ${mudra.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
              />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-emerald-200/30 hover:border-emerald-300 transition-all">
                {/* Mudra Image Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${mudra.color} flex items-center justify-center shadow-lg overflow-hidden`}
                >
                  <img 
                    src={mudra.image} 
                    alt={mudra.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <h4 className="text-center text-teal-800 mb-2">{mudra.name}</h4>
                <p className="text-sm text-center text-teal-600 mb-3">
                  {mudra.description}
                </p>

                {/* Chakra Badge */}
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${mudra.color}`} />
                  <span className="text-xs text-teal-500">{mudra.chakra} Chakra</span>
                </div>

                {/* Energy Glow Animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${mudra.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
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

        {/* Guided Meditation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#0f3d38] via-[#1b5e52] to-[#2e7f74] rounded-[40px] p-12 shadow-2xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern
                id="meditation-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
              <rect width="100" height="100" fill="url(#meditation-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (static - no parallax) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641391400773-dcdd2f5ab7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwemVuJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY1NTIwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Peaceful meditation"
                  className="w-full h-[400px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#063b35]/50 to-transparent" />
              </div>

              {/* Floating Badge (static) */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-green-900">Active Users</div>
                    <div className="bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent font-bold">50K+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 text-white">
              <h3 className="text-white">Guided Meditation Sessions</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                From beginner to advanced, discover hundreds of guided meditations 
                tailored to your needs. Each session is designed to bring peace, 
                clarity, and spiritual growth.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Flame, title: "Morning Energizer", duration: "10 min" },
                  { icon: Droplet, title: "Evening Relaxation", duration: "15 min" },
                  { icon: Wind, title: "Breath Awareness", duration: "20 min" },
                ].map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <session.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white mb-1">{session.title}</h5>
                      <p className="text-xs text-green-200">{session.duration}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate('/dashboard/meditation')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-green-800 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore All Sessions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}