import { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, Users, UserCheck, Star, Clock, Shield, MapPin, ExternalLink, ArrowRight, User, MessageSquare, Sparkles, X } from 'lucide-react';
import { BACKEND_CONFIG } from '../config/backend';


const PersonalizedSessions = () => {
  const [verifiedCompanions, setVerifiedCompanions] = useState<any[]>([]);
  const [showExpertsOnly, setShowExpertsOnly] = useState(false);
  
  // Registration form state
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    gender: 'male',
    specialization: '',
    availability: '',
    description: '',
    whatsapp: '',
    location: '',
    image: ''
  });
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    axios.get(`${BACKEND_CONFIG.API_BASE_URL}/api/companions`)
      .then(res => setVerifiedCompanions(res.data as any[]))
      .catch(() => setVerifiedCompanions([]));
  }, []);

  const handleExploreCompanions = () => {
    setShowExpertsOnly(true);
  };

  const handleBackToMain = () => {
    setShowExpertsOnly(false);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterLoading(true);
    setRegisterError('');
    
    try {
      await axios.post(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests`, registerForm);
      setRegisterSuccess(true);
      setRegisterForm({
        name: '',
        email: '',
        gender: 'male',
        specialization: '',
        availability: '',
        description: '',
        whatsapp: '',
        location: '',
        image: ''
      });
      setTimeout(() => {
        setShowRegisterModal(false);
        setRegisterSuccess(false);
      }, 2000);
    } catch (err: any) {
      setRegisterError(err.response?.data?.error || 'Failed to submit registration request. Please try again.');
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleRegisterFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  // If showing experts only, render just that section
  if (showExpertsOnly) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-12 pt-24 relative overflow-hidden">
        {/* Floating Spiritual Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/30 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBackToMain}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Back to Divine Menu
            </button>
          </div>

          {/* Verified Companions Section */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-emerald-200/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <Sparkles className="h-8 w-8 text-emerald-500" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Divine Spiritual Guides
                  </h2>
                  <Sparkles className="h-8 w-8 text-cyan-500" />
                </div>
                <p className="text-gray-600">Connect directly with divine spiritual companions via WhatsApp for divine support</p>
              </div>
              {/* Register as Companion Button */}
              <button
                onClick={() => setShowRegisterModal(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <User className="w-5 h-5" />
                Request to Register as Divine Guide
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {verifiedCompanions.map((companion) => (
                <div key={companion._id || companion.id} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between h-full">
                  <div className="flex flex-col mb-6">
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-3 relative inline-block">
                        {companion.image || '🧘‍♀️'}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{companion.name}</h3>
                      <p className="text-emerald-600 font-semibold mb-3">{companion.specialization || 'Divine Guide'}</p>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-emerald-500 fill-current" />
                        <span className="font-semibold text-emerald-600 text-sm">{companion.rating?.toFixed(1) || '4.9'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{companion.location || 'Divine Hyderabad, India'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{companion.availability || 'Mon-Fri, Divine Hours'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">Consultation: {companion.consultation || 'Divine Gift'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{companion.languages?.join(', ') || 'English, Hindi'}</span>
                    </div>
                  </div>
                  <div className="flex-1 mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{companion.description || 'Specialist in divine anxiety healing, divine depression transformation, and spiritual stress alchemy'}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {companion.whatsapp && (
                      <a
                        href={`https://wa.me/${companion.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2.5 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.63 1.457 5.19L2 22l4.93-1.43A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.01 15.19c-2.13-.01-4.13-.7-5.81-1.91l-.41-.27.62-2.18c.09-.32.36-.55.7-.55.13 0 .26.04.37.12l1.47 1.01c.22.15.51.13.7-.05l.7-.7c.18-.18.21-.47.07-.68l-1.01-1.47a.5.5 0 0 1 .12-.37c.18-.18.47-.21.68-.07l2.18.62c.32.09.55.36.55.7 0 .13-.04.26-.12.37l-1.01 1.47c-.15.22-.13.51.05.7l.7.7c.18.18.47.21.68.07l1.47-1.01c.22-.15.51-.13.7.05l.7.7c.18.18.21.47.07.68l-1.01 1.47a.5.5 0 0 1-.37.12c-.13 0-.26-.04-.37-.12l-2.18-.62c-.32-.09-.55-.36-.55-.7 0-.13.04-.26.12-.37l1.01-1.47c.15-.22.13-.51-.05-.7l-.7-.7c-.18-.18-.47-.21-.68-.07l-1.47 1.01c-.22.15-.51.13-.7-.05l-.7-.7c-.18-.18-.21-.47-.07-.68l1.01-1.47a.5.5 0 0 1 .37-.12c.13 0 .26.04.37.12l2.18.62c.32.09.55.36.55.7 0 .13-.04.26-.12.37l-1.01 1.47c-.15.22-.13.51.05.7l.7.7c.18.18.47.21.68.07l1.47-1.01c.22-.15.51-.13.7.05l.7.7c.18.18.21.47.07.68l-1.01 1.47a.5.5 0 0 1-.37.12z"/></svg>
                        Divine WhatsApp Chat
                      </a>
                    )}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-emerald-50 text-emerald-700 py-2.5 rounded-lg font-medium hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 border border-emerald-200">
                        📞 Call
                      </button>
                      <button className="flex-1 bg-blue-50 text-blue-700 py-2.5 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 border border-blue-200">
                        ✉️ Email
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Main component view
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-12 pt-24 relative overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/30 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="h-12 w-12 text-emerald-500" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Divine Personalized Sessions
            </h1>
            <Sparkles className="h-12 w-12 text-cyan-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose between divine therapy sessions or divine companion support. 
            Get personalized spiritual care tailored to your soul's healing journey.
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Therapy Sessions - Coming Soon */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-emerald-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
              Divine Coming Soon
            </div>
            
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <UserCheck className="w-12 h-12 text-white" />
                <div className="absolute -inset-3 bg-emerald-100/50 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3">Divine Therapy Sessions</h3>
              <p className="text-gray-600 text-lg">One-on-one divine sessions with certified spiritual wellness professionals</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Licensed spiritual psychologists and divine therapists</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Divine evidence-based treatment approaches</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Personalized divine treatment plans</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Divine and confidential spiritual sessions</span>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <p className="text-gray-600 mb-3">We're working hard to bring you the best divine therapy experience</p>
              <button 
                disabled
                className="bg-gray-300 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Divine Coming Soon
              </button>
            </div>
          </div>

          {/* Companion Mode - Active */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-emerald-200/50">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Users className="w-12 h-12 text-white" />
                <div className="absolute -inset-3 bg-emerald-100/50 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3">Divine Companion Support</h3>
              <p className="text-gray-600 text-lg">Connect with verified divine companions for spiritual support</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Verified divine companions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Divine flexible scheduling</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Shared spiritual experiences and divine empathy</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Affordable divine peer support</span>
              </div>
            </div>

            <button 
              onClick={handleExploreCompanions}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200"
            >
              Explore Divine Guides
            </button>
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="h-10 w-10 text-emerald-200" />
                <h3 className="text-3xl md:text-4xl font-bold">Ready to Start Your Divine Spiritual Journey?</h3>
                <Sparkles className="h-10 w-10 text-teal-200" />
              </div>
              <p className="text-emerald-100 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Whether you choose divine companion support or divine professional therapy, we're here to help you find the right path to spiritual wellness and soul healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={handleExploreCompanions}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg text-lg"
                >
                  <Users className="w-6 h-6" />
                  Find a Divine Guide
                </button>
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg text-lg">
                  <ExternalLink className="w-6 h-6" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Register as Divine Guide
                </h2>
                <button
                  onClick={() => {
                    setShowRegisterModal(false);
                    setRegisterError('');
                    setRegisterSuccess(false);
                  }}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {registerSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Registration Submitted!</h3>
                  <p className="text-gray-600">Your request has been submitted successfully. We'll review it and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={registerForm.gender}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={registerForm.whatsapp}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialization *
                      </label>
                      <input
                        type="text"
                        name="specialization"
                        value={registerForm.specialization}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="e.g., Anxiety, Depression, Meditation"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={registerForm.location}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="City, Country"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability *
                      </label>
                      <input
                        type="text"
                        name="availability"
                        value={registerForm.availability}
                        onChange={handleRegisterFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="e.g., Mon-Fri 9AM-5PM, Weekends 10AM-2PM"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Image URL or Emoji
                      </label>
                      <input
                        type="text"
                        name="image"
                        value={registerForm.image}
                        onChange={handleRegisterFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="🧘‍♀️ or https://example.com/image.jpg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={registerForm.description}
                        onChange={handleRegisterFormChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                        placeholder="Tell us about your experience, qualifications, and how you can help others on their spiritual journey..."
                      />
                    </div>
                  </div>

                  {registerError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-600 text-sm">{registerError}</p>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowRegisterModal(false);
                        setRegisterError('');
                        setRegisterSuccess(false);
                      }}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={registerLoading}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {registerLoading ? 'Submitting...' : 'Submit Registration'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalizedSessions; 