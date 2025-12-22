import React, { useEffect } from 'react';
import CommunityHero from '../components/landing/CommunityHero';
import GoldenShowcase from '../components/landing/GoldenShowcase';
import ServicesShowcase from '../components/landing/ServicesShowcase';
import Community from '../components/landing/Community';
import CommunityTestimonials from '../components/landing/CommunityTestimonials';
import CommunityGallery from '../components/landing/CommunityGallery';
import CollaboratorsSection from '../components/landing/CollaboratorsSection';
import Contact from '../components/landing/Contact';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Fade-up animation on scroll
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
  );
};

export default LandingPage;
