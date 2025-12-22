// Login.tsx
import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Sparkles,
  User,
  Users,
  Stethoscope,
  Settings,
} from "lucide-react";

interface UserData {
  email: string;
  password: string;
  role: "user" | "hr" | "doctor" | "admin";
}

const Login: React.FC = () => {
  const defaultValues: UserData = {
    email: "",
    password: "",
    role: "user",
  };

  const [userData, setUserData] = useState<UserData>(defaultValues);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const roles = [
    {
      name: "User",
      icon: User,
      color: "from-emerald-500 to-teal-500",
      description: "Wellness Seeker",
    },
    {
      name: "HR",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      description: "Human Resources",
    },
    {
      name: "Doctor",
      icon: Stethoscope,
      color: "from-cyan-500 to-blue-500",
      description: "Medical Professional",
    },
    {
      name: "Admin",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      description: "System Administrator",
    },
  ] as const;

  const handleRoleChange = (roleName: string) => {
    const roleMap: Record<string, UserData["role"]> = {
      User: "user",
      HR: "hr",
      Doctor: "doctor",
      Admin: "admin",
    };
    setUserData({ ...userData, role: roleMap[roleName] });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.user);
      localStorage.setItem("token", data.token);

      // After successful login, redirect to new dashboard
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  // Quick guest login for local development (gives admin role so dashboards are accessible)
  const handleGuestLogin = () => {
    const guestUser = {
      id: "guest",
      email: "guest@local",
      name: "Guest User",
      role: "user",
      profile: {
        mobile: "",
        age: "",
        gender: "",
        address: "",
        education: "",
        healthCondition: "",
      }
    };
    login(guestUser);
    localStorage.setItem("token", "guest-token");
    navigate("/dashboard");
  };

  // Login page images from public/login page images/ directory - ALL images
  const loginImages = [
    '/login page images/0162a9bb3d5681b7c4d1b352ab79f181.jpg',
    '/login page images/06f05b59b404fc480ebd0bbd18f82eaf.jpg',
    '/login page images/08fe28fa1b0b34e6f9ffc583de5333c7.jpg',
    '/login page images/0c558513c5e6ce2f063fe97fa49ca3cb.jpg',
    '/login page images/0d63397e4cdc8dd996733cf7542118a7.jpg',
    '/login page images/0d9dc03ae5688dd8a0cc81b40f527e34.jpg',
    '/login page images/1c56babf8ee08ef72618944ddaffd0c5.jpg',
    '/login page images/1ee02ec74e0d6af03736194cb5ac61cf.jpg',
    '/login page images/23a38bad5e9b679816454d69de9ee7d8.jpg',
    '/login page images/266f284a6b3f70951f4110a5c5181269.jpg',
    '/login page images/26c4907b882837bcaadbefc561554db7.jpg',
    '/login page images/5137a3a5e022c38ef17091d04503b854.jpg',
    '/login page images/5368a8eab3444348cdcaba606c4d78df.jpg',
    '/login page images/56c1778ef1e81fe8d5c09b3ac6d066d0.jpg',
    '/login page images/588799369bfd354f04c3e7a38c9c31bd.jpg',
    '/login page images/5fed0963a7c63e9dd5448cd26b770526.jpg',
    '/login page images/6068cf3b07cbcfd673e96c5480733d24.jpg',
    '/login page images/68f6df777a5b3dea90a479ca9c9fe55c.jpg',
    '/login page images/6fdbc89a8ad8388dbb117c88248c76de.jpg',
    '/login page images/7f2260ff7968d9ae287a4486d7f9c2bb.jpg',
    '/login page images/83c6fbae3563449e2a7e13c1d16492e9.jpg',
    '/login page images/88ade59100b57b7a19cb26c7d1424be3.jpg',
    '/login page images/8992cfd45d620c6f2a7d7ebee1a30cf5.jpg',
    '/login page images/8b24e779c347680a398409c61ef1a44e.jpg',
    '/login page images/90ffcb125b977f55ebe0b7ace910c202.jpg',
    '/login page images/a864ee0dffcc11c7d023a708c75fa2d7.jpg',
    '/login page images/abbcbd84c8388b6570e0af164bec0f4d.jpg',
    '/login page images/ac0fcf80fb437cfb5642cdf1a4435122.jpg',
    '/login page images/c13728f6e7bf8685e52c41e65eb20fc9.jpg',
    '/login page images/d03ac1bcf4196ffee4038f7a73b69a17.jpg',
    '/login page images/dba9e74182ca53509e7a797358cde048.jpg',
    '/login page images/e40a696cf846f172f5ed46e176480dca.jpg',
    '/login page images/eb3d51084f8b91787ee89a098bb55b97.jpg',
    '/login page images/ed25508cbd221bfa0c4c7e745ac8e308.jpg',
    '/login page images/ed8fa593e26322d2dbc88f511685e44b.jpg',
    '/login page images/ef4f9b6f35c607dd617dc0356495e1b5.jpg',
    '/login page images/f6e5e638d8bebafa10e8648e8e5ed12b.jpg',
    '/login page images/f7591900effaf6b868247ea11a001998.jpg',
  ];


  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-container">
        <a href="/" className="inline-block">
          <img
            src="/logo.png"
            alt="Nirvaha Logo"
            className="h-16 w-16 object-contain rounded-xl cursor-pointer drop-shadow-lg hover:glow-teal transition-all duration-300 hover:scale-105"
          />
        </a>
      </div>
      
      {/* Static Login Page Images Background - Grid Layout with Varying Sizes */}
      <div className="login-grid">
        {(() => {
          // Create varying sizes for visual interest (similar to Canva reference) - increased by 10%
          // Base row size is 110px, so spans calculate from that
          const sizeVariations = [
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 2', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 2' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 2', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 2' },
            { gridRow: 'span 2', gridColumn: 'span 2' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 2', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 2' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
            { gridRow: 'span 2', gridColumn: 'span 1' },
            { gridRow: 'span 1', gridColumn: 'span 1' },
          ];
          
          // Generate enough tiles to fill the entire viewport plus extra for scrolling
          // Calculate based on typical viewport: ~20 columns × ~15 rows = 300+ tiles
          const cellsNeeded = 400;
          const tiles = [];
          
          for (let i = 0; i < cellsNeeded; i++) {
            const imgIndex = i % loginImages.length;
            const sizeIndex = i % sizeVariations.length;
            const size = sizeVariations[sizeIndex];
            
            tiles.push(
              <div
                key={i}
                className="relative"
                style={{
                  // filter: 'blur(0.5px)',
                  gridRow: size.gridRow,
                  gridColumn: size.gridColumn,
                  margin: '0',
                  padding: '0',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <img
                  src={loginImages[imgIndex]}
                  alt={`Login background ${imgIndex + 1}`}
                  className="w-full h-full"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                />
              </div>
            );
          }
          
          return tiles;
        })()}
      </div>

      {/* Dark Overlay for better contrast */}
      <div 
        className="absolute inset-0 w-full h-full bg-black/40"
      />
      
      {/* Login Modal Container - Modern Style */}
      <motion.div 
        className="relative z-10 w-full max-w-md mx-auto rounded-2xl p-8 sm:p-10 transition-all duration-300 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
              {/* Title */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 
                  className="text-3xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                >
                  Welcome Back
                </h1>
                <p 
                  className="text-sm mb-6 text-gray-300"
                >
                  Sign in to continue your spiritual wellness journey
                </p>
              </motion.div>

              {/* Role Selector */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  {roles.map((role, index) => (
                    <motion.button
                      key={role.name}
                      onClick={() => handleRoleChange(role.name)}
                      className={`text-base font-medium transition-all duration-200 pb-2 ${
                        userData.role === role.name.toLowerCase()
                          ? "font-semibold border-b-2 text-emerald-400 border-emerald-400"
                          : "opacity-60 hover:opacity-100 text-gray-300"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      {role.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Login Form */}
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Mail 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:border-emerald-400 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20"
                    required
                  />
                </motion.div>

                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Lock 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:border-emerald-400 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 text-base font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span className="relative z-10">Continue</span>
                    </>
                  )}
                </motion.button>

                {/* Guest login for local development */}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={handleGuestLogin}
                    className="w-full py-3 px-6 text-sm font-medium rounded-lg border border-emerald-500 text-emerald-500 bg-white/5 hover:bg-emerald-50 transition-all duration-200"
                  >
                    Continue as Guest (dev)
                  </button>
                </div>
              </form>

              {/* Separator */}
              <motion.div 
                className="text-center my-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-gray-500 text-xs">OR</span>
              </motion.div>

              {/* Create Account Link */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  onClick={() => navigate("/signup")}
                  className="text-sm text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:underline"
                >
                  Don't have an account? Sign up here
                </button>
              </motion.div>
            </motion.div>

      {/* Simple Footer */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-10 px-6 py-4 text-center text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a 
            href="#" 
            className="hover:text-emerald-400 transition-colors"
          >
            Privacy policy
          </a>
          <span>|</span>
          <a 
            href="#" 
            className="hover:text-emerald-400 transition-colors"
          >
            Terms
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
