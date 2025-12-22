/**
 * Nirvaha App Component
 * 
 * Main application component that handles routing, authentication, and layout.
 * 
 * Features:
 * - Role-based authentication (user, doctor, hr, admin)
 * - Dashboard layouts for different user types
 * - Landing page with wellness services
 * - Admin panel for platform management
 * - Protected routes with role-based access control
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import CommunityHero from './components/CommunityHero';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import GoldenShowcase from './components/GoldenShowcase';
import ServicesShowcase from './components/ServicesShowcase';
import Community from './components/Community';
import CommunityTestimonials from './components/CommunityTestimonials';
import CommunityGallery from './components/CommunityGallery';
import CollaboratorsSection from './components/CollaboratorsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import WellnessHeader from './components/WellnessHeader';
import MeditationLanding from './pages/Meditation';
import MudraMeditation from './pages/Meditation/Mudra';
import GuidedMeditationPage from './pages/Meditation/Guided';
import ZenchatPage from './pages/Zenchat';
import DiscussionRoomPage from './pages/DiscussionRoom';
import SoundHealingPage from './pages/SoundHealing';
import PersonalizedSessionPage from './pages/PersonalizedSession';
import CorporatePlan from './components/CorporatePlan';
import Services from './components/Services';
import ZenChatClassic from './components/ZenChat';
import GuidedMeditationLegacy from './components/GuidedMeditation';
import SoundHealingLegacy from './components/SoundHealing';
import Marketplace from './components/Marketplace';
import WellnessEvents from './components/WellnessEvents';
import PersonalizedSessionsLegacy from './components/PersonalizedSessions';
import DiscussionRoomsLegacy from './components/DiscussionRooms';
import ProfessionalPage from './components/ProfessionalPage';
import Profile from './components/Profile';
import RegisterEvent from './components/RegisterEvent';
import CreateRoom from './components/CreateRoom';
import GamificationSection from './components/Dashboard/GamificationSection';
import AdminHRPage from './components/AdminHRPage';
import AdminMarketplacePage from './components/AdminMarketplacePage';
import RegisterCompanionRequest from './components/RegisterCompanionRequest';
import DoctorPage from './components/DoctorPage';
import EmployeeAnalyticsComponent from './components/EmployeeAnalytics';
import DoctorAvailabilityComponent from './components/DoctorAvailability';

// Third-party utilities
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";

// Dashboard Components
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import OverviewPage from "./components/Dashboard/OverviewPage";
import ProfilePage from "./components/Dashboard/ProfilePage";
import PlaceholderPage from "./components/Dashboard/PlaceholderPage";

// Core app components
import ProtectedRoute from './components/ProtectedRoute';

// Admin components
import AdminPage from './components/AdminPage';
import CompanionPage from './components/CompanionPage';
import CompanionRequestsReviewPage from './components/CompanionRequestsReviewPage';

/**
 * Dashboard Routes Component
 * 
 * Handles the dashboard routing logic and component rendering based on the current route.
 */
const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<OverviewPage />} />
    <Route 
      path="practice" 
      element={
        <PlaceholderPage 
          title="My Practice" 
          description="Track your meditation, sound healing, and chat history in one place." 
        />
      } 
    />
    <Route 
      path="community" 
      element={
        <PlaceholderPage 
          title="Community" 
          description="Connect with like-minded individuals on their wellness journey." 
        />
      } 
    />
    <Route 
      path="ott" 
      element={
        <PlaceholderPage 
          title="Nirvaha OTT" 
          description="Access exclusive wellness content, guided sessions, and more." 
        />
      } 
    />
    <Route 
      path="gamification" 
      element={
        <PlaceholderPage 
          title="Gamification" 
          description="Track your progress, earn badges, and stay motivated on your wellness journey." 
        />
      } 
    />
    <Route path="profile" element={<ProfilePage />} />
  </Routes>
);

/**
 * Main App Content Component
 * 
 * Handles the main routing logic and component rendering based on the current route.
 * Includes authentication checks and role-based access control.
 */
