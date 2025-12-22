import React, { useEffect, useState } from "react";
import './Services.css';
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const Services: React.FC = () => {
  // Seven service cards: 4 primary + 3 cycling extras
  const services = [
    {
      id: "zenchat",
      title: "ZenChat",
      subtitle: "Personalized AI Wellness Chatbot",
      summary:
        "Personalized AI Wellness Chatbot for emotional healing and mindfulness.",
      thumb: "/thumbnails/zenchat.jpg",
    },
    {
      id: "meditation",
      title: "Meditation",
      subtitle: "Guided Sessions",
      summary: "Guided sessions to restore inner balance and clarity.",
      thumb: "/thumbnails/meditation.jpg",
    },
    {
      id: "sound",
      title: "Sound Healing",
      subtitle: "Ancient Frequency Therapy",
      summary: "Ancient frequency-based therapy using traditional instruments.",
      thumb: "/thumbnails/sound.jpg",
    },
    {
      id: "personal",
      title: "Personalized Sessions",
      subtitle: "One-on-One Care",
      summary: "One-on-one sessions tailored to your mental and physical well-being.",
      thumb: "/thumbnails/personalized.jpg",
    },
    // Cycling extras
    { id: "retreats", title: "Retreats", subtitle: "Immersive Journeys", summary: "Soulful retreats to deepen your practice.", thumb: "/thumbnails/retreats.jpg" },
    { id: "workshops", title: "Workshops", subtitle: "Community Events", summary: "Live workshops and expert-led sessions.", thumb: "/thumbnails/workshops.jpg" },
    { id: "marketplace", title: "Marketplace", subtitle: "Care & Crafts", summary: "Curated spiritual wellness products.", thumb: "/thumbnails/marketplace.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = React.useRef<number | null>(null);

  const restartTimer = (delay = 4200) => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, delay);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    setIndex((_) => {
      const next = (i + services.length) % services.length;
      return next;
    });
    // restart timer so manual navigation gives user time
    restartTimer();
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Set video playback rate when component mounts
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Even slower and more peaceful
    }
  }, []);

  // Generate random positions for symbols
  const symbols = React.useMemo(() => {
    const items = [];
    // Generate 12 symbols (6 Om and 6 Swastik)
    for (let i = 0; i < 12; i++) {
      const isOm = i % 2 === 0;
      items.push({
        id: i,
        type: isOm ? 'om' : 'swastik',
        top: `${Math.random() * 80 + 10}%`, // 10-90%
        left: `${Math.random() * 80 + 10}%`, // 10-90%
        rotation: Math.random() * 360,
        size: Math.random() * 20 + 30, // 30-50px
        delay: Math.random() * 5, // 0-5s delay for animation
      });
    }
    return items;
  }, []);

  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-28">
      {/* Enhanced slow-moving video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30 scale-125 brightness-125 blur-md transition-all duration-[2000ms]"
        >
          <source src="/slow_cloud.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8EE]/95 via-[#FFF6E5]/95 to-white/95"></div>
        
        {/* Floating Om and Swastik symbols */}
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            className="absolute pointer-events-none opacity-[0.15] mix-blend-overlay symbol-float"
            data-top={symbol.top}
            data-left={symbol.left}
            data-rotate={`${symbol.rotation}deg`}
            data-delay={`${symbol.delay}s`}
          >
            {symbol.type === 'om' ? (
              <svg width={symbol.size} height={symbol.size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z" fill="currentColor"/>
                <path d="M60 35C60 42.7319 53.7319 49 46 49C38.2681 49 32 42.7319 32 35C32 27.2681 38.2681 21 46 21C53.7319 21 60 27.2681 60 35ZM40 35C40 38.3137 42.6863 41 46 41C49.3137 41 52 38.3137 52 35C52 31.6863 49.3137 29 46 29C42.6863 29 40 31.6863 40 35Z" fill="currentColor"/>
                <path d="M46 55C53.1797 55 59 60.8203 59 68C59 75.1797 53.1797 81 46 81C38.8203 81 33 75.1797 33 68C33 60.8203 38.8203 55 46 55ZM46 63C43.2386 63 41 65.2386 41 68C41 70.7614 43.2386 73 46 73C48.7614 73 51 70.7614 51 68C51 65.2386 48.7614 63 46 63Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width={symbol.size} height={symbol.size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15H65V35H85V65H65V85H35V65H15V35H35V15Z" fill="currentColor"/>
                <path d="M45 25H55V35H65V45H55V55H45V45H35V35H45V25Z" fill="currentColor"/>
              </svg>
            )}
          </div>
        ))}
      </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-block border-2 border-emerald-500/80 rounded-2xl px-6 py-2 mb-3">
            <div className="text-emerald-600 font-semibold tracking-wide">SERVICES</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937]">Holistic Wellness Offerings</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">Calm, ancient-rooted services to support your spiritual and emotional wellbeing.</p>
        </motion.div>

        {/* Floating card viewport */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={services[index].id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto w-full max-w-7xl bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-6 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-50/40 opacity-40 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-3/4 rounded-2xl overflow-hidden shadow-lg bg-slate-50 relative">
                  {/* video thumbnail placeholder */}
                  <div className="relative aspect-video bg-gray-100">
                    {/* decorative golden chakra behind the video - subtle and animated */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="w-72 h-72 opacity-30 text-amber-400 animate-spin-slow mix-blend-screen" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="30" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="1.5" />
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 360) / 12;
                          const x1 = 50 + 28 * Math.cos((angle * Math.PI) / 180);
                          const y1 = 50 + 28 * Math.sin((angle * Math.PI) / 180);
                          const x2 = 50 + 36 * Math.cos((angle * Math.PI) / 180);
                          const y2 = 50 + 36 * Math.sin((angle * Math.PI) / 180);
                          return (
                            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(212,175,55,0.95)" strokeWidth="1" strokeLinecap="round" />
                          );
                        })}
                      </svg>
                    </div>
                    <img src={services[index].thumb} alt={services[index].title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent z-20" />
                    <div className="absolute bottom-3 right-3 z-30">
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-200/80 to-white px-3 py-2 rounded-full shadow hover:shadow-lg transition-all">
                        <Play className="h-4 w-4 text-amber-600" />
                        <span className="text-sm text-amber-700">Play</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <div className="text-sm text-amber-600 font-semibold mb-2">{services[index].subtitle}</div>
                  <h3 className="text-2xl font-bold text-[#0b1220] mb-3">{services[index].title}</h3>
                  <p className="text-slate-600 mb-6">{services[index].summary}</p>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-200 to-white text-[#0b1220] font-semibold shadow-md hover:shadow-amber-300/40 transition-all">Explore</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Side arrows overlaying the floating window for quick manual navigation */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between px-6 pointer-events-none">
            <button aria-label="Previous" onClick={prev} className="pointer-events-auto p-2 rounded-full bg-white/95 shadow hover:scale-105 transition-transform">
              <ChevronLeft className="w-5 h-5 text-[#0b1220]" />
            </button>
            <button aria-label="Next" onClick={next} className="pointer-events-auto p-2 rounded-full bg-white/95 shadow hover:scale-105 transition-transform">
              <ChevronRight className="w-5 h-5 text-[#0b1220]" />
            </button>
          </div>

          {/* small indicators centered below the window (kept accessible) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {services.map((s, i) => (
              <button key={s.id} onClick={() => goTo(i)} aria-label={s.title}
                className={`w-10 h-1 rounded-full ${i === index ? 'bg-amber-400' : 'bg-amber-100/60'} transition-all`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
