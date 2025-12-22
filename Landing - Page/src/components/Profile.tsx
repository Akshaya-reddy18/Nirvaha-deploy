import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, User, Heart, Leaf, Star, Moon, Shield, CheckCircle, ArrowRight } from "lucide-react";

const GENDER_OPTIONS = ["Male", "Female", "Non-Binary", "Prefer not to say"];
const OCCUPATION_OPTIONS = [
  "Student",
  "Working Professional",
  "Homemaker",
  "Retired",
  "Other"
];

const labelClass = "font-bold text-lg text-slate-800 mb-1 block";
const inputClass = "w-full rounded-xl border-2 border-emerald-300 p-4 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-lg font-medium text-slate-800 placeholder-slate-400";
const valueClass = "text-lg text-slate-800 font-semibold";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [editing, setEditing] = useState(false);
  const [loading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Step 1: Basic Info
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationOther, setOccupationOther] = useState("");

  // Step 2-5 state (placeholders for now)
  const [emotionalWellness, setEmotionalWellness] = useState("");
  const [wellnessPreferences, setWellnessPreferences] = useState("");
  const [therapyDetails, setTherapyDetails] = useState("");
  const [marketplacePreferences, setMarketplacePreferences] = useState("");

  // TODO: Add state for all other steps

  // Load user details from localStorage
  useEffect(() => {
    if (!user) return;
    
    // Load saved profile data from localStorage
    const savedProfile = localStorage.getItem(`profile_${user.id}`);
    if (savedProfile) {
      try {
        const data = JSON.parse(savedProfile);
        setPhone(data.phone || "");
        setAge(data.age || "");
        setGender(data.gender || "");
        setLocation(data.location || "");
        setOccupation(data.occupation || "");
        setOccupationOther(data.occupationOther || "");
        setEmotionalWellness(data.emotionalWellness || "");
        setWellnessPreferences(data.wellnessPreferences || "");
        setTherapyDetails(data.therapyDetails || "");
        setMarketplacePreferences(data.marketplacePreferences || "");
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleEdit = () => {
    setEditing(true);
    setError("");
    setSuccess("");
    setStep(1);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      if (user) {
        // Save profile data to localStorage
        const profileData = {
          email: user.email,
          name,
          phone,
          age,
          gender,
          location,
          occupation,
          occupationOther,
          emotionalWellness,
          wellnessPreferences,
          therapyDetails,
          marketplacePreferences
        };
        
        localStorage.setItem(`profile_${user.id}`, JSON.stringify(profileData));
        
        // Note: You would need to add an updateUser method to AuthContext to persist name changes
        
        setSuccess("Profile updated successfully!");
        setEditing(false);
      }
    } catch (error) {
      setError("Failed to save profile. Please try again.");
      console.error("Save error:", error);
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-300/25 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-teal-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-md border border-emerald-200/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-emerald-500" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Divine Access Required</h2>
            </div>
            <p className="text-slate-600 mb-6 text-center">Please sign in to access your spiritual profile</p>
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              Go to Divine Login
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/30 py-20 lg:py-32">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-md border border-emerald-200/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
              <div className="text-lg text-slate-700">Loading divine profile...</div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Stepper UI with spiritual themes
  const steps = [
    { title: "Divine Identity", icon: <User className="w-5 h-5" />, color: "emerald" },
    { title: "Spiritual Wellness", icon: <Heart className="w-5 h-5" />, color: "teal" },
    { title: "Mindful Preferences", icon: <Leaf className="w-5 h-5" />, color: "cyan" },
    { title: "Sacred Journey", icon: <Star className="w-5 h-5" />, color: "emerald" },
    { title: "Cosmic Connections", icon: <Moon className="w-5 h-5" />, color: "teal" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/30 py-20 lg:py-32">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-300/25 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-teal-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-300/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-emerald-200/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-teal-200/25 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Mystical Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent transform -skew-y-1"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-16 flex flex-col items-center w-full max-w-6xl mx-auto border border-emerald-200/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Divine Profile
              </h2>
              <Sparkles className="h-8 w-8 text-cyan-500 animate-pulse" />
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your spiritual journey and divine essence captured in one sacred space
            </p>
          </motion.div>
          {/* Spiritual Stepper */}
          {editing && (
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center mb-8 w-full gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {steps.map((stepItem, idx) => (
                <div key={stepItem.title} className="flex items-center">
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
                    step === idx + 1 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white scale-110' 
                      : 'bg-white/80 text-slate-500 border-2 border-emerald-200'
                  }`}>
                    {step === idx + 1 ? stepItem.icon : idx + 1}
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <div className={`text-sm font-semibold ${step === idx + 1 ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {stepItem.title}
                    </div>
                  </div>
                  {idx < steps.length - 1 && <div className="w-8 h-1 bg-emerald-200 mx-2 hidden sm:block" />}
                </div>
              ))}
            </motion.div>
          )}
        <form onSubmit={handleSave} className="w-full flex flex-col gap-8">
          {/* Always show all details in view mode */}
          {!editing && (
            <>
              {/* Step 1: Divine Identity */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg mb-4 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Divine Identity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1"><label className={labelClass}>Full Name:</label><div className={valueClass}>{name}</div></div>
                  <div className="md:col-span-2"><label className={labelClass}>Email Address:</label><div className="w-full rounded-xl border-2 border-gray-300 p-4 bg-gray-100 text-lg font-medium text-gray-700 select-text cursor-not-allowed opacity-90">{user.email}</div></div>
                  <div className="md:col-span-1"><label className={labelClass}>Phone Number (optional):</label><div className={valueClass}>{phone || <span className="text-gray-400">-</span>}</div></div>
                  <div className="md:col-span-1"><label className={labelClass}>Age:</label><div className={valueClass}>{age || <span className="text-gray-400">-</span>}</div></div>
                  <div className="md:col-span-1"><label className={labelClass}>Gender:</label><div className={valueClass}>{gender || <span className="text-gray-400">-</span>}</div></div>
                  <div className="md:col-span-1"><label className={labelClass}>Location:</label><div className={valueClass}>{location || <span className="text-gray-400">-</span>}</div></div>
                  <div className="md:col-span-3"><label className={labelClass}>Occupation/Education Status:</label><div className={valueClass}>{occupation === "Other" ? occupationOther : occupation || <span className="text-gray-400">-</span>}</div></div>
                </div>
              </motion.div>
              {/* Step 2: Spiritual Wellness */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-lg mb-4 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Spiritual Wellness
                </h3>
                <div className="text-lg text-slate-800 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl border border-teal-100">
                  {emotionalWellness || <span className="text-slate-400 italic">Share your spiritual journey and wellness goals...</span>}
                </div>
              </motion.div>
              {/* Step 3: Mindful Preferences */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200/50 shadow-lg mb-4 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-700 flex items-center gap-2">
                  <Leaf className="w-6 h-6" />
                  Mindful Preferences
                </h3>
                <div className="text-lg text-slate-800 bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-xl border border-cyan-100">
                  {wellnessPreferences || <span className="text-slate-400 italic">Express your mindful preferences and interests...</span>}
                </div>
              </motion.div>
              {/* Step 4: Sacred Journey */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg mb-4 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Sacred Journey
                </h3>
                <div className="text-lg text-slate-800 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-xl border border-emerald-100">
                  {therapyDetails || <span className="text-slate-400 italic">Describe your sacred healing journey...</span>}
                </div>
              </motion.div>
              {/* Step 5: Cosmic Connections */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
                  <Moon className="w-6 h-6" />
                  Cosmic Connections
                </h3>
                <div className="text-lg text-slate-800 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl border border-teal-100">
                  {marketplacePreferences || <span className="text-slate-400 italic">Share your interests in divine marketplace and cosmic events...</span>}
                </div>
              </motion.div>
            </>
          )}
          {/* In edit mode, show only the current step's content in the slider */}
          {editing && step === 1 && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
                <User className="w-6 h-6" />
                Step 1: Divine Identity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <label className={labelClass}>Full Name:</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Email Address:</label>
                  <div className="w-full rounded-xl border-2 border-gray-300 p-4 bg-gray-100 text-lg font-medium text-gray-700 select-text cursor-not-allowed opacity-90">
                    {user.email}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className={labelClass}>Phone Number (optional):</label>
                  <input
                    type="tel"
                    className={inputClass}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={labelClass}>Age:</label>
                  <input
                    type="number"
                    min="0"
                    className={inputClass}
                    value={age}
                    onChange={e => setAge(e.target.value)}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={labelClass}>Gender:</label>
                  <select
                    className={inputClass}
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    {GENDER_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className={labelClass}>Location:</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </div>
                <div className="md:col-span-3">
                  <label className={labelClass}>Occupation/Education Status:</label>
                  <div className="flex flex-wrap gap-4">
                    {OCCUPATION_OPTIONS.map((o) => (
                      <label key={o} className={`flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full border-2 transition text-lg font-semibold shadow-sm
                        ${occupation === o ? 'bg-gradient-to-r from-teal-500 to-purple-500 text-white border-teal-500 scale-105' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-teal-100'}
                      `} style={{ minWidth: '200px', justifyContent: 'center' }}>
                        <input
                          type="radio"
                          name="occupation"
                          value={o}
                          checked={occupation === o}
                          onChange={e => setOccupation(e.target.value)}
                          className="w-6 h-6 accent-teal-500 mr-2"
                        />
                        {o}
                      </label>
                    ))}
                    {occupation === "Other" && (
                      <input
                        type="text"
                        className={inputClass + ' mt-2'}
                        placeholder="Other..."
                        value={occupationOther}
                        onChange={e => setOccupationOther(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {editing && step === 2 && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Step 2: Spiritual Wellness
              </h3>
              <textarea
                className={inputClass}
                value={emotionalWellness}
                onChange={e => setEmotionalWellness(e.target.value)}
                placeholder="Share your spiritual journey, emotional wellness, and divine goals..."
                rows={5}
              />
            </motion.div>
          )}
          {editing && step === 3 && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-700 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                Step 3: Mindful Preferences
              </h3>
              <textarea
                className={inputClass}
                value={wellnessPreferences}
                onChange={e => setWellnessPreferences(e.target.value)}
                placeholder="Express your mindful preferences, spiritual interests, and divine activities..."
                rows={5}
              />
            </motion.div>
          )}
          {editing && step === 4 && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Step 4: Sacred Journey
              </h3>
              <textarea
                className={inputClass}
                value={therapyDetails}
                onChange={e => setTherapyDetails(e.target.value)}
                placeholder="Describe your sacred healing journey, spiritual practices, and divine experiences..."
                rows={5}
              />
            </motion.div>
          )}
          {editing && step === 5 && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
                <Moon className="w-6 h-6" />
                Step 5: Cosmic Connections
              </h3>
              <textarea
                className={inputClass}
                value={marketplacePreferences}
                onChange={e => setMarketplacePreferences(e.target.value)}
                placeholder="Share your interests in divine marketplace offerings and cosmic events..."
                rows={5}
              />
            </motion.div>
          )}
          {/* Spiritual Actions */}
          {error && (
            <motion.div
              className="text-red-500 text-base text-center bg-red-50 p-3 rounded-xl border border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
          {success && (
            <motion.div
              className="text-emerald-600 text-base text-center bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center justify-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5" />
              {success}
            </motion.div>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {editing ? (
              <>
                {step > 1 && (
                  <button
                    type="button"
                    className="bg-white/80 text-slate-700 rounded-full py-3 px-6 font-semibold shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 flex items-center gap-2"
                    onClick={() => setStep(step - 1)}
                    disabled={saving}
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Back
                  </button>
                )}
                {step < steps.length ? (
                  <button
                    type="button"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full py-3 px-6 font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    onClick={() => setStep(step + 1)}
                    disabled={saving}
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : null}
                {step === steps.length && (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full py-3 px-6 font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    disabled={saving}
                  >
                    <Sparkles className="w-4 h-4" />
                    {saving ? "Saving..." : "Save Divine Profile"}
                  </button>
                )}
                <button
                  type="button"
                  className="bg-white/80 text-slate-700 rounded-full py-3 px-6 font-semibold shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200"
                  onClick={() => { setEditing(false); setStep(1); }}
                  disabled={saving}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full py-3 px-6 font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  onClick={handleEdit}
                >
                  <User className="w-5 h-5" />
                  Edit Divine Profile
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full py-3 px-6 font-semibold shadow-lg hover:from-red-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Sacred Logout
                </button>
              </>
            )}
          </motion.div>
        </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile; 