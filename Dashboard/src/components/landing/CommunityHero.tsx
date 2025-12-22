import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

const CommunityHero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-blend relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/herovd.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            
          </p>
        </div>
      </div>

      {/* CTA Button - positioned near middle-bottom of viewport */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-emerald-500/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 border border-emerald-400/20 relative overflow-hidden group"
        >
          <span className="relative z-10">Start Your Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </div>
    </section>
  );
};

export default CommunityHero;
