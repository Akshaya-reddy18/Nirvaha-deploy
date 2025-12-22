import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, CheckCircle, ArrowLeft, MapPin } from 'lucide-react';

const RegisterEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const [form, setForm] = useState({ name: '', email: '', mobile: '', age: '', gender: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!event) {
      // If no event info, redirect back
      navigate('/events');
    }
  }, [event, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!event) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-white to-purple-200 px-4 py-12 pt-24">
      <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center relative overflow-hidden border border-teal-100 z-10 backdrop-blur-xl">
        <button onClick={() => navigate(-1)} className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Register for Event</h1>
        <div className="w-full bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl p-6 mb-8 border border-teal-100 shadow">
          <h2 className="text-2xl font-bold text-teal-700 mb-2 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-teal-500" /> {event.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-700 mb-2">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-teal-500" /> {event.date}</span>
            <span className={`px-2 py-1 text-xs rounded-full ${event.type === 'Virtual' ? 'bg-blue-100 text-blue-600' : event.type === 'In-Person' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>{event.type}</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4 text-teal-500" /> {event.participants} participants</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-purple-500" /> {event.location}</span>
            <span className="flex items-center gap-1"><span className="font-semibold">Time:</span> {event.time}</span>
          </div>
          <div className="text-gray-700 italic mb-2">{event.description}</div>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="number"
              name="age"
              placeholder="Your Age"
              value={form.age}
              onChange={handleChange}
              min={1}
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <textarea
              name="notes"
              placeholder="Any special requirements or notes?"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="rounded-xl border border-teal-200 p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-teal-600 hover:to-purple-600 transition-all duration-200"
            >
              Complete Registration
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center mt-8 animate-fade-in">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Registration Successful!</h2>
            <p className="text-lg text-gray-700 mb-4 text-center">Thank you for registering for {event.title}. We look forward to seeing you at the event!</p>
            <button onClick={() => navigate('/events')} className="mt-2 bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow hover:from-teal-600 hover:to-purple-600 transition">Back to Events</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterEvent; 