const MainAppContent = () => {

  // Calm fade-up reveals using IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
      <div className="min-h-screen spiritual-page-bg relative overflow-hidden">
        {/* Sacred Symbol Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="sacred-symbol absolute text-6xl sm:text-7xl lg:text-8xl" style={{ left: '5%', top: '8%' }}>ॐ</span>
          <span className="sacred-symbol absolute text-5xl sm:text-6xl lg:text-7xl" style={{ left: '20%', top: '30%' }}>ॐ</span>
          <span className="sacred-symbol absolute text-6xl sm:text-7xl lg:text-8xl" style={{ left: '65%', top: '12%' }}>ॐ</span>
          <span className="sacred-symbol absolute text-5xl sm:text-6xl lg:text-7xl" style={{ left: '80%', top: '40%' }}>ॐ</span>
          <span className="sacred-symbol absolute text-6xl sm:text-7xl lg:text-8xl" style={{ left: '15%', top: '65%' }}>ॐ</span>
          <span className="sacred-symbol absolute text-5xl sm:text-6xl lg:text-7xl" style={{ left: '55%', top: '75%' }}>ॐ</span>

          <span className="sacred-symbol absolute text-4xl sm:text-5xl lg:text-6xl" style={{ left: '35%', top: '18%' }}>卍</span>
          <span className="sacred-symbol absolute text-5xl sm:text-6xl lg:text-7xl" style={{ left: '72%', top: '28%' }}>卍</span>
          <span className="sacred-symbol absolute text-4xl sm:text-5xl lg:text-6xl" style={{ left: '10%', top: '45%' }}>卍</span>
          <span className="sacred-symbol absolute text-5xl sm:text-6xl lg:text-7xl" style={{ left: '42%', top: '55%' }}>卍</span>
          <span className="sacred-symbol absolute text-4xl sm:text-5xl lg:text-6xl" style={{ left: '85%', top: '70%' }}>卍</span>
        </div>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={
          <div className="min-h-screen relative">
            <SEOHead 
              title="Nirvaha - AI-Powered Holistic Mental Wellness Platform | Spiritual Healing & Therapy"
              description="Transform your mental wellness with Nirvaha's AI-powered emotional healing platform. Combining ancient spiritual wisdom with modern therapy, meditation, and professional counseling services for complete holistic healing."
              keywords="mental wellness, AI therapy, meditation, holistic healing, emotional support, spiritual wellness, Bhagavad Gita, modern therapy, mindfulness, stress relief, anxiety treatment, depression help, corporate wellness, mental health app"
              canonical="https://nirvaha.org"
            />
            <Header />
            <main>
              <CommunityHero />
              <GoldenShowcase />
              <ServicesShowcase />
              <Community />
              <CommunityTestimonials />
              <CommunityGallery />
              <CollaboratorsSection />
            </main>
            <Contact />
            <Footer />
          </div>
        } />

        {/* Public Routes */}
        <Route path="/login" element={
          <div className="min-h-screen">  
            <main>
              <Login />
            </main>
          </div>
        } />
        <Route path="/signup" element={
          <div className="min-h-screen">
            <main>
              <Signup />
            </main>
          </div>
        } />
        
        {/* Wellness Feature Routes - with WellnessHeader */}
        <Route path="/meditation" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><MeditationLanding /></main><Footer /></div>} />
        <Route path="/meditation/mudra" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><MudraMeditation /></main><Footer /></div>} />
        <Route path="/meditation/guided" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><GuidedMeditationPage /></main><Footer /></div>} />
        <Route path="/zenchat" element={<ZenchatPage />} />
        <Route path="/discussion" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><DiscussionRoomPage /></main><Footer /></div>} />
        <Route path="/discussion-room" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><DiscussionRoomPage /></main><Footer /></div>} />
        <Route path="/sound-healing" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><SoundHealingPage /></main><Footer /></div>} />
        <Route path="/personalized-session" element={<div className="min-h-screen"><WellnessHeader /><main className="pt-20"><PersonalizedSessionPage /></main><Footer /></div>} />
        {/* Removed /create-account route - use /signup (Signup component) instead */}
        <Route path="/contact" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/corporate" element={
          <div className="min-h-screen">
            <SEOHead 
              title="Corporate Wellness Programs | Nirvaha - AI-Powered Employee Mental Health Solutions"
              description="Transform your workplace with Nirvaha's comprehensive corporate wellness programs. AI-powered mental health solutions, stress management, and employee wellness initiatives for improved productivity and satisfaction."
              keywords="corporate wellness, employee mental health, workplace stress management, corporate meditation, employee wellness programs, HR wellness solutions, workplace mindfulness, corporate therapy"
              canonical="https://nirvaha.org/corporate"
            />
            <Header />
            <main>
              <CorporatePlan />
            </main>
            <Footer />
          </div>
        } />

        {/* Service Routes */}
        <Route path="/services" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Services />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/zenchat-classic" element={
          <div className="min-h-screen">
            <Header />
            <main className="pt-20">
              <ZenChatClassic />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/guided-meditation-legacy" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <GuidedMeditationLegacy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/sound-healing-legacy" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <SoundHealingLegacy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/marketplace" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Marketplace />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/events" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <WellnessEvents />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/personalized-sessions" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <PersonalizedSessionsLegacy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/discussion-rooms" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <DiscussionRoomsLegacy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/professional" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <ProfessionalPage />
            </main>
            <Footer />
          </div>
        } />

        {/* Protected Service Routes */}
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <Profile />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/register-event" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <RegisterEvent />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/create-room" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <CreateRoom />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/gamification" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <GamificationSection />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <AdminPage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/admin/hr" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <AdminHRPage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/admin/marketplace" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <AdminMarketplacePage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/admin/companion-requests" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <CompanionRequestsReviewPage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={
          <ProtectedRoute allowedRoles={['user', 'admin', 'hr', 'doctor']}>
            <DashboardLayout>
              <DashboardRoutes />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        {/* Legacy dashboard route - redirect to new dashboard */}
        <Route path="/old-dashboard" element={<Navigate to="/dashboard" replace />} />

        {/* Companion and Doctor Routes */}
        <Route path="/companion" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <CompanionPage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/doctor" element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <DoctorPage />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/register-companion-request" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <RegisterCompanionRequest />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />

        {/* Legacy Routes for backward compatibility */}
        <Route path="/employee-analytics" element={
          <ProtectedRoute allowedRoles={['user', 'doctor', 'hr', 'admin']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <EmployeeAnalyticsComponent />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/doctor-availability" element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <div className="min-h-screen">
              <Header />
              <main>
                <DoctorAvailabilityComponent />
              </main>
              <Footer />
            </div>
          </ProtectedRoute>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

/**
 * Main App Component
 * 
 * Root component that provides context providers and routing setup.
 * Wraps the entire application with necessary providers for state management,
 * authentication, and UI components.
 */
const App = () => {
  return (
    <>
      <MainAppContent />
      <Toaster />
      <Sonner />
    </>
  );
};

export default App;
