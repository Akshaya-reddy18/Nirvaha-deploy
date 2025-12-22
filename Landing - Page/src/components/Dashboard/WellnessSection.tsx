import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MessageCircle, 
  Users, 
  Music, 
  Heart 
} from 'lucide-react';

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

const WellnessSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardHover = (index: number, isHovering: boolean) => {
    const card = cardRefs.current[index];
    if (!card) return;

    if (isHovering) {
      card.style.transform = 'translateY(-12px) scale(1.03)';
      const icon = card.querySelector('.card-icon');
      if (icon) {
        (icon as HTMLElement).style.transform = 'rotate(360deg) scale(1.2)';
      }
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      const icon = card.querySelector('.card-icon');
      if (icon) {
        (icon as HTMLElement).style.transform = 'rotate(0deg) scale(1)';
      }
    }
  };

  return (
    <div className="p-8 md:p-12 relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
            <motion.div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
              style={{ transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              <Link to={card.path} className="block h-full">
                <div className="group relative h-full bg-gradient-to-br from-[#F5F2EE]/95 to-white/90 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-[#E6B21E]/30 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(230,178,30,0.3)] transition-all duration-500">
                  {/* Sacred Border Glow */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: `linear-gradient(135deg, ${card.glowColor}15, transparent, ${card.glowColor}15)`,
                         padding: '2px',
                       }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />
                  
                  {/* Soft Inner Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${card.glowColor}08, transparent 60%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`card-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-0.5 shadow-lg`}
                           style={{ transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
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
            </motion.div>
          );
        })}
      </div>

      {/* Subtle Sacred Energy Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6B21E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4D3062" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#00C9B1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M 0 50 Q 250 30, 500 50 T 1000 50" stroke="url(#energyGradient)" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M 0 150 Q 250 130, 500 150 T 1000 150" stroke="url(#energyGradient)" strokeWidth="2" fill="none" opacity="0.2" />
          <path d="M 0 250 Q 250 230, 500 250 T 1000 250" stroke="url(#energyGradient)" strokeWidth="2" fill="none" opacity="0.25" />
        </svg>
      </div>
    </div>
  );
};

export default WellnessSection;