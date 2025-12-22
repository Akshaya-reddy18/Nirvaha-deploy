import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import anime from 'animejs';

interface EnhancedHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
  username?: string;
  email?: string;
}

interface ProfileData {
  username: string;
  email: string;
  mobile: string;
  age: string;
  gender: string;
  address: string;
  education: string;
  healthCondition: string;
  additionalInfo?: string;
}

const EnhancedHeader: React.FC<EnhancedHeaderProps> = ({ 
  activeTab, 
  onTabChange, 
  username, 
  email, 
  tabs 
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { updateProfile, logout } = useAuth();
  const logoRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    username: username || '',
    email: email || '',
    mobile: '',
    age: '',
    gender: '',
    address: '',
    education: '',
    healthCondition: '',
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfileData(prev => ({ ...prev, ...JSON.parse(savedProfile) }));
    }
  }, []);

  // Anime.js animations on mount
  useEffect(() => {
    if (logoRef.current) {
      anime({
        targets: logoRef.current,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .8)',
      });
    }

    if (navButtonsRef.current) {
      anime({
        targets: navButtonsRef.current.children,
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 200 }),
        duration: 600,
        easing: 'easeOutQuad',
      });
    }
  }, []);

  const handleSave = () => {
    updateProfile({
      mobile: profileData.mobile,
      age: profileData.age,
      gender: profileData.gender,
      address: profileData.address,
      education: profileData.education,
      healthCondition: profileData.healthCondition,
      additionalInfo: profileData.additionalInfo
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-[#4D3062]/95 via-[#2B1E16]/95 to-[#4D3062]/95 border-b border-[#E6B21E]/20 shadow-lg"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          ref={logoRef}
          className="flex items-center gap-3 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E6B21E] to-[#00C9B1] p-0.5 shadow-lg group-hover:shadow-[#E6B21E]/50 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-[#2B1E16] flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Nirvaha Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-[#E6B21E] font-bold text-xl">N</span>';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs - Center */}
        <div ref={navButtonsRef} className="flex gap-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`relative font-semibold text-lg px-4 py-2 transition-all duration-300 ${
                activeTab === tab
                  ? 'text-[#E6B21E]'
                  : 'text-[#F5F2EE] hover:text-[#00C9B1]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  textShadow: ['0 0 0px rgba(230, 178, 30, 0)', '0 0 20px rgba(230, 178, 30, 0.8)'],
                  duration: 300,
                  easing: 'easeOutQuad',
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  textShadow: ['0 0 20px rgba(230, 178, 30, 0.8)', '0 0 0px rgba(230, 178, 30, 0)'],
                  duration: 300,
                  easing: 'easeOutQuad',
                });
              }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#E6B21E] via-[#00C9B1] to-[#E6B21E] rounded-full shadow-lg shadow-[#E6B21E]/50"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Profile Button - Right */}
        <div className="relative">
          <motion.button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E6B21E] to-[#00C9B1] flex items-center justify-center shadow-lg hover:shadow-[#E6B21E]/50 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle profile menu"
            title="Profile menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <User className="w-6 h-6 text-[#2B1E16] relative z-10" />
          </motion.button>

          {/* Profile Modal */}
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="absolute right-0 mt-4 w-[420px] bg-gradient-to-br from-[#F5F2EE] to-white rounded-3xl shadow-2xl border-2 border-[#E6B21E]/30 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4D3062] mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-gradient-to-b from-[#E6B21E] to-[#00C9B1] rounded-full" />
                    Profile
                  </h3>
                  
                  {isEditing ? (
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Username"
                        value={profileData.username}
                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile"
                        value={profileData.mobile}
                        onChange={(e) => setProfileData({ ...profileData, mobile: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                      />
                      <input
                        type="number"
                        placeholder="Age"
                        value={profileData.age}
                        onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                      />
                      <select
                        value={profileData.gender}
                        onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                        aria-label="Select gender"
                        title="Gender"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Education"
                        value={profileData.education}
                        onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                        className="input-field col-span-1 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                      />
                      <textarea
                        placeholder="Present Address"
                        value={profileData.address}
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                        className="input-field col-span-2 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                        rows={2}
                      />
                      <textarea
                        placeholder="Health Condition"
                        value={profileData.healthCondition}
                        onChange={(e) => setProfileData({ ...profileData, healthCondition: e.target.value })}
                        className="input-field col-span-2 bg-white/80 border-[#E6B21E]/30 focus:border-[#00C9B1] rounded-xl"
                        rows={2}
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSave}
                        className="col-span-2 py-3 px-6 bg-gradient-to-r from-[#E6B21E] to-[#00C9B1] text-[#2B1E16] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E6B21E]/30 transition-all duration-300"
                      >
                        Save Changes
                      </motion.button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/60 p-3 rounded-xl">
                          <p className="text-sm text-[#4D3062]/60 font-medium">Username</p>
                          <p className="font-semibold text-[#2B1E16]">{profileData.username}</p>
                        </div>
                        <div className="bg-white/60 p-3 rounded-xl">
                          <p className="text-sm text-[#4D3062]/60 font-medium">Email</p>
                          <p className="font-semibold text-[#2B1E16] text-sm">{profileData.email}</p>
                        </div>
                        {profileData.mobile && (
                          <div className="bg-white/60 p-3 rounded-xl">
                            <p className="text-sm text-[#4D3062]/60 font-medium">Mobile</p>
                            <p className="font-semibold text-[#2B1E16]">{profileData.mobile}</p>
                          </div>
                        )}
                        {profileData.age && (
                          <div className="bg-white/60 p-3 rounded-xl">
                            <p className="text-sm text-[#4D3062]/60 font-medium">Age</p>
                            <p className="font-semibold text-[#2B1E16]">{profileData.age}</p>
                          </div>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsEditing(true)}
                        className="w-full py-3 px-6 bg-gradient-to-r from-[#E6B21E]/20 to-[#00C9B1]/20 text-[#4D3062] font-semibold rounded-xl hover:from-[#E6B21E]/30 hover:to-[#00C9B1]/30 transition-all duration-300 border border-[#E6B21E]/30"
                      >
                        Edit Profile
                      </motion.button>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="w-full mt-4 py-3 px-6 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 font-semibold border border-red-200"
                  >
                    Logout
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default EnhancedHeader;
