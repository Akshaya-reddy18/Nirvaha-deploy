import { useEffect, useState } from 'react';
import { Sparkles, Heart, Users, Star } from 'lucide-react';
import CountUp from './CounterUp'

const TherapistDiscovery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="therapists" className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-800 py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Sacred Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-3 h-3 bg-emerald-300/45 rounded-full animate-sacred-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 right-24 w-4 h-4 bg-teal-300/35 rounded-full animate-spiritual-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-300/55 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-emerald-200/25 rounded-full animate-sacred-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-48 right-1/3 w-4 h-4 bg-teal-200/45 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-cyan-200/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-8 sm:space-y-12">
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 animate-pulse" />
              <span className="text-emerald-300 font-semibold tracking-wide text-sm sm:text-base">DIVINE CONNECTION</span>
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
              Discover your{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Sacred Guide</span>{' '}
              with Nirvaha
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-emerald-200 max-w-3xl mx-auto px-4">
              Our Harmony Profile connects you with healers who understand your soul's unique journey and spiritual needs.
            </p>
          </div>

          <div className={`flex justify-center py-8 sm:py-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Mystical Energy Orbs */}
              <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400/30 to-emerald-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Stylized faces illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Face 1 - with spiral */}
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full relative mr-8 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 group">
                    <div className="absolute inset-4 border-4 border-white/30 rounded-full group-hover:border-white/50 transition-colors"></div>
                    <div className="absolute inset-8 border-2 border-white/50 rounded-full group-hover:border-white/70 transition-colors"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
                    <div className="absolute top-2 right-2 text-white/60 text-lg">🕉️</div>
                  </div>

                  {/* Connection line with energy */}
                  <div className="absolute top-1/2 left-16 w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transform -translate-y-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                  </div>

                  {/* Face 2 - with tangled lines */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group">
                    <div className="absolute inset-4">
                      <svg className="w-full h-full text-white/40 group-hover:text-white/60 transition-colors" viewBox="0 0 100 100">
                        <path d="M20,20 Q50,60 80,20 Q50,80 20,50 Q80,50 50,80" stroke="currentColor" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                    <div className="absolute top-2 right-2 text-white/60 text-lg">✨</div>
                  </div>

                  {/* Floating Hearts */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Heart className="h-6 w-6 text-emerald-300/60 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2">
                    <Heart className="h-6 w-6 text-cyan-300/60 animate-bounce" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-sacred rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🌸</div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 group-hover:glow-emerald transition-all duration-300" />
                <div className="text-3xl sm:text-5xl font-bold text-emerald-300"><CountUp
                  from={0}
                  to={70}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                  %</div>
              </div>
              <p className="text-base sm:text-lg text-slate-100 group-hover:text-white transition-colors leading-relaxed">
                Compassionate healers providing diverse perspectives and sacred approaches to spiritual wellness.
              </p>
            </div>

            <div className="glass-sacred rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🌍</div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-teal-300 group-hover:glow-cyan transition-all duration-300" />
                <div className="text-3xl sm:text-5xl font-bold text-teal-300"><CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                  %</div>
              </div>
              <div className="text-base sm:text-lg text-slate-100 group-hover:text-white transition-colors leading-relaxed">
                <span className="font-semibold">Sacred Guides</span> speak multiple languages for deeper cultural and spiritual understanding.
              </div>
            </div>

            <div className="glass-sacred rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity">⭐</div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-300 group-hover:glow-teal transition-all duration-300" />
                <div className="text-3xl sm:text-5xl font-bold text-cyan-300"><CountUp
                  from={0}
                  to={250}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                  +</div>
              </div>
              <div className="text-base sm:text-lg text-slate-100 group-hover:text-white transition-colors leading-relaxed">
                <span className="font-semibold">Years</span> of combined wisdom in spiritual healing and soul transformation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistDiscovery;
