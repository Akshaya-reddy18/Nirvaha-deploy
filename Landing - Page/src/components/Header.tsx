import React, { useEffect, useRef, createContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Context to provide the bounding rect of the header Nirvaha
export const HeaderNirvahaRectContext = createContext<DOMRect | null>(null);

interface HeaderProps {
  onNirvahaClick?: () => void;
  logoSrc?: string;
  logoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({ onNirvahaClick, logoSrc = '/logo.png', logoAlt = 'Nirvaha Logo' }) => {
  const [isLightNav, setIsLightNav] = React.useState(false);
  const [nirvahaRect, setNirvahaRect] = React.useState<DOMRect | null>(null);
  const nirvahaRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight || 1;
      const ratio = scrollY / viewportHeight;
      // Switch to light glass after ~35% scroll
      setIsLightNav(ratio > 0.35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll as any);
  }, []);

  useEffect(() => {
    const updateRect = () => {
      if (nirvahaRef.current) {
        const rect = nirvahaRef.current.getBoundingClientRect();
        setNirvahaRect(rect);
        if (rect.width && rect.height) {
          console.log('Header Nirvaha rect:', rect);
        }
      }
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, []);

  const handleLogoClick = () => {
    if (onNirvahaClick) {
      onNirvahaClick();
    } else {
      navigate('/');
    }
  };

  return (
    <HeaderNirvahaRectContext.Provider value={nirvahaRect}>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-[10px] transition-colors duration-500 ${
          isLightNav
            ? 'bg-[rgba(223,250,246,0.88)] border-emerald-200/60'
            : 'bg-[rgba(7,24,22,0.7)] border-[#00FFC6]/20'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50 rounded-xl transition-all duration-300 hover:scale-105 "
                aria-label="Go to home page"
              >
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain rounded-xl cursor-pointer drop-shadow-lg hover:glow-teal"
                  decoding="async"
                  loading="eager"
                />
              </button>
            </div>
            <div className="flex items-center ml-auto">
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-[#00FFC6]/10 to-[#1ED5A6]/10 border border-[#00FFC6]/30 hover:from-[#00FFC6]/20 hover:to-[#1ED5A6]/20 hover:border-[#00FFC6]/50 hover:text-[#00FFC6] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,198,0.25)] transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </HeaderNirvahaRectContext.Provider>
  );
};

export default Header;