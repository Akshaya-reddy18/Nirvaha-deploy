// Signup.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  
  // Wellness-themed quotes with images
  const wellnessQuotes = [
    { 
      text: "Wellness is not a destination, it is a way of life.", 
      author: "Ancient Wisdom",
      image: "/foun/fo1.webp"
    },
    { 
      text: "Your body is a temple, but only if you treat it as one.", 
      author: "Astrid Alauda",
      image: "/foun/fo2.webp"
    },
    { 
      text: "Take care of your body. It's the only place you have to live.", 
      author: "Jim Rohn",
      image: "/foun/fo3.webp"
    },
    { 
      text: "Peace comes from within. Do not seek it without.", 
      author: "Buddha",
      image: "/foun/fo4.webp"
    },
    { 
      text: "The greatest wealth is health.", 
      author: "Virgil",
      image: "/foun/fo2.webp"
    },
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % wellnessQuotes.length);
    }, 3000);
    return () => clearInterval(id);
  }, [wellnessQuotes.length]);

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: "user",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Registration failed");
      }

      alert("Account created successfully! Please login.");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Error creating account");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof SignupData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen relative flex overflow-x-hidden bg-gradient-to-br from-white via-emerald-100 to-teal-200">
      
      {/* Left Section - Wellness Quotes Carousel (50% width on desktop, hidden on mobile/tablet) */}
      <div className="hidden lg:flex lg:w-[50%] relative overflow-hidden h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
        {/* Quote Container */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-12 w-full">
          {/* Rotating Quote with Message Border */}
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-lg w-full"
          >
            {/* Message Border Frame */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-300">
              {/* Decorative Quote Icon */}
              <svg className="w-12 h-12 text-emerald-200 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl font-semibold text-teal-800 mb-4 leading-relaxed text-center">
                "{wellnessQuotes[currentQuoteIndex].text}"
              </p>

              {/* Author */}
              <p className="text-base text-teal-600 italic text-center mb-6">
                — {wellnessQuotes[currentQuoteIndex].author}
              </p>

              {/* Quote Image in Circular Frame */}
              <motion.div
                key={`image-${currentQuoteIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-emerald-300 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Circular Image */}
                  <img
                    src={wellnessQuotes[currentQuoteIndex].image}
                    alt={`${wellnessQuotes[currentQuoteIndex].author} quote`}
                    className="relative w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-emerald-400"
                  />
                </div>
              </motion.div>

              {/* Quote Indicators */}
              <div className="flex justify-center gap-2">
                {wellnessQuotes.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentQuoteIndex
                        ? "bg-emerald-500 w-8"
                        : "bg-emerald-200 w-2"
                    }`}
                    animate={{
                      scale: i === currentQuoteIndex ? 1 : 0.8,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Signup Form (65% width on desktop, 100% on mobile/tablet) */}
      <motion.div
        className="w-full lg:w-[65%] flex items-center justify-center p-6 md:p-12 relative z-10 bg-gradient-to-br from-white/90 via-emerald-50/90 to-teal-50/90 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-gray-300">
              Sign up to begin your spiritual wellness journey
            </p>
          </motion.div>
          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border border-emerald-300/80 bg-white text-black placeholder:text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                  }`}
                  required
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border border-emerald-300/80 bg-white text-black placeholder:text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                  }`}
                  required
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border border-emerald-300/80 bg-white text-black placeholder:text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border border-emerald-300/80 bg-white text-black placeholder:text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 text-base font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>Create Account</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Login Link */}
          <motion.div
            className="text-center mt-6"
            variants={itemVariants}
          >
            <p className="text-gray-300 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors hover:underline"
              >
                Login here
              </button>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
