import { motion } from "motion/react";
import { BookOpen, Clock, Users, Star, Play, Award, TrendingUp, ChevronRight } from "lucide-react";

export function CoursesPage() {
  const courses = [
    {
      title: "Mindfulness Meditation Mastery",
      instructor: "Dr. Anjali Sharma",
      level: "Beginner",
      duration: "6 weeks",
      students: "2,341",
      rating: 4.9,
      lessons: 24,
      price: "$99",
      image: "https://images.unsplash.com/photo-1676747484510-755c231ae83e?w=600",
      color: "from-emerald-400 to-teal-500",
      topics: ["Breath Work", "Body Scan", "Mindful Living"],
    },
    {
      title: "Advanced Chakra Healing",
      instructor: "Master Li Wei",
      level: "Advanced",
      duration: "8 weeks",
      students: "1,823",
      rating: 5.0,
      lessons: 32,
      price: "$149",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600",
      color: "from-purple-400 to-indigo-500",
      topics: ["Energy Centers", "Kundalini", "Chakra Balance"],
    },
    {
      title: "Sound Healing Certification",
      instructor: "Elena Costa",
      level: "Professional",
      duration: "12 weeks",
      students: "967",
      rating: 4.8,
      lessons: 48,
      price: "$299",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600",
      color: "from-cyan-400 to-blue-500",
      topics: ["Frequency Therapy", "Bowl Meditation", "Certification"],
    },
    {
      title: "Pranayama & Breath Mastery",
      instructor: "Yogi Ravi Kumar",
      level: "Intermediate",
      duration: "4 weeks",
      students: "3,102",
      rating: 4.9,
      lessons: 16,
      price: "$79",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      color: "from-orange-400 to-red-500",
      topics: ["Breathing Techniques", "Energy Control", "Vitality"],
    },
    {
      title: "Mudra Magic: Hand Yoga",
      instructor: "Sarah Mitchell",
      level: "Beginner",
      duration: "3 weeks",
      students: "2,567",
      rating: 4.7,
      lessons: 12,
      price: "$59",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      color: "from-lime-400 to-emerald-500",
      topics: ["Sacred Gestures", "Chakra Mudras", "Daily Practice"],
    },
    {
      title: "Spiritual Awakening Journey",
      instructor: "Alex Rivera",
      level: "All Levels",
      duration: "10 weeks",
      students: "4,521",
      rating: 5.0,
      lessons: 40,
      price: "$199",
      image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600",
      color: "from-pink-400 to-rose-500",
      topics: ["Self-Discovery", "Inner Peace", "Transformation"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-300/30 mb-6"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">Expert-Led Programs</span>
          </motion.div>

          <h1 className="text-emerald-800 mb-4">Transform Your Practice</h1>
          <p className="max-w-3xl mx-auto text-lg text-teal-700">
            Learn from world-renowned spiritual teachers and deepen your meditation journey 
            with comprehensive, structured courses designed for all levels.
          </p>
        </motion.div>

        {/* Featured Course */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[48px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
            
            <div className="grid lg:grid-cols-2 gap-8 relative z-20">
              {/* Content */}
              <div className="p-12 flex flex-col justify-center text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/20 backdrop-blur-sm rounded-full border border-lime-300/30 mb-6">
                    <TrendingUp className="w-4 h-4 text-lime-300" />
                    <span className="text-sm text-lime-200">Most Popular</span>
                  </div>

                  <h2 className="text-white mb-4">Mindfulness Meditation Mastery</h2>
                  <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                    Master the art of mindfulness with Dr. Anjali Sharma. Transform your life 
                    through ancient wisdom and modern neuroscience.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-lime-300 text-lime-300" />
                      <span>4.9 (2,341 students)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>6 weeks • 24 lessons</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-emerald-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Start Learning
                    </motion.button>
                    <span className="text-2xl">$99</span>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] lg:h-auto"
              >
                <img
                  src={courses[0].image}
                  alt="Featured Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* All Courses Grid */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-teal-800 mb-8"
        >
          All Courses
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
              />

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-emerald-200/30 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />

                  {/* Level Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs text-teal-800">
                    {course.level}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-teal-800">
                    {course.price}
                  </div>

                  {/* Play Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-7 h-7 text-emerald-600 ml-1" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-teal-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-teal-600 mb-4">{course.instructor}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200/30 mt-auto">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                        <span className="text-sm text-teal-800">{course.rating}</span>
                      </div>
                      <p className="text-xs text-teal-600">{course.students} students</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <BookOpen className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-teal-800">{course.lessons}</span>
                      </div>
                      <p className="text-xs text-teal-600">{course.duration}</p>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full py-3 bg-gradient-to-r ${course.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[40px] p-12 border border-emerald-200/30"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
          <h3 className="text-teal-800 mb-4">Become a Certified Instructor</h3>
          <p className="max-w-2xl mx-auto text-teal-700 mb-8">
            Share your wisdom with our global community. Join our instructor program 
            and inspire thousands on their spiritual journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
