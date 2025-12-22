import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GoldenShowcase: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger animation for smooth gradient progression
    const ctx = gsap.context(() => {
      gsap.to(".goldenshowcase-bg", {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".goldenshowcase-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="goldenshowcase-bg relative w-full py-20 sm:py-28 lg:py-32">
      {/* Floating spiritual symbols (scoped to this section only) */}
      <span className="golden-symbol golden-symbol-om-1">ॐ</span>
      <span className="golden-symbol golden-symbol-om-2">ॐ</span>
      <span className="golden-symbol golden-symbol-swastik-1">卐</span>
      <span className="golden-symbol golden-symbol-swastik-2">卐</span>

      <div className="goldenshowcase-content max-w-6xl w-[80%] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
        {/* Soft white container for About / Inner Journey */}
        <div className="mx-auto w-full rounded-[2.5rem] bg-white/95 shadow-2xl border border-yellow-200/60 relative overflow-hidden">
          {/* Soft aura */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(255, 223, 128, 0.25)' }} />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ background: 'rgba(255, 210, 96, 0.25)' }} />

          <div className="relative z-[1] p-8 sm:p-10 lg:p-14">
            {/* Section heading for About / Inner Journey */}
            <div className="mb-10 text-center">
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A0F0F]">
                Rooted in Wisdom, Guided by Compassion
              </h2>
              <p className="mt-3 text-[#4a4a4a] text-lg sm:text-xl max-w-3xl mx-auto">
                A gentle space where ancient wisdom meets mindful technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Inner curved rectangle with video */}
              <div className="w-full">
                <div className="rounded-3xl bg-[#FFF1B8] border border-yellow-300/60 shadow-xl overflow-hidden">
                  {/* 16:9 video */}
                  <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                    <video
                      className="w-full h-full object-cover"
                      src="/about_niv.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      muted
                    />
                  </div>
                </div>
              </div>

              {/* Right: Content related to the video */}
              <div className="w-full">
                <h3 className="font-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A0F0F] mb-6">
                  Guided Spiritual Healing Journey
                </h3>
                <p className="text-[#333] text-lg sm:text-xl leading-relaxed">
                  Nirvaha is a holistic wellness platform designed to help people navigate emotions with clarity, calm, and purpose. Rooted in ancient wisdom and powered by modern AI, Nirvaha brings together meditation, sound healing, mindful conversations, creative expression, and community spaces into one seamless experience. From AI-guided emotional support and meditation practices to anonymous discussion rooms and wellness products, Nirvaha acts as a companion for everyday emotional balance—making inner well-being accessible, stigma-free, and deeply human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenShowcase;


