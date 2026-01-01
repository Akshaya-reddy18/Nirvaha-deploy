import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ServiceCard = {
  key: string;
  title: string;
  summary: string;
  description: string;
  link: string;
  image: string;
};

const cards: ServiceCard[] = [
  {
    key: 'zenchat',
    title: 'ZenChat',
    summary: 'Personalized AI Wellness Chatbot for emotional healing and mindfulness.',
    description: 'Connect with our intelligent AI companion powered by ancient spiritual wisdom and modern therapeutic techniques. Get personalized guidance, spiritual insights, and emotional support 24/7. Perfect for exploring your feelings, meditation tips, and wellness advice tailored to your unique journey.',
    link: '/dashboard/chatbot',
    image: '/services/zenchat.png',
  },
  {
    key: 'meditation',
    title: 'Meditation',
    summary: 'Guided sessions to restore inner balance and clarity.',
    description: 'Discover our comprehensive meditation library featuring Mudra-based practices, guided voice sessions, breathing exercises, and wellness programs. Track your progress, receive personalized recommendations, and deepen your meditation practice with expert guidance designed for all levels.',
    link: '/dashboard/meditation',
    image: '/services/meditation.png',
  },
  {
    key: 'sound',
    title: 'Sound Healing',
    summary: 'Ancient frequency-based therapy using traditional instruments.',
    description: 'Experience the transformative power of sound healing through binaural beats, frequency therapy, and sacred sound sessions. Harmonize your chakras, reduce stress, and align your body and mind with therapeutic frequencies based on ancient wellness traditions.',
    link: '/dashboard/sound',
    image: '/services/sound_healing.png',
  },
  {
    key: 'personal',
    title: 'Personalized Sessions',
    summary: 'One-on-one sessions tailored to your mental and physical well-being.',
    description: 'Work with certified wellness experts and spiritual guides for customized sessions addressing your specific needs. From therapeutic coaching to meditation guidance, receive personalized care that honors your unique journey and supports your holistic wellness goals.',
    link: '/dashboard/companion',
    image: '/services/PS.png',
  },
  // 3 extra floating cards
  { key: 'focus', title: 'Breath Focus', summary: 'Short breath awareness practice for instant calm.', description: 'Master essential breathing techniques that activate your parasympathetic nervous system. Perfect for quick stress relief, focus enhancement, and creating moments of peace throughout your day.', link: '/dashboard/meditation', image: '/services/BF.png' },
  { key: 'sleep', title: 'Sleep Relax', summary: 'Soft body-scan to ease into deep sleep.', description: 'Drift into restful sleep with our guided body-scan meditations and soothing soundscapes. Designed to calm your nervous system and improve sleep quality for complete restoration and rejuvenation.', link: '/dashboard/meditation', image: '/services/meditation.png' },
  { key: 'energy', title: 'Energy Tune', summary: 'Gentle sound-tones to refresh mind and body.', description: 'Revitalize your energy with specially curated sound frequencies and tonal therapy. Reconnect with your vitality, boost mental clarity, and refresh your entire being with transformative sound healing.', link: '/dashboard/sound', image: '/services/sound_healing.png' },
];

const ServicesShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const current = cards[index];

  return (
    <section className="services-showcase-bg relative w-full py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
        <div className="mb-12 text-center">
          <h2 className="heading-secondary text-teal-800 text-center">
            Gentle Services for Your Inner Journey
          </h2>
          <p className="subheading text-center text-teal-700 max-w-3xl mx-auto mt-3">
            Explore meditations, sound healing, conversations, and guided practices designed to support your emotional wellness.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[1400px]">
          <div className="rounded-[2.5rem] bg-white/95 border border-yellow-200/60 shadow-2xl p-10 sm:p-14 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Service Image */}
              <div className="rounded-3xl bg-[#FFF1B8] border border-yellow-300/60 h-80 sm:h-96 lg:h-[500px] shadow-xl overflow-hidden">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div>
                <h3 className="heading-tertiary text-teal-800 mb-5">
                  {current.title}
                </h3>
                <p className="text-teal-700 text-lg sm:text-xl mb-4 leading-relaxed font-semibold">
                  {current.summary}
                </p>
                <p className="text-teal-600 text-base sm:text-lg mb-10 leading-relaxed">
                  {current.description}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => navigate(current.link)}
                    className="px-6 py-3 rounded-full text-[#0A0F0F] bg-gradient-to-r from-[#fff] to-[#fff] border border-yellow-300/60 hover:shadow-[0_0_24px_rgba(255,210,96,0.35)] transition-all cursor-pointer font-semibold"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;


