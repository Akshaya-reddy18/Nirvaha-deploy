import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ArrowRight, CheckCircle, X, Sparkles, Moon, Sun, Heart, Star, Flower2 } from 'lucide-react';

const events = [
  {
    title: 'Divine Full Moon Ceremony',
    date: 'Aug 24, 2025',
    type: 'Virtual',
    participants: 40,
    time: '7:00 PM - 8:30 PM',
    location: 'Online (Divine Zoom link will be sent)',
    description: 'A divine meditation ceremony harnessing the cosmic energy of the full moon for deep spiritual renewal and inner transformation. Connect with lunar wisdom.',
    icon: <Moon className="h-6 w-6 text-cyan-500" />
  },
  {
    title: 'Cosmic Sound Healing Journey',
    date: 'Sep 17, 2025',
    type: 'In-Person',
    participants: 18,
    time: '6:00 PM - 7:30 PM',
    location: 'Nirvaha Divine Wellness Center, Hyderabad',
    description: 'Immerse yourself in divine healing vibrations with divine crystal bowls, cosmic gongs, and mystical chimes. Experience spiritual sound therapy.',
    icon: <Star className="h-6 w-6 text-emerald-500" />
  },
  {
    title: 'Divine Wellness Retreat',
    date: 'Oct 2, 2025',
    type: 'Hybrid',
    participants: 25,
    time: '3 Days',
    location: 'Divine Rishikesh & Online',
    description: 'A 3-day spiritual retreat with divine yoga, mindful meditation, cosmic workshops, and nature communion. Join in-person or virtually for complete transformation.',
    icon: <Sun className="h-6 w-6 text-teal-500" />
  }
];

const WellnessEvents = () => {
  const navigate = useNavigate();
  const [showFormIdx, setShowFormIdx] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', event: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleJoinClick = (idx: number) => {
    setShowFormIdx(idx);
    setForm({ name: '', email: '', mobile: '', event: events[idx].title });
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowFormIdx(null);
    setSubmitted(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-2 sm:px-4 py-8 sm:py-12 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/30 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="w-full max-w-8xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3 sm:p-8 md:p-12 flex flex-col items-center relative overflow-hidden border border-emerald-200/50 z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Divine Events
            </h1>
            <Sparkles className="h-8 w-8 text-cyan-500" />
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-md mx-auto">
            Join our divine gatherings to connect with cosmic energy, heal your soul, and grow spiritually together.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {events.map((event, idx) => (
            <div key={event.title} className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-xl border-2 border-emerald-100 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all relative shadow-lg hover:shadow-xl">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {event.icon}
                  <h4 className="font-semibold text-lg text-emerald-800">{event.title}</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Calendar className="h-4 w-4 text-emerald-500" />
                  <span>{event.date}</span>
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${event.type === 'Virtual' ? 'bg-cyan-100 text-cyan-600' : event.type === 'In-Person' ? 'bg-emerald-100 text-emerald-600' : 'bg-teal-100 text-teal-600'}`}>{event.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Users className="h-4 w-4 text-emerald-500" />
                  <span>{event.participants} divine souls</span>
                </div>
                <div className="text-sm text-gray-500 mb-1">{event.time} | {event.location}</div>
                <div className="text-sm text-gray-700 italic mb-2 leading-relaxed">{event.description}</div>
              </div>
              <button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all hover:shadow-xl flex items-center gap-2"
                onClick={() => navigate('/register-event', { state: { event } })}
              >
                Join Divine Event <ArrowRight className="h-4 w-4" />
              </button>
              {/* Registration Form Modal/Inline */}
              {showFormIdx === idx && (
                <div className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-200 mt-4 z-20 p-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-emerald-500" />
                      <h3 className="text-xl font-bold text-emerald-700">Divine Registration for {event.title}</h3>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-emerald-600 transition"><X className="h-6 w-6" /></button>
                  </div>
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Divine Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border border-emerald-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Divine Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl border border-emerald-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      />
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Your Divine Contact"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        className="rounded-xl border border-emerald-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      />
                      <input
                        type="text"
                        name="event"
                        value={form.event}
                        readOnly
                        className="rounded-xl border border-emerald-200 p-3 bg-emerald-50 text-emerald-600 cursor-not-allowed"
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200"
                      >
                        Complete Divine Registration
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center mt-4 animate-fade-in">
                      <div className="relative mb-4">
                        <CheckCircle className="h-12 w-12 text-emerald-500 mb-4 animate-bounce" />
                        <div className="absolute -inset-2 bg-emerald-100/50 rounded-full blur-xl"></div>
                      </div>
                      <h2 className="text-2xl font-bold text-emerald-800 mb-2 text-center">Divine Registration Complete!</h2>
                      <p className="text-lg text-gray-700 mb-4 text-center">Thank you for joining our divine gathering for {form.event}. We look forward to connecting with your divine soul!</p>
                      <button onClick={handleClose} className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all">Close</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Fade-in animation */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
};

export default WellnessEvents; 