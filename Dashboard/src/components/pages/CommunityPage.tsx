import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Star, Award, Users, TrendingUp } from "lucide-react";

export function CommunityPage() {
  const posts = [
    {
      author: "Sarah Mitchell",
      role: "Meditation Guide",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      time: "2 hours ago",
      content: "Just completed a 30-day meditation streak! 🎉 The journey has been transformative. Grateful for this amazing community's support. Remember, consistency is more important than perfection. 🙏",
      likes: 127,
      comments: 23,
      type: "milestone",
    },
    {
      author: "David Chen",
      role: "Wellness Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      time: "5 hours ago",
      content: "Sharing my favorite morning routine: 10 min pranayama + 20 min meditation + sound healing. Game changer for productivity and mental clarity! ✨",
      likes: 89,
      comments: 15,
      type: "tip",
    },
    {
      author: "Maya Patel",
      role: "Sound Healer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      time: "8 hours ago",
      content: "New sound healing session just dropped! 432 Hz crystal bowl meditation. Perfect for deep relaxation and cellular healing. Who's joining? 🔮",
      likes: 156,
      comments: 34,
      type: "announcement",
    },
    {
      author: "Alex Rivera",
      role: "Mindfulness Coach",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      time: "12 hours ago",
      content: "Reminder: Your breath is your anchor. In moments of stress, just three conscious breaths can shift your entire state. Try it now. 🌬️",
      likes: 203,
      comments: 41,
      type: "wisdom",
    },
  ];

  const topMentors = [
    {
      name: "Dr. Anjali Sharma",
      specialty: "Vedic Meditation",
      students: "2.3K",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
    {
      name: "Master Li Wei",
      specialty: "Qi Gong & Energy",
      students: "1.8K",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    {
      name: "Elena Costa",
      specialty: "Sound Therapy",
      students: "3.1K",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 pt-24 pb-16">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-300/30 mb-6"
          >
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">50K+ Active Members</span>
          </motion.div>

          <h1 className="text-emerald-800 mb-4">Community Feed</h1>
          <p className="max-w-2xl mx-auto text-lg text-teal-700">
            Connect, share, and grow together on your spiritual journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 shadow-xl border border-emerald-200/30"
              >
                {/* Post Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-300">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-lime-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>

                    <div>
                      <h4 className="text-teal-800">{post.author}</h4>
                      <p className="text-sm text-teal-600">{post.role}</p>
                      <p className="text-xs text-teal-500 mt-1">{post.time}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-teal-600"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Post Content */}
                <p className="text-teal-700 mb-6 leading-relaxed">{post.content}</p>

                {/* Post Actions */}
                <div className="flex items-center gap-6 pt-6 border-t border-emerald-200/30">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-teal-600 hover:text-emerald-600 transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-rose-50 flex items-center justify-center transition-colors group"
                    >
                      <Heart className="w-5 h-5 group-hover:text-rose-500 transition-colors" />
                    </motion.div>
                    <span className="text-sm">{post.likes}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-teal-600 hover:text-emerald-600 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{post.comments}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-teal-600 hover:text-emerald-600 transition-colors ml-auto"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                      <Share2 className="w-5 h-5" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Mentors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-emerald-200/30"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-emerald-600" />
                <h4 className="text-teal-800">Top Mentors</h4>
              </div>

              <div className="space-y-4">
                {topMentors.map((mentor, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-emerald-300">
                      <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-teal-800 truncate text-sm">{mentor.name}</h5>
                      <p className="text-xs text-teal-600 truncate">{mentor.specialty}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-3 h-3 fill-lime-400 text-lime-400" />
                        <span className="text-xs text-teal-600">{mentor.rating}</span>
                        <span className="text-xs text-teal-500">• {mentor.students}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[32px] p-6 shadow-xl text-white"
            >
              <h4 className="text-white mb-6">Community Stats</h4>

              <div className="space-y-4">
                {[
                  { label: "Active Today", value: "12.5K", icon: TrendingUp },
                  { label: "New Members", value: "+215", icon: Users },
                  { label: "Total Posts", value: "45.2K", icon: MessageCircle },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="text-lg">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
