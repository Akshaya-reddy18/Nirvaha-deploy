import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const CreateRoom = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [created, setCreated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      setCreated(true);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-teal-100 px-2 sm:px-4 py-8 sm:py-12 pt-20 sm:pt-24">
      <div className="w-full max-w-xs sm:max-w-lg bg-white/90 rounded-3xl shadow-2xl p-2 sm:p-8 md:p-12 flex flex-col items-center border border-purple-100 z-10 backdrop-blur-xl animate-fade-in">
        <button className="self-start mb-2 sm:mb-4 flex items-center text-purple-600 hover:text-purple-800" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5 mr-1" /> Back
        </button>
        {!created ? (
          <>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Create a New Room</h2>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 sm:gap-4">
              <input
                className="rounded-xl border border-purple-200 p-2 sm:p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-xs sm:text-base"
                placeholder="Room Topic"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                required
              />
              <textarea
                className="rounded-xl border border-purple-200 p-2 sm:p-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-xs sm:text-base"
                placeholder="Room Description (optional)"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
              />
              <button type="submit" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:from-purple-600 hover:to-teal-600 transition-all duration-200">
                Create Room
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center mt-4 animate-fade-in">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 text-center">Room Created!</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 text-center">Your new discussion room "{topic}" has been created.</p>
            <button onClick={() => navigate('/discussion-rooms')} className="mt-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium shadow hover:from-purple-600 hover:to-teal-600 transition">Back to Rooms</button>
          </div>
        )}
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
};

export default CreateRoom; 