import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Shield, Star, Zap } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const ConcernsWeAddress = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Parallax effect for floating elements
    const handleMouseMove = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const floaters = sectionRef.current.querySelectorAll('.floater');
      floaters.forEach((floater) => {
        const speed = floater.dataset.speed || 0.05;
        floater.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoSliding) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % concerns.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const concerns = [
    {
      id: 1,
      title: "Anxiety & Stress",
      description: "Find peace through guided mindfulness and modern healing techniques, transforming anxiety into inner strength.",
      expandedDescription: "Our AI-guided sessions combine mindfulness practices with personalized coping strategies to help you navigate daily stressors and build lasting resilience.",
      icon: Shield,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50",
      spiritualElement: "🕉️"
    },
    {
      id: 2,
      title: "Self-Love & Healing",
      description: "Embrace your inner essence with compassionate community support to rebuild self-worth.",
      expandedDescription: "Join supportive circles where AI-facilitated discussions and reflective exercises foster deep self-acceptance and emotional healing.",
      icon: Heart,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      spiritualElement: "🪷"
    },
    {
      id: 3,
      title: "Spiritual Growth",
      description: "Awaken your inner light, transforming challenges into wisdom and discovering your true purpose.",
      expandedDescription: "Explore guided meditations and philosophical insights powered by AI to accelerate your spiritual journey and uncover profound personal truths.",
      icon: Zap,
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-50",
      spiritualElement: "✨"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % concerns.length);
    setIsAutoSliding(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + concerns.length) % concerns.length);
    setIsAutoSliding(false);
  };

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Custom SVG for mandala-like glyph
  const MandalaGlyph = () => (
    <svg
      className="h-6 w-6 text-[var(--primary-color)] animate-spin-slow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
      <path d="M12 6a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3m15 0h-3" />
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0F0F] py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ '--primary-color': '#00FFC6', '--secondary-color': '#1ED5A6' } as React.CSSProperties}
    >
      {/* Floating Elements with Parallax */}
      <div className="absolute inset-0 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <MandalaGlyph />
            <span className="text-[var(--primary-color)] font-medium tracking-wider text-sm uppercase">
              Your Healing Journey
            </span>
            <MandalaGlyph />
          </div>
          <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent leading-tight tracking-tight">
            Paths to Inner Peace
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore healing paths to nurture mind, body, and soul – gently and simply.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Interactive Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {concerns.map((concern, index) => {
              const IconComponent = concern.icon;
              const isExpanded = expandedCard === concern.id;
              return (
                <div
                  key={concern.id}
                  onClick={() => handleCardClick(concern.id)}
                  className={`relative bg-[#101414] rounded-3xl p-6 lg:p-8 cursor-pointer
                    transition-all duration-500 ease-in-out will-change-transform
                    hover:shadow-xl hover:scale-[1.02] hover:border-[var(--primary-color)]/30 border border-[#00FFC6]/10
                    ${isExpanded ? 'row-span-2 shadow-2xl scale-[1.03] z-10' : ''}
                    group overflow-hidden`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(concern.id)}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={`Learn more about ${concern.title}`}
                >
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>

                  {/* Lotus Element */}
                  <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {concern.spiritualElement}
                  </div>

                  <div className="flex justify-center mb-6 relative z-10">
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${concern.color}
                        flex items-center justify-center shadow-md group-hover:shadow-lg
                        transition-all duration-300 group-hover:scale-105`}
                    >
                      <IconComponent size={32} className="text-white group-hover:animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 text-center group-hover:text-[var(--primary-color)] transition-colors duration-300 font-title">
                    {concern.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-center text-base lg:text-lg transition-all duration-300">
                    {isExpanded ? concern.expandedDescription : concern.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-6 flex justify-center">
                      <button
                        className="px-6 py-2 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full font-medium hover:bg-[var(--primary-color)]/20 hover:shadow-md transition-all duration-300"
                      >
                        Explore Sessions
                      </button>
                    </div>
                  )}

                  {/* Decorative Lotus Glyphs */}
                  <div className="flex justify-center space-x-2 mt-4 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    <Star className="h-4 w-4 text-[#00FFC6] opacity-60" />
                    <Star className="h-4 w-4 text-[#1ED5A6] opacity-80" />
                    <Star className="h-4 w-4 text-[#00FFC6] opacity-60" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View - Interactive Carousel */}
          <div
            className="md:hidden"
            {...handlers}
            onMouseEnter={() => setIsAutoSliding(false)}
            onMouseLeave={() => setIsAutoSliding(true)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {concerns.map((concern) => {
                  const IconComponent = concern.icon;
                  return (
                    <div key={concern.id} className="w-full flex-shrink-0 px-4 py-6">
                      <div
                        className={`bg-[#101414] rounded-2xl p-6 text-center space-y-4 shadow-md border border-[#00FFC6]/10`}
                      >
                        <div className="flex justify-center">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center shadow-md`}
                          >
                            <IconComponent size={28} className="text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white font-title">{concern.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-base">{concern.description}</p>
                        <div className="flex justify-center space-x-2 opacity-70">
                          <span className="text-sm text-[var(--primary-color)]"><Star></Star></span>
                          <span className="text-sm text-[var(--primary-color)]"></span>
                          <span className="text-sm text-[var(--primary-color)]">🪷</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 active:scale-95"
                aria-label="Previous concern"
              >
                <ChevronLeft size={20} className="text-[var(--primary-color)]" />
              </button>
              <div className="flex space-x-2">
                {concerns.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-[var(--primary-color)] scale-125 shadow'
                        : 'bg-gray-200 hover:bg-[var(--primary-color)]/50'
                    }`}
                    aria-label={`Go to concern ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 active:scale-95"
                aria-label="Next concern"
              >
                <ChevronRight size={20} className="text-[var(--primary-color)]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        :root {
          --primary-color: #00FFC6;
          --secondary-color: #1ED5A6;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .group:hover .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
        .will-change-transform {
          will-change: transform, box-shadow, border-color;
        }
      `}</style>
    </section>
  );
};

export default ConcernsWeAddress;