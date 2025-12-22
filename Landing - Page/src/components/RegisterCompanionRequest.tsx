
import { useState } from 'react';
import axios from 'axios';
import { toast } from './ui/sonner';
import { BACKEND_CONFIG } from '../config/backend';

const RegisterCompanionRequest = ({ onClose }: { onClose?: () => void }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: 'male',
    specialization: '',
    availability: '',
    description: '',
    image: '',
    whatsapp: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests`, form);
      toast.success('Request submitted successfully!');
  setForm({ name: '', email: '', gender: 'male', specialization: '', availability: '', description: '', image: '', whatsapp: '' });
      if (onClose) onClose();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to submit request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-emerald-100 px-4 py-12">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full border border-teal-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request to Register as Companion</h2>
        <div className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="w-full px-4 py-3 border rounded-xl" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-xl" />
          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="WhatsApp Number" className="w-full px-4 py-3 border rounded-xl" />
          <select name="gender" value={form.gender} onChange={handleChange} required className="w-full px-4 py-3 border rounded-xl">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input name="specialization" value={form.specialization} onChange={handleChange} required placeholder="Specialization" className="w-full px-4 py-3 border rounded-xl" />
          <input name="availability" value={form.availability} onChange={handleChange} required placeholder="Availability (e.g. Mon-Fri, 9AM-6PM)" className="w-full px-4 py-3 border rounded-xl" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description (optional)" className="w-full px-4 py-3 border rounded-xl" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Profile Image (emoji or URL, optional)" className="w-full px-4 py-3 border rounded-xl" />
        </div>
        <button type="submit" disabled={loading} className="w-full mt-6 bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition-all duration-200">
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </section>
  );
};

export default RegisterCompanionRequest;
