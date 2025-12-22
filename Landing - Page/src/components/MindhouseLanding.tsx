import { useEffect, useState } from 'react';
import { MessageCircle, Shield, Sparkles } from 'lucide-react';
import Chatbot from './Chatbot';

export default function MindhouseLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-emerald-800 to-teal-800 py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Sacred Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-5 h-5 bg-emerald-300/30 rounded-full animate-sacred-pulse"></div>
        <div className="absolute top-40 right-20 w-7 h-7 bg-teal-300/25 rounded-full animate-spiritual-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-300/35 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-emerald-200/25 rounded-full animate-sacred-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-teal-200/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-cyan-200/25 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Mystical Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent transform -skew-y-1"></div>
      
      {/* Additional Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/3 to-black/8"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 animate-pulse" />
            <span className="text-emerald-300 font-semibold tracking-wide text-sm sm:text-base">SACRED COMMUNITY</span>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent px-4">
            A safe space for sharing and support
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100 font-medium max-w-3xl mx-auto px-4">
            Be a part of our sacred Mindhouse community where healing happens together.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-12 max-w-2xl">
            {/* Sacred Feature 1 */}
            <div className={`flex items-start space-x-4 sm:space-x-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white/25 to-white/15 rounded-3xl flex items-center justify-center backdrop-blur-lg border border-emerald-300/40 group-hover:glow-emerald transition-all duration-300">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight text-white">
                  Speak your mind without fear
                </h3>
                <p className="text-emerald-100 opacity-90 leading-relaxed text-sm sm:text-base">
                  Connect with others on a deeper spiritual level while maintaining your sacred privacy on Mindhouse app.
                </p>
              </div>
            </div>

            {/* Sacred Feature 2 */}
            <div className={`flex items-start space-x-4 sm:space-x-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white/25 to-white/15 rounded-3xl flex items-center justify-center backdrop-blur-lg border border-teal-300/40 group-hover:glow-cyan transition-all duration-300">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-300" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight text-white">
                  Real-time support from your peers
                </h3>
                <p className="text-emerald-100 opacity-90 leading-relaxed text-sm sm:text-base">
                  Stay connected and motivated on your spiritual healing journey through our sacred WhatsApp community.
                </p>
              </div>
            </div>

            {/* Sacred WhatsApp CTA */}
            <div className={`pt-4 sm:pt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button className="btn-sacred w-full text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Join our Sacred Community</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-300/5 rounded-full blur-2xl"></div>
      
      {/* AI Wellness Chatbot */}
      <Chatbot />
    </section>
  );
}
