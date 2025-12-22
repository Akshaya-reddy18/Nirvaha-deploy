import React, { useEffect, useState } from 'react';
import { Play, Smartphone, Sparkles, Heart, Brain, Music, Moon, Wind } from 'lucide-react';

const MindTraining = () => {
  const [activeTab, setActiveTab] = React.useState('Mindfulness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const tabs = [
    { name: 'Mindfulness', icon: Brain, emoji: '🧘' },
    { name: 'Breathwork', icon: Wind, emoji: '🌬️' },
    { name: 'Sleep Stories', icon: Moon, emoji: '🌙' },
    { name: 'Guided Meditation', icon: Heart, emoji: '💫' },
    { name: 'Soothing Soundscapes', icon: Music, emoji: '🎵' },
    { name: 'Ambient Sounds', icon: Sparkles, emoji: '✨' }
  ];

  return (
    <section id="training" className="relative bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Sacred Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-7 h-7 bg-emerald-300/25 rounded-full animate-sacred-pulse"></div>
        <div className="absolute top-40 right-32 w-5 h-5 bg-teal-300/35 rounded-full animate-spiritual-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-cyan-300/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-emerald-200/45 rounded-full animate-sacred-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-teal-200/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-cyan-200/25 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500 animate-pulse" />
            <span className="text-emerald-600 font-semibold tracking-wide text-sm sm:text-base">SPIRITUAL PRACTICES</span>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight px-4">
            Sacred Mind Training
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Awaken your inner wisdom through ancient practices and modern mindfulness techniques.
          </p>
        </div>

        {/* Sacred Benefits Banner */}
        <div className={`bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-4 sm:p-6 mb-8 sm:mb-12 text-center transition-all duration-1000 delay-200 card-sacred ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
            <span className="text-emerald-600 font-bold text-sm sm:text-base">Sacred Benefits</span>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
          </div>
          <p className="text-base sm:text-lg font-semibold text-emerald-800 px-2">
            <span className="text-emerald-600">Transform Your Being:</span> Inner Peace • Spiritual Growth • Divine Connection
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {tabs.map((tab, index) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all hover:shadow-lg flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  activeTab === tab.name
                    ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md scale-105 border border-emerald-300'
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-105 border border-gray-200'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <span className="text-base sm:text-lg">{tab.emoji}</span>
                <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:shadow-emerald-500/20 group card-sacred">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 relative">
                {/* Spiritual Element */}
                <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🎵</div>
                
                <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  SACRED SAMPLE
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                  Musical Mindfulness Journey
                </h3>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Experience the divine power of sacred music combined with ancient mindfulness techniques. This guided spiritual journey helps you connect with your inner light through carefully curated soundscapes and breathing practices.
                </p>

                {/* Audio Player */}
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 border border-emerald-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button className="w-10 h-10 sm:w-12 sm:h-12 btn-sacred rounded-full flex items-center justify-center text-white">
                        <Play size={16} fill="currentColor" className="sm:w-5 sm:h-5" />
                      </button>
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center gap-2 text-sm sm:text-base">
                          <Music className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                          Sacred Sound Journey
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">12:34 minutes of divine connection</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-cyan-600 h-2 rounded-full w-1/3 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>4:12</span>
                    <span>12:34</span>
                  </div>
                </div>

                <button className="w-full btn-sacred text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group">
                  <Smartphone size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">Begin Sacred Journey</span>
                </button>
              </div>

              <div className="lg:p-8 p-4 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-cyan-50 relative">
                {/* Floating Spiritual Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-emerald-300/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-teal-300/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                
                <div className="w-full max-w-sm">
                  <div className="aspect-square bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl shadow-2xl relative overflow-hidden group hover:shadow-emerald-500/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    
                    {/* Mystical Energy Orbs */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white space-y-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm group-hover:bg-white/30 transition-colors group-hover:scale-110">
                          <Play size={24} fill="currentColor" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-lg font-semibold flex items-center justify-center gap-2">
                            <Music className="h-5 w-5" />
                            Sacred Sound Journey
                          </div>
                          <div className="text-sm opacity-90">Divine Connection</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spiritual Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 text-lg">🎵</div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/40 text-xl">✨</div>
                    <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-white/50 text-sm">🕉️</div>
                    
                    {/* Floating Hearts */}
                    <div className="absolute top-1/4 left-1/4">
                      <Heart className="h-4 w-4 text-white/40 animate-bounce" style={{animationDelay: '0.5s'}} />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                      <Heart className="h-4 w-4 text-white/40 animate-bounce" style={{animationDelay: '1.5s'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindTraining;
