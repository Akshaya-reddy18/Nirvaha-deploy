import React, { useEffect, useState } from 'react';

const themeGradient = "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400";

const collaborationImages = [
  { image: "/colab/c1.jpeg", alt: "Collaboration 1" },
  { image: "/colab/c2.jpeg", alt: "Collaboration 2" },
  { image: "/colab/c3.jpeg", alt: "Collaboration 3" },
  { image: "/colab/c4.jpeg", alt: "Collaboration 4" },
  { image: "/colab/c5.jpeg", alt: "Collaboration 5" },
  { image: "/colab/c6.jpeg", alt: "Collaboration 6" },
];

const featuredImages = [
  { image: "/feat/f1.jpeg", alt: "Featured Partner 1" },
  { image: "/feat/f2.jpeg", alt: "Featured Partner 2" },
  { image: "/feat/f3.png", alt: "Featured Partner 3" },
  { image: "/feat/f4.png", alt: "Featured Partner 4" },
];

// Two-logo strip to show beside headings as "Supported by"
const supportedImages = [
  { image: "/supp/s1.jpg", alt: "Supporting Logo 1" },
  { image: "/supp/s2.png", alt: "Supporting Logo 2" },
];

const CARD_INTERVAL = 3000;

const CollaboratorsSection: React.FC = () => {
  // Shared tick so all galleries rotate at the same moment
  const [tick, setTick] = useState(0);
  const [featuredList, setFeaturedList] = useState(featuredImages);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), CARD_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const collabIdx = tick % collaborationImages.length;
  const featuredIdx = featuredList.length > 0 ? tick % featuredList.length : 0;
  const supportedIdx = tick % supportedImages.length;

  const currentCollab = collaborationImages[collabIdx];
  const currentFeatured = featuredList[featuredIdx];

  const handleFeaturedError = () => {
    // Remove the current (empty/broken) image from rotation
    setFeaturedList((prev) => {
      if (prev.length === 0) return prev;
      const idx = tick % prev.length;
      const next = prev.filter((_, i) => i !== idx);
      return next;
    });
  };
  const currentSupported = supportedImages[supportedIdx];

  return (
    <section className="collaborators-section-bg px-4 py-16 md:py-20 min-h-[80vh] flex items-center">
      <div className="max-w-[1600px] w-[98%] mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 backdrop-blur-xl border border-emerald-100 fade-up">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="heading-secondary mb-3">
            Collaborators &{" "}
            <span className={`${themeGradient} bg-clip-text text-transparent`}>
              Partners
            </span>
          </h2>
          <p className="text-base md:text-lg text-teal-700 max-w-2xl mx-auto">
            A growing ecosystem of mindful creators, therapists, and wellness studios shaping the Nirvaha experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Left half - Collaborations */}
          <div className="relative">
            <div className="mb-5">
              <h3 className="heading-tertiary">
                Collaborations
              </h3>
              <p className="text-sm md:text-base text-teal-600 mt-1">
                Studios and spaces that bring depth, ritual, and lived wisdom into Nirvaha.
              </p>
            </div>
              <div className="relative h-full">
                <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md overflow-hidden flex items-center justify-center transition-all duration-700 ease-out transform h-64 md:h-80">
                  <img 
                    src={currentCollab.image} 
                    alt={currentCollab.alt}
                    className="w-full h-full object-contain"
                  />
              </div>
            </div>
          </div>

          {/* Right half - Featured */}
          <div className="relative">
              <div className="mb-5">
              <h3 className="heading-tertiary">
                Featured Partners
              </h3>
              <p className="text-sm md:text-base text-teal-600 mt-1">
                Innovation partners helping us bridge ancient wisdom with mindful technology.
              </p>
            </div>
            <div className="relative h-full">
              {featuredList.length > 0 ? (
                <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md overflow-hidden flex items-center justify-center transition-all duration-700 ease-out transform h-64 md:h-80">
                  <img 
                    src={currentFeatured.image} 
                    alt={currentFeatured.alt}
                    className="w-full h-full object-contain"
                    onError={handleFeaturedError}
                  />
                </div>
              ) : (
                <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md overflow-hidden flex items-center justify-center h-64 md:h-80">
                  <span className="text-teal-500 text-sm">No featured partners available</span>
                </div>
              )}
            </div>
          </div>

          {/* Far right - Supported by */}
          <div className="relative">
            <div className="mb-5">
              <h3 className="heading-tertiary">Supported by</h3>
              <p className="text-sm md:text-base text-teal-600 mt-1">
                Organizations backing our mission with resources and expertise.
              </p>
            </div>
            <div className="relative h-full">
              <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-md overflow-hidden flex items-center justify-center transition-all duration-700 ease-out transform h-64 md:h-80">
                <img
                  src={currentSupported.image}
                  alt={currentSupported.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
