import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Heart, Send } from 'lucide-react';

export default function PersonalizedSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    location: '',
    concerns: '',
    goals: '',
    preferredTime: '',
    experience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        location: '',
        concerns: '',
        goals: '',
        preferredTime: '',
        experience: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-title text-4xl md:text-5xl text-emerald-800 mb-4">Personalized Session</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Fill out the form below to get matched with a wellness companion tailored to your unique needs and goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-sacred p-8 rounded-3xl border border-emerald-200/50">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
              <User className="w-6 h-6" />
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field w-full pl-10"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field w-full pl-10"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Age <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    max="100"
                    className="input-field w-full pl-10"
                    placeholder="25"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="input-field w-full pl-10"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Wellness Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Main Concerns <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field w-full"
                  placeholder="Describe your main wellness concerns..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field w-full"
                  placeholder="What do you hope to achieve?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="input-field w-full"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 9 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field w-full"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="btn-sacred flex items-center gap-2 px-8 py-4 text-lg"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <span className="animate-spin">✓</span>
                  Submitted!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Request
                </>
              )}
            </button>
          </div>

          {submitted && (
            <div className="mt-6 text-center">
              <p className="text-emerald-600 font-medium">
                Thank you! We'll match you with a suitable wellness companion soon.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
