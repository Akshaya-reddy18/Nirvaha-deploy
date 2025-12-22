import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, Home, Heart, Users, Film, Gamepad2, User, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Toaster } from '../ui/sonner';

const navItems = [
  { name: 'Overview', icon: Home, path: '/dashboard' },
  { name: 'My Practice', icon: Heart, path: '/dashboard/practice' },
  { name: 'Community', icon: Users, path: '/dashboard/community' },
  { name: 'OTT', icon: Film, path: '/dashboard/ott' },
  { name: 'Gamification', icon: Gamepad2, path: '/dashboard/gamification' },
  { name: 'Profile', icon: User, path: '/dashboard/profile' },
];

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div className="flex h-screen bg-[#0A0F0F] overflow-hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#1A1F1F] text-[#00FFC6]"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ 
          x: isMobileMenuOpen ? 0 : '-100%',
          width: isMobileMenuOpen ? '280px' : '0'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        className={cn(
          "fixed md:relative z-40 h-full bg-[#111717] border-r border-[#1A1F1F] overflow-hidden",
          isSidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-[#1A1F1F]">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FFC6] to-[#1ED5A6] flex items-center justify-center">
                  <span className="text-[#0A0F0F] font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] bg-clip-text text-transparent">
                  Nirvaha
                </span>
              </motion.div>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-[#1A1F1F] text-[#6B7280] hover:text-[#00FFC6] transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={cn(
                        "flex items-center w-full p-3 rounded-lg transition-all duration-200",
                        isActive
                          ? 'bg-gradient-to-r from-[#00FFC6]/10 to-[#1ED5A6]/10 text-[#00FFC6]'
                          : 'text-[#E5E7EB] hover:bg-[#1A1F1F]',
                        !isSidebarOpen && 'justify-center'
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {isSidebarOpen && (
                        <span className="ml-3 text-sm font-medium">{item.name}</span>
                      )}
                      {isActive && isSidebarOpen && (
                        <motion.span
                          layoutId="activeNavItem"
                          className="absolute right-4 w-2 h-2 bg-[#00FFC6] rounded-full"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-[#1A1F1F]">
            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center w-full p-3 text-[#E5E7EB] hover:bg-[#1A1F1F] rounded-lg transition-colors",
                !isSidebarOpen && 'justify-center'
              )}
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && (
                <span className="ml-3 text-sm font-medium">Logout</span>
              )}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-[#0A0F0F] p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default DashboardLayout;
