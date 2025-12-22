import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function WellnessHeader() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-emerald-500/20 bg-slate-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-emerald-300 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/ott"
              className="text-white hover:text-emerald-300 font-medium text-lg transition-colors duration-300 relative group"
            >
              Wellness
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/ott"
              className="text-white hover:text-emerald-300 font-medium text-lg transition-colors duration-300 relative group"
            >
              OTT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/gamification"
              className="text-white hover:text-emerald-300 font-medium text-lg transition-colors duration-300 relative group"
            >
              Gamification
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}





