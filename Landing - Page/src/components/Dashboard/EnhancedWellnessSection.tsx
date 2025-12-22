import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import anime from 'animejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  MessageCircle, 
  Users, 
  Music, 
  Heart 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const wellnessCards = [
  {
    id: 'meditation',
    title: 'Meditation',
    tagline: 'Find stillness within the storm.',
    path: '/meditation',
    icon: Sparkles,
    gradient: 'from-[#4D3062] to-[#E6B21E]',
    glowColor: '#E6B21E',
  },
  {
    id: 'zenchat',
    title: 'ZenChat',
    tagline: 'Your AI companion for mindful healing.',
    path: '/zenchat',
    icon: MessageCircle,
    gradient: 'from-[#00C9B1] to-[#4D3062]',
    glowColor: '#00C9B1',
  },
  {
    id: 'discussion-room',
    title: 'Discussion Room',
    tagline: 'Connect. Reflect. Grow together.',
    path: '/discussion-room',
    icon: Users,
    gradient: 'from-[#E6B21E] to-[#00C9B1]',
    glowColor: '#E6B21E',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    tagline: 'Rebalance your energy through ancient frequencies.',
    path: '/sound-healing',
    icon: Music,
    gradient: 'from-[#4D3062] to-[#00C9B1]',
    glowColor: '#4D3062',
  },
  {
    id: 'personalized-sessions',
    title: 'Personalized Sessions',
    tagline: 'Wellness tailored to your unique journey.',
    path: '/personalized-sessions',
    icon: Heart,
    gradient: 'from-[#E6B21E] to-[#4D3062]',
    glowColor: '#E6B21E',
  },
];

const EnhancedWellnessSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Staggered card animation with anime.js
      anime({
        targets: cardRefs.current,
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(150, { start: 200 }),
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
      });

      // GSAP ScrollTrigger for cards
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 80,
              opacity: 0,
              scale: 0.9,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }
  }, [inView, controls]);

  const handleCardHover = (index: number, isHovering: boolean) => {
    const card = cardRefs.current[index];
    if (!card) return;

    if (isHovering) {
      anime({
        targets: card,
        translateY: -12,
        scale: 1.03,
        duration: 400,
        easing: 'easeOutQuad',
      });

      // Animate icon
      const icon = card.querySelector('.card-icon');
      if (icon) {
        anime({
          targets: icon,
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          duration: 600,
          easing: 'easeOutElastic(1, .6)',
        });
      }
    } else {
      anime({
        targets: card,
        translateY: 0,
        scale: 1,
        duration: 400,
        easing: 'easeOutQuad',
      });
    }
  };

  return (
    <div ref={ref} className="p-8 md:p-12 relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D3062] via-[#E6B21E] to-[#00C9B1] mb-4">
          Sacred Wellness Services
        </h2>
        <p className="text-lg text-[#2B1E16]/70 max-w-2xl mx-auto">
          Embark on your spiritual journey with our ancient wisdom-powered wellness experiences
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {wellnessCards.map((card, index) => {
          const Icon = card.icon;
          
          return (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
              className="opacity-0"
            >
              <Link to={card.path} className="block h-full">
                <div className="group relative h-full bg-gradient-to-br from-white/80 to-[#F5F2EE]/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-[#E6B21E]/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${card.glowColor}20, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`card-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-[#F5F2EE] flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#4D3062]" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#2B1E16] mb-3 group-hover:text-[#4D3062] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[#2B1E16]/70 text-base leading-relaxed mb-6 flex-grow">
                      {card.tagline}
                    </p>

                    {/* Arrow Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#4D3062] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore →
                      </span>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <svg
                          className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#E6B21E]/10 to-[#00C9B1]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#4D3062]/10 to-[#E6B21E]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Border Glow Animation */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.gradient} opacity-20 blur-sm`} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#E6B21E] to-[#00C9B1]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedWellnessSection;
