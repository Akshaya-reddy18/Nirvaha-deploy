import React, { useEffect, useState } from 'react';

const themeGradient = "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400";

const collaborators = [
  { name: "CalmMind Studio", tagline: "Guided meditations & breathwork design" },
  { name: "Anahata Sound Lab", tagline: "Therapeutic soundscapes & frequencies" },
  { name: "Sattva Wellness Collective", tagline: "Community-led healing spaces" },
  { name: "InnerLens Therapy", tagline: "Modern emotional health practitioners" },
  { name: "Prana Rituals Co.", tagline: "Mindful products for daily grounding" },
  { name: "SoulScript Studio", tagline: "Reflective journaling & storytelling" },
  { name: "QuietCircles", tagline: "Peer-support circles & listening spaces" },
];

const featured = [
  { name: "Bhava Labs", tagline: "Emotion-aware AI research partners" },
  { name: "SereneMind Alliance", tagline: "Clinical advisors for mind-body protocols" },
  { name: "Lotus Path Studio", tagline: "Art & movement for emotional expression" },
  { name: "CalmWork Collective", tagline: "Workplace wellness & culture design" },
  { name: "Prakriti Living", tagline: "Ayurvedic lifestyle & nutritional guidance" },
  { name: "Shanti Circles", tagline: "Trauma-informed community support" },
  { name: "InnerWave Lab", tagline: "Biofeedback & mindful tech experiments" },
];

const CARD_INTERVAL = 6000;

const CollaboratorsSection: React.FC = () => {
  const [collabIndex, setCollabIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCollabIndex((prev) => (prev + 1) % collaborators.length);
    }, CARD_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featured.length);
    }, CARD_INTERVAL + 1000);
    return () => clearInterval(id);
  }, []);

  const currentCollab = collaborators[collabIndex];
  const currentFeatured = featured[featuredIndex];

  return (
    <section className="collaborators-section-bg px-4 py-16 md:py-20 min-h-[80vh] flex items-center">
      <div className="max-w-5xl w-[80%] mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 backdrop-blur-xl border border-emerald-100 fade-up">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Collaborators &{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Partners
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            A growing ecosystem of mindful creators, therapists, and wellness studios shaping the Nirvaha experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Left half - Collaborations */}
          <div className="relative">
            <div className="mb-5">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900">
                Collaborations
              </h3>
              <p className="text-sm md:text-base text-slate-600 mt-1">
                Studios and spaces that bring depth, ritual, and lived wisdom into Nirvaha.
              </p>
            </div>
              <div className="relative h-full">
                <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md px-8 py-8 md:px-9 md:py-9 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out transform">
                <div className={`mb-4 flex items-center justify-center rounded-2xl ${themeGradient} w-36 h-18 md:w-44 md:h-20`}>
                  <span className="text-white font-semibold text-sm md:text-base">
                    {currentCollab.name}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-700 max-w-xs">
                  {currentCollab.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Right half - Featured */}
          <div className="relative">
              <div className="mb-5">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900">
                Featured Partners
              </h3>
              <p className="text-sm md:text-base text-slate-600 mt-1">
                Innovation partners helping us bridge ancient wisdom with mindful technology.
              </p>
            </div>
            <div className="relative h-full">
              <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md px-8 py-8 md:px-9 md:py-9 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out transform">
                <div className={`mb-4 flex items-center justify-center rounded-2xl ${themeGradient} w-36 h-18 md:w-44 md:h-20`}>
                  <span className="text-white font-semibold text-sm md:text-base">
                    {currentFeatured.name}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-700 max-w-xs">
                  {currentFeatured.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
