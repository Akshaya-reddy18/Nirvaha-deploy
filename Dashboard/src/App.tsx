import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProtectedRoute from './components/common/ProtectedRoute';
import { AIChatbotPreview } from "./components/AIChatbotPreview";
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

/**
 * Dashboard Routes Component
 */
const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<div className="min-h-screen"><AIChatbotPreview /><MeditationPreview /><SoundHealingPreview /><DashboardPreview /></div>} />
    <Route path="meditation" element={<MeditationPage />} />
    <Route path="sound" element={<SoundHealingPage />} />
    <Route path="community" element={<CommunityPage />} />
    <Route path="chatbot" element={<ChatbotPage />} />
    <Route path="marketplace" element={<MarketplacePage />} />
    <Route path="companion" element={<CompanionPage />} />
    <Route path="profile" element={<ProfilePage />} />
  </Routes>
);

export default function App() {
  return (
    <Router>
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
                <Navigation currentPage="dashboard" onNavigate={() => {}} />
                <DashboardRoutes />
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
    </Router>
  );
}