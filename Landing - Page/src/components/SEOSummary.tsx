import { useEffect, useState } from 'react';
import { Sparkles, Users, Award, TrendingUp, Heart, Shield, Brain, Zap } from 'lucide-react';

const SEOSummary = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Active Users", description: "People transforming their mental wellness" },
    { icon: <Award className="w-6 h-6" />, number: "4.9/5", label: "User Rating", description: "Based on 1,500+ reviews" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "95%", label: "Success Rate", description: "Reported improvement in mental health" },
    { icon: <Heart className="w-6 h-6" />, number: "24/7", label: "AI Support", description: "Always available emotional guidance" }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Therapy",
      description: "Advanced artificial intelligence provides personalized mental health support and emotional guidance 24/7."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Spiritual Wellness",
      description: "Combines ancient spiritual wisdom from Bhagavad Gita with modern therapeutic techniques for holistic healing."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "Get immediate support through our mobile app, web platform, and WhatsApp community for mental wellness."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-6 h-6 bg-emerald-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-teal-300/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-cyan-300/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-emerald-200/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500 animate-pulse" />
            <span className="text-emerald-600 font-semibold tracking-wide text-sm sm:text-base">TRUSTED BY THOUSANDS</span>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight px-4">
            Why Choose Nirvaha for Mental Wellness?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            Experience the perfect blend of ancient spiritual wisdom and cutting-edge AI technology for complete mental wellness transformation.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200/50">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-base sm:text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={`grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">Ready to Transform Your Mental Wellness?</h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-4">
                Join thousands of people who have already discovered the power of combining ancient spiritual wisdom with modern AI therapy for complete mental wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Start Your Journey Today
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Learn More About Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSummary;
