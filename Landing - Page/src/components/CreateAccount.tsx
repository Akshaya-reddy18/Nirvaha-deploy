import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import StageRole2 from "./stages/StageRole2";
import StageRole3 from "./stages/StageRole3";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart, Shield, User, Mail, Lock, ArrowLeft } from "lucide-react";

interface FormData {
  [key: string]: string;
}

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  // Remove role selection for registration, always register as 'user'
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Always register as 'user'
      const dataToSend = { ...formData, role: "user" };
      await axios.post("https://nirvaha-backend.onrender.com/api/auth/register", dataToSend);
      alert("Account created successfully!");
      navigate("/");
    } catch (error: any) {
      alert(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          "Registration failed."
      );
    }
  };

  // Spiritual wellness images for background grid - matching Login theme
  const spiritualImages = [
    '/meditation.png',
    '/agarbathi.png',
    '/SpiritualJourneyKit.png',
    '/NirvahaJar.png',
    '/Book.png',
    '/bg_image.png',
    '/meditation.png',
    '/agarbathi.png',
    '/SpiritualJourneyKit.png',
    '/NirvahaJar.png',
    '/Book.png',
    '/bg_image.png',
    '/meditation.png',
    '/agarbathi.png',
    '/SpiritualJourneyKit.png',
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gray-900">
      {/* Blurred Spiritual Wellness Images Grid Background with Scrolling Animations */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full grid grid-cols-4 gap-3 p-3 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {spiritualImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-full h-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: Math.sin(index * 0.5) * 10,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 2,
            }}
            style={{
              filter: 'blur(2px)',
              transform: 'scale(1.1)',
            }}
            whileHover={{ scale: 1.15, filter: 'blur(1px)' }}
          >
            <img
              src={img}
              alt={`Spiritual wellness ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Overlay for better contrast */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />

      {/* Registration Modal Container - Matching Login Theme */}
      <div 
        className="relative z-10 w-full max-w-md mx-auto rounded-2xl p-8 sm:p-10 transition-all duration-300"
        style={{
          background: 'rgba(40, 40, 40, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h1 
            className="text-3xl font-semibold mb-2"
            style={{ color: 'rgba(255, 255, 255, 0.95)', fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            Create Account
          </h1>
          <p 
            className="text-sm mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Begin your spiritual wellness journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 w-full max-w-xs mx-auto">
          {["Details", "Password"].map((label, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  step >= index + 1
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "bg-gray-600 text-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs mt-2" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <StageRole2
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                setFormData={setFormData}
              />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <StageRole3
                formData={formData}
                handleChange={handleChange}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Separator */}
        <div className="text-center my-6">
          <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px' }}>OR</span>
        </div>

        {/* Back to Login Link */}
        <div className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm transition-all duration-300 hover:underline"
            style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, Poppins, sans-serif' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(143, 240, 210, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            Already have an account? Sign In
          </button>
        </div>
      </div>

      {/* Simple Footer - Matching Login Theme */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 px-6 py-4 text-center"
        style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '12px',
          fontFamily: 'Inter, Poppins, sans-serif',
        }}
      >
        <div className="flex items-center justify-center gap-4">
          <a 
            href="#" 
            className="hover:text-white transition-colors"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Privacy policy
          </a>
          <span>|</span>
          <a 
            href="#" 
            className="hover:text-white transition-colors"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Terms
          </a>
          <span>|</span>
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} (Local time)</span>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
