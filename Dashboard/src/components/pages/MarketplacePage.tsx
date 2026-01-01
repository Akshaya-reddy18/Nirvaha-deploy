import { motion } from "motion/react";
import {
  ShoppingBag,
  BookOpen,
  Star,
  Heart,
  Clock,
  Users,
  Package,
  Truck,
  Shield,
  Filter,
  Search,
  TrendingUp,
  Award,
} from "lucide-react";
import { useState } from "react";

export function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<"courses" | "products">("courses");

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

  const products = [
    {
      name: "Crystal Healing Set",
      description: "Premium collection of 7 chakra-aligned crystals",
      price: "$89",
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1663899940872-6dba376bbfdb?w=600",
      category: "Crystals",
      color: "from-purple-400 to-pink-500",
      inStock: true,
    },
    {
      name: "Tibetan Singing Bowl",
      description: "Hand-crafted meditation bowl with mallet",
      price: "$149",
      rating: 5.0,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      category: "Sound Healing",
      color: "from-orange-400 to-red-500",
      inStock: true,
    },
    {
      name: "Meditation Cushion Set",
      description: "Organic cotton zafu and zabuton combo",
      price: "$79",
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      category: "Meditation",
      color: "from-emerald-400 to-teal-500",
      inStock: true,
    },
    {
      name: "Sacred Incense Collection",
      description: "Natural aromatic incense sticks - 12 varieties",
      price: "$39",
      rating: 4.7,
      reviews: 891,
      image: "https://images.unsplash.com/photo-1610294645949-149e5a5ff15d?w=600",
      category: "Aromatherapy",
      color: "from-cyan-400 to-blue-500",
      inStock: true,
    },
    {
      name: "Mala Bead Necklace",
      description: "108 sandalwood beads for meditation practice",
      price: "$59",
      rating: 4.9,
      reviews: 423,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
      category: "Spiritual Tools",
      color: "from-amber-400 to-orange-500",
      inStock: true,
    },
    {
      name: "Essential Oil Diffuser",
      description: "Ultrasonic aromatherapy diffuser with LED",
      price: "$69",
      rating: 4.6,
      reviews: 734,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600",
      category: "Aromatherapy",
      color: "from-lime-400 to-emerald-500",
      inStock: true,
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
          className="text-center mb-12"
        >
          <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-6">
            Courses & Wellness Products
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Enhance your spiritual journey with premium courses and curated
            wellness products
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-2 shadow-xl border border-emerald-200/30 inline-flex gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("courses")}
              className={`px-8 py-4 rounded-[24px] transition-all flex items-center gap-2 ${
                activeTab === "courses"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "text-teal-700 hover:bg-emerald-50"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Courses</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("products")}
              className={`px-8 py-4 rounded-[24px] transition-all flex items-center gap-2 ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "text-teal-700 hover:bg-emerald-50"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Products</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-14 pr-6 py-4 bg-white/80 backdrop-blur-xl rounded-[24px] border border-emerald-200/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-teal-800 placeholder:text-teal-400"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-4 bg-white/80 backdrop-blur-xl rounded-[24px] border border-emerald-200/30 shadow-lg text-teal-800 flex items-center gap-2 hover:bg-emerald-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters
          </motion.button>
        </motion.div>

        {/* Courses Grid */}
        {activeTab === "courses" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-emerald-200/30">
                  {/* Course Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Heart className="w-5 h-5 text-rose-500" />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`px-4 py-2 bg-gradient-to-r ${course.color} text-white rounded-full text-sm shadow-lg`}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <h3 className="text-teal-800 mb-3">{course.title}</h3>

                    <p className="text-sm text-teal-600 mb-4">
                      by {course.instructor}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-teal-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {course.lessons} lessons
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                        <span className="text-teal-800">{course.rating}</span>
                      </div>
                      <span className="text-sm text-teal-600">
                        ({course.students} students)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-emerald-200/30">
                      <div>
                        <div className="text-2xl text-teal-800">
                          {course.price}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-2xl shadow-lg`}
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-emerald-200/30">
                  {/* Product Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Heart className="w-5 h-5 text-rose-500" />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-xl text-teal-800 rounded-full text-sm shadow-lg">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h4 className="text-teal-800 mb-2">{product.name}</h4>

                    <p className="text-sm text-teal-600 mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                        <span className="text-teal-800">{product.rating}</span>
                      </div>
                      <span className="text-sm text-teal-600">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      {product.inStock ? (
                        <div className="flex items-center gap-2 text-sm text-emerald-600">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          In Stock
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-rose-600">
                          <div className="w-2 h-2 rounded-full bg-rose-500" />
                          Out of Stock
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-emerald-200/30">
                      <div>
                        <div className="text-2xl text-teal-800">
                          {product.price}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-2xl shadow-lg`}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-lg border border-emerald-200/30">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h5 className="text-teal-800 mb-1">Secure Payment</h5>
              <p className="text-sm text-teal-600">100% protected transactions</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-lg border border-emerald-200/30">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <h5 className="text-teal-800 mb-1">Quality Guaranteed</h5>
              <p className="text-sm text-teal-600">Curated by experts</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-lg border border-emerald-200/30">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h5 className="text-teal-800 mb-1">Fast Delivery</h5>
              <p className="text-sm text-teal-600">Free shipping over $50</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
