import React from 'react';

const themeGradient = "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400";

const testimonials = [
  {
    text: "Nirvaha helped me build a simple daily ritual to check in with my emotions without feeling judged.",
    name: "Aarav, Product Manager • Bengaluru",
  },
  {
    text: "The anonymous spaces made it easy to open up about stress and burnout for the first time.",
    name: "Meera, Designer • Mumbai",
  },
  {
    text: "I use the platform at night to unwind with soundscapes and short reflective prompts.",
    name: "Rahul, Software Engineer • Hyderabad",
  },
  {
    text: "It feels like a gentle companion that reminds me I don’t have to navigate tough days alone.",
    name: "Ananya, Student • Pune",
  },
  {
    text: "Our team circles brought a sense of safety, connection, and shared understanding to the workplace.",
    name: "Karthik, HR Lead • Chennai",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials];

const CommunityTestimonials: React.FC = () => {
  return (
    <section className="px-4 py-16 md:py-20 min-h-[80vh] flex items-center">
      <div className="max-w-5xl w-[80%] mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 backdrop-blur-xl border border-emerald-100 fade-up">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            What Our{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Community Feels
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Gentle reflections from people who use Nirvaha to create space for their emotions, one day at a time.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-10 testimonial-marquee">
            {loopedTestimonials.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex-none w-[85vw] sm:w-[65vw] md:w-[46vw] lg:w-[40vw]"
              >
                <div className="h-full p-8 md:p-9 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md hover:shadow-emerald-100 transition-shadow duration-300 flex flex-col justify-between">
                  <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-5">
                    “{item.text}”
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${themeGradient} flex items-center justify-center text-white text-sm font-semibold`}>
                      {item.name.charAt(0)}
                    </div>
                    <div className="text-xs md:text-sm text-slate-700 font-medium">
                      {item.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-marquee {
          width: max-content;
          animation: testimonial-marquee 32s linear infinite;
        }

        @keyframes testimonial-marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 640px) {
          .testimonial-marquee {
            animation-duration: 26s;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunityTestimonials;


