import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import Lenis from '@studio-freight/lenis';
import Header from './Header';
import WellnessSection from './WellnessSection';
import OTTSection from './OTTSection';
import GamificationSection from './GamificationSection';
import SacredBackground from './SacredBackground';
import WaveBackground from './WaveBackground';

const SimpleDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const { user } = useAuth();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'Wellness':
        return <WellnessSection />;
      case 'OTT':
        return <OTTSection />;
      case 'Gamesk':
        return <GamificationSection />;
      default:
        return <WellnessSection />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Base Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#F5F2EE] via-[#FFFDF6] to-[#F5F2EE] -z-30" />
      
      {/* Animated Wave Background with GSAP */}
      <WaveBackground />
      
      {/* Sacred 3D Background */}
      <SacredBackground />

      {/* Spiritual Energy Background - Subtle Light Streaks */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft light streaks */}
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#E6B21E]/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#4D3062]/10 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-[#00C9B1]/10 to-transparent"
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scaleY: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Sacred Geometric Patterns */}
      <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sacred-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#4D3062" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#E6B21E" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#00C9B1" strokeWidth="0.5" />
              <path d="M 50 20 L 65 50 L 50 80 L 35 50 Z" fill="none" stroke="#4D3062" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-pattern)" />
        </svg>
      </div>

      {/* Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={['Wellness', 'OTT', 'Games']}
        username={user?.name || ''}
        email={user?.email || ''}
      />

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="relative z-10 pt-24 pb-12"
        >
          {renderActiveSection()}
        </motion.main>
      </AnimatePresence>


    </div>
  );
};

export default SimpleDashboard;
