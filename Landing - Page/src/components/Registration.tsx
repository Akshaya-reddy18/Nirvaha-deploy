import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, MessageCircle, Heart, ArrowLeft, CheckCircle } from 'lucide-react';

const therapyTypes = [
  'Cognitive Behavioral Therapy',
  'Mindfulness-Based Therapy',
  'Trauma-Informed Therapy',
  'Anxiety & Depression Support',
  'Stress Management',
  'Life Coaching'
];

const companionSessionTypes = [
  'Peer Support Groups',
  'Study Buddies',
  'Wellness Accountability Partners',
  'Mindfulness Companions',
  'Emotional Support Buddies',
  'Meditation Partners'
];

const Registration = () => {
  const [form, setForm] = useState(() => {
    // Get selected session data from localStorage
    const sessionData = localStorage.getItem('selectedSessionData');
    const parsedData = sessionData ? JSON.parse(sessionData) : {};
    
    return {
      name: '',
      email: '',
      mobile: '',
      dateOfBirth: '',
      therapyType: '',
      sessionMode: parsedData.mode || '',
      selectedProvider: parsedData.doctorName || parsedData.companionName || '',
      concerns: '',
      preferredTime: '',
      emergencyContact: '',
      emergencyPhone: ''
    };
  });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear the session data from localStorage after successful submission
    localStorage.removeItem('selectedSessionData');
    setSubmitted(true);
  };

  const isFormValid = () => {
    return form.name && form.email && form.mobile && form.therapyType && form.concerns;
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-teal-100 px-4 py-12 pt-24">
        <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center relative overflow-hidden card-sacred">
          <CheckCircle className="h-16 w-16 text-green-500 mb-6 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Registration Successful!</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Thank you for registering with Nirvaha. We've received your information and will contact you within 24 hours to schedule your session.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-3xl p-6 mb-6 w-full card-sacred">
            <h3 className="font-semibold text-green-800 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Our team will review your registration details</li>
              <li>• We'll match you with the best available therapist/companion</li>
              <li>• You'll receive a confirmation email with session details</li>
              <li>• Your first session will be scheduled within 48 hours</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-sacred text-white px-8 py-3 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-teal-100 px-4 py-12 pt-24">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden card-sacred">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Complete Your Registration</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide your details to help us create the best personalized experience for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 card-sacred">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-teal-600" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
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
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                />
              </div>
            </div>
          </div>

          {/* Session Details */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 card-sacred">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-purple-600" />
              Session Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Mode *
                </label>
                <select
                  name="sessionMode"
                  value={form.sessionMode}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                >
                  <option value="">Select session mode</option>
                  <option value="therapy">Therapy Session</option>
                  <option value="companion">Companion Mode</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Therapy/Session Type *
                </label>
                <select
                  name="therapyType"
                  value={form.therapyType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                >
                  <option value="">Select type</option>
                  {form.sessionMode === 'therapy' ? (
                    therapyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))
                  ) : form.sessionMode === 'companion' ? (
                    companionSessionTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))
                  ) : (
                    <>
                      {therapyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                      {companionSessionTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Session Time
                </label>
                <select
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 9 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Provider
                </label>
                <input
                  type="text"
                  name="selectedProvider"
                  value={form.selectedProvider}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                  placeholder="Provider name (if selected)"
                />
              </div>
            </div>
          </div>

          {/* Concerns and Additional Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 card-sacred">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-600" />
              Your Concerns & Goals
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What brings you here? *
                </label>
                <textarea
                  name="concerns"
                  value={form.concerns}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none card-sacred"
                  placeholder="Please describe your concerns, goals, or what you hope to achieve through these sessions..."
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 card-sacred">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-600" />
              Emergency Contact (Optional)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={form.emergencyContact}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                  placeholder="Emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Phone
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={form.emergencyPhone}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-emerald-200 p-3 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition card-sacred"
                  placeholder="Emergency contact phone"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`px-12 py-4 rounded-3xl font-semibold text-lg shadow-lg transition-all duration-200 ${
                isFormValid()
                  ? 'btn-sacred'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration; 