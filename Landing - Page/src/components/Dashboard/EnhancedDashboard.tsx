import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import Lenis from '@studio-freight/lenis';
import EnhancedHeader from './EnhancedHeader';
import EnhancedWellnessSection from './EnhancedWellnessSection';
import OTTSection from './OTTSection';
import GamificationSection from './GamificationSection';
import SpiritualBackground3D from './SpiritualBackground3D';

const EnhancedDashboard = () => {
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
      case 'Dashboard':
        return <EnhancedWellnessSection />;
      case 'Services':
        return <OTTSection />;
      case 'Profile':
        return <GamificationSection />;
      default:
        return <EnhancedWellnessSection />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Spiritual Background */}
      <SpiritualBackground3D />

      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#F5F2EE] via-[#FFFDF6] to-[#F5F2EE] -z-10" />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#E6B21E]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4D3062]/15 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#00C9B1]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
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
      <EnhancedHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={['Dashboard', 'Services', 'Profile']}
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

      {/* Floating Sacred Elements */}
      <div className="fixed bottom-8 right-8 pointer-events-none z-50">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E6B21E]/30 to-[#00C9B1]/30 backdrop-blur-xl border border-[#E6B21E]/40 flex items-center justify-center shadow-2xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4D3062] to-[#E6B21E]" />
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;
