import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const themeGradient = "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400";

const testimonials = [
  {
    text: "Nirvaha helped me build a simple daily ritual to check in with my emotions without feeling judged. The platform creates a safe space for self-reflection.",
    name: "Aarav",
    role: "Product Manager",
    location: "Bengaluru",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
  },
  {
    text: "The anonymous spaces made it easy to open up about stress and burnout for the first time. I finally found a community that understands.",
    name: "Meera",
    role: "Designer",
    location: "Mumbai",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
  },
  {
    text: "I use the platform at night to unwind with soundscapes and short reflective prompts. It has become an essential part of my evening routine.",
    name: "Rahul",
    role: "Software Engineer",
    location: "Hyderabad",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    text: "It feels like a gentle companion that reminds me I don't have to navigate tough days alone. The support here is incredible and genuine.",
    name: "Ananya",
    role: "Student",
    location: "Pune",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
  },
  {
    text: "Our team circles brought a sense of safety, connection, and shared understanding to the workplace. It transformed our team dynamics.",
    name: "Karthik",
    role: "HR Lead",
    location: "Chennai",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik"
  },
  {
    text: "The mindfulness exercises and community support helped me through my toughest moments. I'm grateful for this beautiful platform.",
    name: "Priya",
    role: "Teacher",
    location: "Delhi",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
];

const CommunityTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="px-4 py-20 md:py-32 min-h-screen flex items-center bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl w-[95%] mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 backdrop-blur-xl border border-emerald-100 fade-up">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 mb-5">
            What Our{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Community Feels
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto">
            Gentle reflections from people who use Nirvaha to create space for their emotions, one day at a time.
          </p>
        </div>

        <div className="relative overflow-hidden px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            {visibleTestimonials.map((item, idx) => (
              <div
                key={`${item.name}-${currentIndex}-${idx}`}
                className="group"
              >
                <div className="h-full p-8 md:p-10 rounded-3xl border-2 border-emerald-100 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 shadow-lg hover:shadow-2xl hover:shadow-emerald-200/50 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-6xl text-emerald-200/40 font-serif leading-none">"</div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-teal-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 relative z-10 italic">
                    "{item.text}"
                  </p>

                  {/* User info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-emerald-100 relative z-10">
                    <div className="relative">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-full object-cover border-3 border-emerald-200 shadow-md ring-2 ring-emerald-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-bold text-teal-900">
                        {item.name}
                      </div>
                      <div className="text-sm md:text-base text-teal-600">
                        {item.role} • {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 2) === idx 
                    ? 'w-8 bg-emerald-500' 
                    : 'w-2 bg-emerald-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;


