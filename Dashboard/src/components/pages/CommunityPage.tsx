import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Star, Award, Users, TrendingUp, X, Send } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export function CommunityPage() {
  const { user } = useAuth();
  const [showPostModal, setShowPostModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([
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
  ]);

  const handleCreatePost = () => {
    if (postContent.trim()) {
      const newPost = {
        author: user?.name || "You",
        role: user?.role || "Wellness Seeker",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        time: "just now",
        content: postContent,
        likes: 0,
        comments: 0,
        type: "user",
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
      setShowPostModal(false);
    }
  };

  const handleProfileClick = (post: any) => {
    setSelectedProfile(post);
    setShowProfileModal(true);
  };

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
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="max-w-2xl mx-auto text-4xl md:text-5xl font-bold text-white">
            Connect, share, and grow together on your spiritual journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[32px] p-8 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/30 bg-white/20">
                  <img src={user?.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"} alt={user?.name || "You"} className="w-full h-full object-cover" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPostModal(true)}
                  className="flex-1 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white placeholder-white/60 text-left hover:bg-white/30 transition-all"
                >
                  What's on your mind?
                </motion.button>
              </div>
            </motion.div>

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
                    <motion.button
                      onClick={() => handleProfileClick(post)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-300 hover:border-emerald-500 transition-colors">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-lime-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </motion.button>

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

        {/* Create Post Modal */}
        {showPostModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPostModal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-[32px] p-8 shadow-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPostModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-teal-600"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <h3 className="text-2xl text-emerald-800 mb-6">Share Your Journey</h3>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-emerald-300 flex-shrink-0">
                  <img src={user?.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"} alt="You" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-teal-800 font-semibold">{user?.name || "You"}</p>
                  <p className="text-sm text-teal-600">{user?.role || "Wellness Seeker"}</p>
                </div>
              </div>

              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind? Share your wellness journey, tips, or celebrations..."
                className="w-full h-40 p-4 rounded-2xl border border-emerald-200/50 focus:border-emerald-500 focus:outline-none resize-none text-teal-800 placeholder-teal-400"
              />

              <div className="flex gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPostModal(false)}
                  className="flex-1 px-6 py-3 rounded-full border border-emerald-300 text-teal-800 hover:bg-emerald-50 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCreatePost}
                  disabled={!postContent.trim()}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Post
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Profile View Modal */}
        {showProfileModal && selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProfileModal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-gradient-to-br from-white via-emerald-100 to-teal-200 rounded-[32px] p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProfileModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-teal-600 z-10"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Profile Card */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-emerald-400 mx-auto mb-6">
                  <img src={selectedProfile.avatar} alt={selectedProfile.author} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl text-emerald-800 font-bold mb-2">{selectedProfile.author}</h3>
                <p className="text-teal-700 font-semibold mb-4">{selectedProfile.role}</p>

                {/* Followers/Following/Posts Stats */}
                <div className="flex justify-around gap-4 mb-6 bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-center">
                    <p className="text-2xl text-emerald-600 font-bold">156</p>
                    <p className="text-xs text-teal-600">Followers</p>
                  </div>
                  <div className="w-px bg-emerald-300/30" />
                  <div className="text-center">
                    <p className="text-2xl text-emerald-600 font-bold">84</p>
                    <p className="text-xs text-teal-600">Following</p>
                  </div>
                  <div className="w-px bg-emerald-300/30" />
                  <div className="text-center">
                    <p className="text-2xl text-emerald-600 font-bold">23</p>
                    <p className="text-xs text-teal-600">Posts</p>
                  </div>
                </div>

                {/* Recent Post Preview */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 mb-6 text-left">
                  <p className="text-xs text-teal-600 font-semibold mb-2">Latest Post</p>
                  <p className="text-teal-800 text-sm leading-relaxed mb-4">{selectedProfile.content}</p>
                  <div className="flex gap-4 text-xs text-teal-600">
                    <span>❤️ {selectedProfile.likes} Likes</span>
                    <span>💬 {selectedProfile.comments} Comments</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Follow
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
