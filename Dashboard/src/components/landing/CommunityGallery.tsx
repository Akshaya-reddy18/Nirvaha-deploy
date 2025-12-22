import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { src: '/Interactive.jpg', title: 'Mindfulness Circle' },
  { src: '/bgman.png', title: 'Breath Workshop' },
  { src: '/bgman1.png', title: 'Sound Bath' },
  { src: '/SpiritualJourneyKit.png', title: 'Journey Kit' },
  { src: '/meditation.png', title: 'Meditation Camp' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CommunityGallery: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl w-[80%] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
        <div className="mb-8 text-center">
          <h2 className="font-title text-3xl sm:text-4xl text-[#0A0F0F]">Community</h2>
          <p className="text-[#4a4a4a] mt-2">Moments from our events and workshops</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory"
        >
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group overflow-hidden rounded-2xl shadow-sm flex-none w-full sm:w-1/2 lg:w-1/3 snap-start"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.src}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/30 to-transparent">
                  <div className="text-white text-sm opacity-90">{it.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityGallery;
