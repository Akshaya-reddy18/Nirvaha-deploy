import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UsersRound,
  MessageCircleHeart,
  CalendarDays,
  Globe2,
  ArrowRight,
  Heart,
  BookOpen,
  Target,
} from 'lucide-react';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const Community = () => {
  const [showModalIdx, setShowModalIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  const events: Array<{
    title: string;
    date: string;
    time: string;
    participants: number;
    type: string;
    location: string;
    description: string;
  }> = [];

  // Unified emerald-teal gradient
  const themeGradient = "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400";

  return (
    <section id="community" className="community-section-bg min-h-[80vh] px-4 py-16 flex items-center relative overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 fade-up relative z-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h2 className="heading-secondary text-center text-teal-800 mb-5">
            Join Our Healing{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Community
            </span>
          </h2>
          <p className="subheading text-center text-teal-700 max-w-3xl mx-auto">
            Connect with like-minded individuals, participate in healing circles, and grow together.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12"
        >
          {[
            { icon: UsersRound, number: '1,000+', label: 'Souls Growing Together' },
            { icon: MessageCircleHeart, number: '50,000+', label: 'Moments of Care Shared' },
            { icon: CalendarDays, number: '200+', label: 'Guided Healing Sessions' },
            { icon: Globe2, number: '2+', label: 'Across 2+ Countries Worldwide' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="p-8 text-center bg-white rounded-3xl shadow hover:shadow-emerald-200 transition-transform hover:-translate-y-1.5 hover:shadow-lg border border-emerald-100"
            >
              <div className={`w-12 h-12 mx-auto mb-4 ${themeGradient} rounded-[14px] flex items-center justify-center shadow-sm ring-1 ring-white/20`}>
                <stat.icon className="text-white w-6 h-6" strokeWidth={2.5} />
              </div>
              <p className="text-2xl font-bold text-teal-900">{stat.number}</p>
              <p className="text-teal-700">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Events + Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >


         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Community;
