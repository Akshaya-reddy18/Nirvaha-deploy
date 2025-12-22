import React, { useEffect, useState } from 'react';

type ServiceCard = {
  key: string;
  title: string;
  summary: string;
  link: string;
  video?: string;
};

const cards: ServiceCard[] = [
  {
    key: 'zenchat',
    title: 'ZenChat',
    summary: 'Personalized AI Wellness Chatbot for emotional healing and mindfulness.',
    link: '/zenchat',
  },
  {
    key: 'meditation',
    title: 'Meditation',
    summary: 'Guided sessions to restore inner balance and clarity.',
    link: '/guided-meditation',
  },
  {
    key: 'sound',
    title: 'Sound Healing',
    summary: 'Ancient frequency-based therapy using traditional instruments.',
    link: '/sound-healing',
  },
  {
    key: 'personal',
    title: 'Personalized Sessions',
    summary: 'One-on-one sessions tailored to your mental and physical well-being.',
    link: '/personalized-sessions',
  },
  // 3 extra floating cards
  { key: 'focus', title: 'Breath Focus', summary: 'Short breath awareness practice for instant calm.', link: '/guided-meditation' },
  { key: 'sleep', title: 'Sleep Relax', summary: 'Soft body-scan to ease into deep sleep.', link: '/guided-meditation' },
  { key: 'energy', title: 'Energy Tune', summary: 'Gentle sound-tones to refresh mind and body.', link: '/sound-healing' },
];

const ServicesShowcase: React.FC = () => {
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
      <div className="max-w-6xl w-[85%] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
        <div className="mb-12 text-center">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A0F0F]">
            Gentle Services for Your Inner Journey
          </h2>
          <p className="text-[#4a4a4a] mt-3 text-lg sm:text-xl max-w-3xl mx-auto">
            Explore meditations, sound healing, conversations, and guided practices designed to support your emotional wellness.
          </p>
        </div>

        <div className="relative mx-auto w-full">
          <div className="rounded-[2.5rem] bg-white/95 border border-yellow-200/60 shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Thumbnail/animation placeholder */}
              <div className="rounded-3xl bg-[#FFF1B8] border border-yellow-300/60 h-72 sm:h-80 lg:h-96 shadow-xl overflow-hidden">
                {/* For now, just a placeholder gradient */}
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-white" />
              </div>
              {/* Content */}
              <div>
                <h3 className="font-title text-2xl sm:text-3xl lg:text-4xl text-[#0A0F0F] mb-5">
                  {current.title}
                </h3>
                <p className="text-[#333] text-lg sm:text-xl mb-10 leading-relaxed">
                  {current.summary}
                </p>
                <div className="flex justify-end">
                  <a
                    href={current.link}
                    className="px-5 py-2 rounded-full text-[#0A0F0F] bg-gradient-to-r from-[#fff] to-[#fff] border border-yellow-300/60 hover:shadow-[0_0_24px_rgba(255,210,96,0.35)] transition-all"
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small floating indicators/cards (optional visuals) */}
          <div className="absolute -top-7 -left-7 w-14 h-14 rounded-xl bg-white/80 border border-yellow-200/60 shadow-md" />
          <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-2xl bg-white/80 border border-yellow-200/60 shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;


