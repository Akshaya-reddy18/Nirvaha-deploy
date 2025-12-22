import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Heart, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      quote: "Nirvaha has been a divine blessing in my spiritual journey. The sacred community and compassionate guidance helped me transcend my anxiety and discover my inner light.",
      rating: 5,
      spiritualElement: "🌸"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      quote: "The healers at Nirvaha truly understand the soul's language. Finding someone who speaks to my spiritual essence made all the difference in my transformation.",
      rating: 5,
      spiritualElement: "🕉️"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      quote: "The sacred practices are truly transformative. The guided meditations and breathwork sessions have awakened my spiritual awareness and brought profound peace.",
      rating: 5,
      spiritualElement: "✨"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 py-20 lg:py-32 overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-6 h-6 bg-emerald-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-teal-300/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-cyan-300/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-emerald-200/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
            <span className="text-emerald-600 font-semibold tracking-wide">SACRED STORIES</span>
            <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight">
            Soul Transformations
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real stories of spiritual awakening and divine healing with Nirvaha
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:scale-105 group relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
              }}
            >
              {/* Spiritual Element */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                {testimonial.spiritualElement}
              </div>
              
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-20 h-20 rounded-full object-cover shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-emerald-400 fill-current group-hover:text-emerald-500 transition-colors"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-emerald-300/60" />
                  <blockquote className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors italic">
                    {testimonial.quote}
                  </blockquote>
                  <Quote className="absolute -bottom-2 -right-2 h-6 w-6 text-emerald-300/60 rotate-180" />
                </div>

                <div className="font-bold text-gray-900 text-xl group-hover:text-emerald-800 transition-colors">
                  {testimonial.name}
                </div>
                
                {/* Decorative Elements */}
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
