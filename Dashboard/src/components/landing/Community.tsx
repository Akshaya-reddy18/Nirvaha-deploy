import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageCircle, Globe, ArrowRight, Heart, BookOpen, Target } from 'lucide-react';

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
      {/* Floating Spiritual Symbols Background Layer */}
      <div className="about-us-symbols-layer">
        <span className="floating-symbol floating-om-1">ॐ</span>
        <span className="floating-symbol floating-om-2">ॐ</span>
        <span className="floating-symbol floating-om-3">ॐ</span>
        <span className="floating-symbol floating-swastik-1">卐</span>
        <span className="floating-symbol floating-swastik-2">卐</span>
        <span className="floating-symbol floating-swastik-3">卐</span>
        <span className="floating-symbol floating-om-4">ॐ</span>
        <span className="floating-symbol floating-swastik-4">卐</span>
      </div>
      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl w-[85%] mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 lg:p-20 backdrop-blur-xl border border-emerald-100 fade-up relative z-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-slate-900 mb-5">
            Join Our Healing{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Community
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
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
            { icon: Users, number: '1,000+', label: 'Active Members' },
            { icon: MessageCircle, number: '50,000+', label: 'Support Messages' },
            { icon: Calendar, number: '200+', label: 'Monthly Events' },
            { icon: Globe, number: '2+', label: 'Countries' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="p-8 text-center bg-white rounded-3xl shadow hover:shadow-emerald-200 transition-transform hover:-translate-y-1 border border-emerald-100"
            >
              <div className={`w-12 h-12 mx-auto mb-4 ${themeGradient} rounded-xl flex items-center justify-center`}>
                <stat.icon className="text-white w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.number}</p>
              <p className="text-slate-600">{stat.label}</p>
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
