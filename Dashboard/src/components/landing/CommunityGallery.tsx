import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const items = [
  { src: '/events/e1.jpeg', title: 'Partnered with India - Japan consulting firm to promote holistic well being among youth. This marks cross border synergies.' },
  { src: '/events/e2.jpeg', title: 'A special moment to empower students from Tier 2 & 3 to think out of the box. Focused to develop critical thinking.' },
  { src: '/events/e3.jpeg', title: 'Weekend for wellness. A unique initiative taken to uplift health and well being for students in nature.' },
  { src: '/events/e4.jpeg', title: 'Nirvaha featured as one of the Social impact startup at IMPULSE 2025' },
  { src: '/events/e5.jpeg', title: 'Signed an MoU with the AI Research Centre, Woxsen University to collaborate on research, academic dialogue, and thought leadership at the intersection of wellness, leadership, technology, and human performance.' },
];

const loopedItems = [...items, ...items];

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
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
        <div className="-mt-2 sm:-mt-4 lg:-mt-6 mb-8 text-center">
          <h2 className="heading-secondary heading-dark mb-3">
            Community Moments
          </h2>
          {/* <p className="text-lg sm:text-xl text-teal-700/90 mt-1 sm:mt-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Moments from our events and workshops
          </p> */}
        </div>

        <div className="relative mt-8 sm:mt-10 lg:mt-12 px-12 sm:px-16 md:px-20">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-teal-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-teal-700" />
          </button>

          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex gap-8 sm:gap-10 lg:gap-12 gallery-marquee"
                style={{ 
                  width: 'max-content',
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {loopedItems.map((it, idx) => (
                  <motion.div
                    key={`${it.title}-${idx}`}
                    variants={item}
                    onClick={() => setSelectedImage(it)}
                    className="group overflow-hidden rounded-3xl shadow-xl flex-none w-[85vw] sm:w-[55vw] lg:w-[42vw] cursor-pointer"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={it.src}
                        alt={it.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="text-white text-base sm:text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {it.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image Modal/Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                />
                <div className="text-center mt-4">
                  <h3 className="text-white text-xl sm:text-2xl font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .gallery-marquee {
          animation: gallery-marquee 40s linear infinite;
        }

        @keyframes gallery-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .gallery-marquee {
            animation-duration: 30s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .gallery-marquee {
            animation-duration: 35s;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CommunityGallery;
