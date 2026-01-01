import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProtectedRoute from './components/common/ProtectedRoute';
import { RecentActivityPanel } from "./components/RecentActivityPanel";
import { ActivityAnalyticsPanel } from "./components/ActivityAnalyticsPanel";
import { MeditationPreview } from "./components/MeditationPreview";
import { SoundHealingPreview } from "./components/SoundHealingPreview";
import { DashboardPreview } from "./components/DashboardPreview";
import { MeditationPage } from "./components/pages/MeditationPage";
import { SoundHealingPage } from "./components/pages/SoundHealingPage";
import { CommunityPage } from "./components/pages/CommunityPage";
import { ChatbotPage } from "./components/pages/ChatbotPage";
import { MarketplacePage } from "./components/pages/MarketplacePage";
import { CompanionPage } from "./components/pages/CompanionPage";
import { ProfilePage } from "./components/ProfilePage";
import { Navigation } from "./components/Navigation";
import Footer from "./components/landing/Footer";

/**
 * Dashboard Routes Component
 */
const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0a2f2a 0%, #0f3d38 14%, #1a5d54 28%, #2e7f74 42%, #4fa89d 56%, #6dc5b8 70%, #8dd9ce 84%, #a9e7da 100%)" }}><ActivityAnalyticsPanel /><MeditationPreview /><SoundHealingPreview /></div>} />
    <Route path="meditation" element={<MeditationPage />} />
    <Route path="sound" element={<SoundHealingPage />} />
    <Route path="community" element={<CommunityPage />} />
    <Route path="chatbot" element={<ChatbotPage />} />
    <Route path="marketplace" element={<MarketplacePage />} />
    <Route path="companion" element={<CompanionPage />} />
    <Route path="profile" element={<ProfilePage />} />
  </Routes>
);

function AppInner() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  return (
      <div className="min-h-screen spiritual-page-bg relative overflow-hidden">

        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard Routes - Protected */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute allowedRoles={['user', 'admin', 'hr', 'doctor']}>
                <>
                  <Navigation currentPage="dashboard" />
                  <DashboardRoutes />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />

          {/* Catch-all redirect to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global Toasters */}
        <Toaster />
        <Sonner />
      </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}