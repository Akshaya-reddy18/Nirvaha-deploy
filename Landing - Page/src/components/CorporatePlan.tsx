import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  Sparkles, Building2, Users, Shield, CheckCircle, Star, ArrowRight, 
  Heart, Brain, Award, Globe, CreditCard, TrendingUp, Send
} from 'lucide-react';
import { BACKEND_CONFIG } from '../config/backend';

const CorporatePlan = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    requirements: '',
    timeline: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare the data for the backend
      const enquiryData = {
        type: 'corporate',
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        companySize: formData.companySize,
        industry: formData.industry,
        requirements: formData.requirements,
        timeline: formData.timeline,
        budget: formData.budget,
        subject: 'Corporate Wellness Plan Enquiry',
        message: `Corporate enquiry from ${formData.companyName}. Requirements: ${formData.requirements}. Timeline: ${formData.timeline}. Budget: ${formData.budget}.`
      };

      // Send to backend
      const response = await axios.post<{ success: boolean; error?: string }>(`${BACKEND_CONFIG.API_BASE_URL}/api/enquiry`, enquiryData);
      
      if (response.data.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          companySize: '',
          industry: '',
          requirements: '',
          timeline: '',
          budget: ''
        });
      } else {
        setSubmitError('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setSubmitError('Failed to submit enquiry. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pricingPlans = [
    {
      name: "Starter Corporate",
      price: "₹2,50,000",
      period: "per year",
      description: "Perfect for small to medium enterprises",
      features: [
        "Up to 100 employees",
        "Basic wellness assessments",
        "Monthly group sessions",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false,
      color: "emerald"
    },
    {
      name: "Professional Corporate",
      price: "₹5,00,000",
      period: "per year",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 employees",
        "Advanced wellness programs",
        "Weekly group + individual sessions",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom wellness challenges",
        "Manager training sessions"
      ],
      popular: true,
      color: "teal"
    },
    {
      name: "Enterprise Corporate",
      price: "₹10,00,000",
      period: "per year",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited employees",
        "Comprehensive wellness ecosystem",
        "Daily sessions & 24/7 support",
        "Dedicated account manager",
        "Custom integrations",
        "Executive coaching",
        "Crisis intervention support",
        "Quarterly wellness reports"
      ],
      popular: false,
      color: "cyan"
    }
  ];

  const collaborations = [
    {
      name: "TechCorp Solutions",
      logo: "🏢",
      industry: "Technology",
      employees: "500+",
      testimonial: "Nirvaha transformed our workplace culture. Employee satisfaction increased by 40% and productivity by 25%.",
      results: ["40% increase in satisfaction", "25% productivity boost", "60% reduction in stress-related leaves"]
    },
    {
      name: "HealthFirst Pharmaceuticals",
      logo: "💊",
      industry: "Healthcare",
      employees: "1000+",
      testimonial: "The comprehensive wellness program helped our healthcare workers manage stress and maintain peak performance.",
      results: ["35% reduction in burnout", "50% improvement in work-life balance", "30% decrease in turnover"]
    },
    {
      name: "FinanceFlow Bank",
      logo: "🏦",
      industry: "Banking & Finance",
      employees: "2000+",
      testimonial: "Nirvaha's corporate program provided our high-pressure environment with the perfect stress management solution.",
      results: ["45% stress reduction", "20% increase in focus", "55% improvement in team collaboration"]
    },
    {
      name: "EduTech Innovations",
      logo: "🎓",
      industry: "Education Technology",
      employees: "300+",
      testimonial: "Our remote team found perfect balance through Nirvaha's digital wellness programs and virtual sessions.",
      results: ["50% better remote work satisfaction", "40% increase in creativity", "35% reduction in screen fatigue"]
    }
  ];

  const offerings = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Health Assessments",
      description: "Comprehensive psychological evaluations and wellness screenings for all employees",
      benefits: ["Early intervention", "Personalized care plans", "Progress tracking"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Group Wellness Sessions",
      description: "Regular team-building and wellness workshops to foster positive workplace culture",
      benefits: ["Team bonding", "Stress reduction", "Skill development"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Crisis Intervention",
      description: "24/7 support system for employees facing mental health emergencies",
      benefits: ["Immediate support", "Professional guidance", "Confidential assistance"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Detailed reports on employee wellness metrics and program effectiveness",
      benefits: ["ROI tracking", "Data-driven insights", "Continuous improvement"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manager Training",
      description: "Specialized training for leaders to recognize and support employee mental health",
      benefits: ["Leadership skills", "Early detection", "Supportive management"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "Multi-language support and cultural sensitivity for diverse workforces",
      benefits: ["Inclusive approach", "Cultural awareness", "Global reach"]
    }
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
        
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="h-10 w-10 text-emerald-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Corporate Wellness
            </h1>
            <Sparkles className="h-10 w-10 text-cyan-500 animate-pulse" />
          </div>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
            Transform your workplace culture with our comprehensive corporate wellness programs. 
            Boost productivity, reduce stress, and create a thriving environment for your team.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-slate-700">50+ Companies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <Award className="w-5 h-5 text-teal-500" />
              <span className="font-semibold text-slate-700">95% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <TrendingUp className="w-5 h-5 text-cyan-500" />
              <span className="font-semibold text-slate-700">40% Productivity Boost</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { id: 'overview', label: 'Overview', icon: <Globe className="w-5 h-5" /> },
            { id: 'pricing', label: 'Pricing', icon: <CreditCard className="w-5 h-5" /> },
            { id: 'collaborations', label: 'Success Stories', icon: <Star className="w-5 h-5" /> },
            { id: 'enquiry', label: 'Get Started', icon: <Send className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-lg'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Offerings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                      {offering.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{offering.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workplace?</h2>
                <p className="text-xl mb-6 opacity-90">Join 50+ companies already benefiting from our corporate wellness programs</p>
                <button
                  onClick={() => setActiveTab('enquiry')}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    plan.popular 
                      ? 'border-teal-500 scale-105' 
                      : 'border-emerald-200/50'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                      <span className="text-slate-500 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-lg'
                        : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                    }`}
                  >
                    Choose Plan
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Flexible Payment Options</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-emerald-500" />
                  <span className="text-slate-700">Monthly or Annual billing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-teal-500" />
                  <span className="text-slate-700">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-cyan-500" />
                  <span className="text-slate-700">ROI tracking included</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'collaborations' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl">
                      {collab.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{collab.name}</h3>
                      <p className="text-slate-600">{collab.industry} • {collab.employees} employees</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-700 mb-6 italic">
                    "{collab.testimonial}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 mb-2">Key Results:</h4>
                    {collab.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'enquiry' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              {!submitted ? (
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-200/50">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Start Your Corporate Wellness Journey</h2>
                    <p className="text-slate-600">Fill out the form below and our team will contact you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Person *</label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company Size *</label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        >
                          <option value="">Select company size</option>
                          <option value="1-50">1-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Industry *</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        >
                          <option value="">Select industry</option>
                          <option value="Technology">Technology</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance & Banking</option>
                          <option value="Education">Education</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Retail">Retail</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (within 1 month)</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6+months">6+ months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        >
                          <option value="">Select budget range</option>
                          <option value="1-3lakhs">₹1-3 Lakhs</option>
                          <option value="3-5lakhs">₹3-5 Lakhs</option>
                          <option value="5-10lakhs">₹5-10 Lakhs</option>
                          <option value="10+lakhs">₹10+ Lakhs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Specific Requirements</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        placeholder="Tell us about your specific wellness needs, challenges, and goals..."
                      />
                    </div>

                    {/* Error Message Display */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">!</span>
                          </div>
                          <p className="text-red-700 font-medium">{submitError}</p>
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-200/50 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h2>
                  <p className="text-slate-600 mb-6">
                    Your corporate wellness enquiry has been submitted successfully! Our dedicated corporate team will review your requirements and contact you within 24 hours to discuss your organization's wellness needs and create a customized plan.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                    <h3 className="font-semibold text-emerald-800 mb-2">What happens next?</h3>
                    <ul className="text-emerald-700 text-sm space-y-1">
                      <li>• Our corporate wellness specialist will review your requirements</li>
                      <li>• We'll schedule a consultation call within 24 hours</li>
                      <li>• Customized wellness program proposal will be prepared</li>
                      <li>• Implementation timeline and pricing will be discussed</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError('');
                      }}
                      className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-200 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <button
                      onClick={() => setActiveTab('pricing')}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                    >
                      View Pricing Plans
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CorporatePlan;
