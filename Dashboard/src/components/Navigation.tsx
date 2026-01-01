import { motion } from "motion/react";
import { Home, Waves, Volume2, LayoutDashboard, Users, BookOpen, ShoppingBag, MessageCircle, Menu, X, ChevronDown, User, Settings, LogOut, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navigation({ currentPage, onNavigate }: { currentPage: string; onNavigate?: (page: string) => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresMenuOpen, setFeaturesMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Use React Router navigation
      switch(page) {
        case 'home':
          navigate('/dashboard/overview');
          break;
        case 'overview':
          navigate('/dashboard/overview');
          break;
        case 'meditation':
          navigate('/dashboard/meditation');
          break;
        case 'sound':
          navigate('/dashboard/sound');
          break;
        case 'chatbot':
          navigate('/dashboard/chatbot');
          break;
        case 'community':
          navigate('/dashboard/community');
          break;
        case 'marketplace':
          navigate('/dashboard/marketplace');
          break;
        case 'companion':
          navigate('/dashboard/companion');
          break;
        case 'profile':
          navigate('/dashboard/profile');
          break;
        default:
          navigate(`/dashboard/${page}`);
      }
    }
    setMobileMenuOpen(false);
    setFeaturesMenuOpen(false);
    setProfileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const featureItems = [
    { id: "meditation", label: "Meditation", icon: Waves },
    { id: "sound", label: "Sound Healing", icon: Volume2 },
    { id: "chatbot", label: "AI Guide", icon: MessageCircle },
    { id: "community", label: "Community", icon: Users },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-200/30 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigate("home")}
            >
              <img
                src="/logo.png"
                alt="Nirvaha Logo"
                className="w-12 h-12 rounded-lg object-contain drop-shadow-lg"
              />
              <div>
                <h3 className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                  NIRVAHA
                </h3>
                <p className="text-xs text-teal-600">Harmony of Mind</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Home */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate("home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all ${
                  currentPage === "home"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-teal-700 hover:bg-emerald-50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Home</span>
              </motion.button>

              {/* Features Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFeaturesMenuOpen(!featuresMenuOpen)}
                  onMouseEnter={() => setFeaturesMenuOpen(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all ${
                    ["meditation", "sound", "chatbot", "community"].includes(currentPage)
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "text-teal-700 hover:bg-emerald-50"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Features</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                {featuresMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setFeaturesMenuOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-200/30 overflow-hidden"
                  >
                    {featureItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                        onClick={() => {
                          handleNavigate(item.id);
                          setFeaturesMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                          currentPage === item.id
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-teal-700"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Marketplace */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate("marketplace")}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all ${
                  currentPage === "marketplace"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-teal-700 hover:bg-emerald-50"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm">Marketplace</span>
              </motion.button>

              {/* Companion */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate("companion")}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all ${
                  currentPage === "companion"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-teal-700 hover:bg-emerald-50"
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-sm">Companion</span>
              </motion.button>
            </div>

            {/* Profile Dropdown (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                    <span className="text-lg">🧘</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-teal-800">Arjun M.</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-teal-600" />
                </motion.button>

                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-200/30 overflow-hidden"
                  >
                    <div className="p-4 border-b border-emerald-200/30">
                      <p className="text-teal-800 mb-1">Arjun Mehta</p>
                      <p className="text-sm text-teal-600">arjun.mehta@example.com</p>
                    </div>

                    <motion.button
                      whileHover={{ x: 4, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                      onClick={() => {
                        handleNavigate("profile");
                        setProfileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-3 text-teal-700 transition-all ${
                        currentPage === "profile" ? "bg-emerald-50 text-emerald-700" : ""
                      }`}
                    >
                      <User className="w-5 h-5" />
                      <span>My Profile</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ x: 4, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                      className="w-full flex items-center gap-3 px-6 py-3 text-teal-700 transition-all"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Settings</span>
                    </motion.button>

                    <div className="border-t border-emerald-200/30">
                      <motion.button
                        whileHover={{ x: 4, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                        onClick={() => {
                          handleLogout();
                          setProfileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-6 py-3 text-rose-600 transition-all"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[76px] left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-b border-emerald-200/30 shadow-xl max-h-[calc(100vh-76px)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {/* Profile Section */}
            <div className="mb-4 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                  <span className="text-2xl">🧘</span>
                </div>
                <div>
                  <p className="text-teal-800">Arjun Mehta</p>
                  <p className="text-sm text-teal-600">View Profile</p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleNavigate("profile");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-white rounded-xl text-teal-800 text-sm"
              >
                Go to Profile
              </motion.button>
            </div>

            {/* Home */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleNavigate("home");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "text-teal-700 hover:bg-emerald-50"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </motion.button>

            {/* Features */}
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm text-teal-600">Features</div>
              {featureItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "text-teal-700 hover:bg-emerald-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Marketplace */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleNavigate("marketplace");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                currentPage === "marketplace"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "text-teal-700 hover:bg-emerald-50"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Marketplace</span>
            </motion.button>

            {/* Companion */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleNavigate("companion");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                currentPage === "companion"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "text-teal-700 hover:bg-emerald-50"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Companion</span>
            </motion.button>

            {/* Sign Out */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-rose-600 hover:bg-rose-50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}