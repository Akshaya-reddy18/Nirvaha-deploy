import { motion } from "motion/react";
import {
  Users,
  Star,
  Clock,
  Video,
  Calendar,
  DollarSign,
  Award,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Copy,
  Check,
  MapPin,
  Globe,
  Sparkles,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export function CompanionPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCompanion, setSelectedCompanion] = useState<any>(null);

  const companions = [
    {
      id: "dr-anjali-sharma",
      name: "Dr. Anjali Sharma",
      title: "Mindfulness & Meditation Expert",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      coverImage: "https://images.unsplash.com/photo-1676747484510-755c231ae83e?w=800",
      rating: 4.9,
      reviews: 342,
      sessions: 1247,
      location: "Mumbai, India",
      languages: ["English", "Hindi", "Marathi"],
      specialties: ["Breath Work", "Chakra Healing", "Stress Management"],
      bio: "20+ years of experience in mindfulness meditation and holistic wellness. Certified yoga instructor and spiritual guide.",
      hourlyRate: "$60",
      callRate: "$25",
      availability: "Available",
      responseTime: "2 hours",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "master-li-wei",
      name: "Master Li Wei",
      title: "Energy Healing & Qi Gong Master",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      coverImage: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800",
      rating: 5.0,
      reviews: 218,
      sessions: 892,
      location: "Singapore",
      languages: ["English", "Mandarin", "Cantonese"],
      specialties: ["Qi Gong", "Energy Healing", "Traditional Chinese Medicine"],
      bio: "Master practitioner with 30+ years experience in Eastern healing arts. Trained in Shaolin Temple traditions.",
      hourlyRate: "$90",
      callRate: "$40",
      availability: "Available",
      responseTime: "1 hour",
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: "elena-costa",
      name: "Elena Costa",
      title: "Sound Healing Therapist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      coverImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800",
      rating: 4.8,
      reviews: 567,
      sessions: 2103,
      location: "Barcelona, Spain",
      languages: ["English", "Spanish", "Catalan"],
      specialties: ["Sound Bowls", "Frequency Therapy", "Vibrational Healing"],
      bio: "Certified sound healing therapist and musician. Specializing in Tibetan singing bowls and crystal bowl therapy.",
      hourlyRate: "$75",
      callRate: "$35",
      availability: "Busy",
      responseTime: "4 hours",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "yogi-ravi",
      name: "Yogi Ravi Kumar",
      title: "Pranayama & Breathwork Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
      rating: 4.9,
      reviews: 891,
      sessions: 3421,
      location: "Rishikesh, India",
      languages: ["English", "Hindi", "Sanskrit"],
      specialties: ["Pranayama", "Kundalini", "Hatha Yoga"],
      bio: "Traditional yogi trained in the Himalayas. Expert in ancient breathing techniques and energy cultivation.",
      hourlyRate: "$55",
      callRate: "$20",
      availability: "Available",
      responseTime: "3 hours",
      color: "from-orange-400 to-red-500",
    },
    {
      id: "sarah-mitchell",
      name: "Sarah Mitchell",
      title: "Spiritual Life Coach",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      coverImage: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800",
      rating: 4.7,
      reviews: 423,
      sessions: 1567,
      location: "Los Angeles, USA",
      languages: ["English", "French"],
      specialties: ["Life Coaching", "Manifestation", "Inner Child Work"],
      bio: "Transformational coach helping clients unlock their spiritual potential and manifest their dreams.",
      hourlyRate: "$85",
      callRate: "$45",
      availability: "Available",
      responseTime: "1 hour",
      color: "from-lime-400 to-emerald-500",
    },
    {
      id: "alex-rivera",
      name: "Alex Rivera",
      title: "Spiritual Awakening Guide",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      coverImage: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800",
      rating: 5.0,
      reviews: 734,
      sessions: 2891,
      location: "Sedona, USA",
      languages: ["English", "Spanish"],
      specialties: ["Spiritual Awakening", "Shadow Work", "Consciousness Expansion"],
      bio: "Guide for those experiencing spiritual awakening. Specializing in navigating consciousness shifts and integration.",
      hourlyRate: "$95",
      callRate: "$50",
      availability: "Available",
      responseTime: "2 hours",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const copyProfileLink = (id: string) => {
    const link = `https://nirvaha.app/companion/${id}`;
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100/50 rounded-full border border-lime-300/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-lime-600" />
            <span className="text-sm text-lime-700">
              Connect with Spiritual Companions
            </span>
          </motion.div>

          <h1 className="text-emerald-800 mb-4">
            Find Your Perfect Spiritual Guide
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-teal-700 mb-8">
            Book 1-on-1 sessions with experienced spiritual teachers, meditation
            guides, and wellness coaches. Pay per hour or per call.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
          >
            <Users className="w-5 h-5" />
            Become a Companion
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Active Companions", value: "2,500+", icon: Users },
            { label: "Sessions Completed", value: "45,000+", icon: Video },
            { label: "Average Rating", value: "4.9", icon: Star },
            { label: "Countries", value: "87", icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-[24px] p-6 shadow-lg border border-emerald-200/30 text-center"
            >
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <div className="text-2xl text-teal-800 mb-1">{stat.value}</div>
              <div className="text-sm text-teal-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companions.map((companion, i) => (
            <motion.div
              key={companion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${companion.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-emerald-200/30">
                {/* Cover Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={companion.coverImage}
                    alt={companion.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs backdrop-blur-xl shadow-lg flex items-center gap-2 ${
                        companion.availability === "Available"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-orange-500/90 text-white"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          companion.availability === "Available"
                            ? "bg-lime-300 animate-pulse"
                            : "bg-orange-200"
                        }`}
                      />
                      {companion.availability}
                    </div>
                  </div>
                </div>

                {/* Profile Avatar */}
                <div className="relative px-6 -mt-12 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-[24px] border-4 border-white shadow-xl overflow-hidden"
                  >
                    <img
                      src={companion.avatar}
                      alt={companion.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Profile Info */}
                <div className="px-6 pb-6">
                  <h3 className="text-teal-800 mb-1">{companion.name}</h3>
                  <p className="text-sm text-teal-600 mb-4">
                    {companion.title}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                      <span className="text-teal-800">{companion.rating}</span>
                      <span className="text-teal-600">
                        ({companion.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-teal-600">
                      <Video className="w-4 h-4" />
                      {companion.sessions} sessions
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-teal-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    {companion.location}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-teal-700 mb-4 line-clamp-2">
                    {companion.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {companion.specialties.slice(0, 2).map((specialty, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {companion.specialties.length > 2 && (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        +{companion.specialties.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-teal-600 mb-1">Per Hour</p>
                        <p className="text-xl text-teal-800">
                          {companion.hourlyRate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-teal-600 mb-1">Per Call</p>
                        <p className="text-xl text-teal-800">
                          {companion.callRate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCompanion(companion)}
                      className={`flex-1 py-3 bg-gradient-to-r ${companion.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all`}
                    >
                      View Profile
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white border-2 border-emerald-200 rounded-2xl flex items-center justify-center hover:bg-emerald-50 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-rose-500" />
                    </motion.button>
                  </div>

                  {/* Share Profile */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => copyProfileLink(companion.id)}
                    className="w-full py-3 bg-white border-2 border-emerald-200 rounded-2xl text-teal-800 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                  >
                    {copiedId === companion.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        Link Copied!
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        Share Profile
                      </>
                    )}
                  </motion.button>

                  {/* Response Time */}
                  <div className="flex items-center justify-center gap-2 text-xs text-teal-600 mt-4">
                    <Clock className="w-3 h-3" />
                    Usually responds in {companion.responseTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Modal */}
        {selectedCompanion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCompanion(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Cover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedCompanion.coverImage}
                  alt={selectedCompanion.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCompanion(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-teal-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={selectedCompanion.avatar}
                    alt={selectedCompanion.name}
                    className="w-24 h-24 rounded-[24px] shadow-xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-teal-800 mb-2">
                      {selectedCompanion.name}
                    </h2>
                    <p className="text-teal-600 mb-4">
                      {selectedCompanion.title}
                    </p>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-lime-400 text-lime-400" />
                        <span className="text-teal-800">
                          {selectedCompanion.rating}
                        </span>
                        <span className="text-teal-600">
                          ({selectedCompanion.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-teal-600">
                      <MapPin className="w-4 h-4" />
                      {selectedCompanion.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-teal-800 mb-3">About</h4>
                    <p className="text-teal-700">{selectedCompanion.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-teal-800 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCompanion.specialties.map(
                        (specialty: string, j: number) => (
                          <span
                            key={j}
                            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full"
                          >
                            {specialty}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-teal-800 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCompanion.languages.map(
                        (language: string, j: number) => (
                          <span
                            key={j}
                            className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full"
                          >
                            {language}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6">
                    <h4 className="text-teal-800 mb-4">Booking Options</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-teal-600">Hourly Rate</p>
                            <p className="text-2xl text-teal-800">
                              {selectedCompanion.hourlyRate}
                            </p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-3 bg-gradient-to-r ${selectedCompanion.color} text-white rounded-xl`}
                        >
                          Book Hourly Session
                        </motion.button>
                      </div>

                      <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-teal-600">Per Call</p>
                            <p className="text-2xl text-teal-800">
                              {selectedCompanion.callRate}
                            </p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-3 bg-gradient-to-r ${selectedCompanion.color} text-white rounded-xl`}
                        >
                          Book Single Call
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => copyProfileLink(selectedCompanion.id)}
                    className="w-full py-4 bg-white border-2 border-emerald-200 rounded-2xl text-teal-800 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                  >
                    {copiedId === selectedCompanion.id ? (
                      <>
                        <Check className="w-5 h-5 text-emerald-600" />
                        Profile Link Copied!
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-5 h-5" />
                        Share Profile Card
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[40px] p-12 text-white text-center shadow-2xl"
        >
          <h2 className="text-white mb-4">Become a Companion</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
            Share your wisdom and help seekers on their spiritual journey. Set
            your own rates, manage your schedule, and build a global community.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-800 rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            Apply Now
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
