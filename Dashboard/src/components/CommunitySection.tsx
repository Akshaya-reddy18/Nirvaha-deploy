import { motion } from "motion/react";
import { Users, Star, Heart, MessageCircle } from "lucide-react";

export function CommunitySection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      quote: "NIRVAHA transformed my meditation practice. The AI guidance is incredibly intuitive and the sound healing sessions are life-changing.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote: "As someone who struggled with stress, NIRVAHA's mudra meditations and personalized approach helped me find inner peace.",
      rating: 5,
    },
    {
      name: "Maya Patel",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      quote: "The dashboard tracking and community support keeps me motivated. This is the future of spiritual wellness!",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Breathing Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-300/30 mb-6"
          >
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">Community Love</span>
          </motion.div>

          <h2 className="text-emerald-800 mb-4">Join 50,000+ Spiritual Seekers</h2>
          <p className="max-w-2xl mx-auto text-lg text-teal-700">
            Experience the transformation that thousands are already enjoying. 
            Our community is here to support your journey every step of the way.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "50K+", label: "Active Members", icon: Users },
            { value: "1M+", label: "Meditations", icon: Heart },
            { value: "4.9★", label: "Average Rating", icon: Star },
            { value: "10K+", label: "Daily Sessions", icon: MessageCircle },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-emerald-200/30 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center"
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-2xl mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-teal-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-[32px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
              />

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-8 shadow-xl border border-emerald-200/30 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-lime-400 text-lime-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-teal-700 mb-6 flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime-400 rounded-full border-2 border-white" />
                  </motion.div>
                  <div>
                    <h5 className="text-teal-800">{testimonial.name}</h5>
                    <p className="text-sm text-teal-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Floating Heart */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-200" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Wave Effect */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/50"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-400"
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    },
                  }}
                />
              ))}
            </div>
            <p className="text-teal-700">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                215 members
              </span>{" "}
              joined this week
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
