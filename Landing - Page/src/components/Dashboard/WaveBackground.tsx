import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WaveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const wave3Ref = useRef<SVGPathElement>(null);
  const wave4Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const waves = [wave1Ref.current, wave2Ref.current, wave3Ref.current, wave4Ref.current];

    // Animate each wave with different speeds and directions
    waves.forEach((wave, index) => {
      if (!wave) return;

      const duration = 8 + index * 2; // Different speeds
      const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
      const yOffset = index * 15; // Vertical offset

      // Create morphing animation for wave paths
      gsap.to(wave, {
        attr: {
          d: `M0,${100 + yOffset + Math.sin(Date.now() * 0.001) * 20} 
              Q250,${80 + yOffset} 500,${100 + yOffset} 
              T1000,${100 + yOffset} 
              T1500,${100 + yOffset} 
              T2000,${100 + yOffset} 
              V400 H0 Z`
        },
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Horizontal movement (front and back)
      gsap.to(wave, {
        x: direction * 100,
        duration: duration * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scale animation for depth effect
      gsap.to(wave, {
        scaleX: 1.1,
        scaleY: 1.05,
        duration: duration * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'center center',
      });

      // Opacity pulsing
      gsap.to(wave, {
        opacity: 0.3 + (index * 0.1),
        duration: duration * 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Rotate the entire container for 3D effect
    gsap.to(containerRef.current, {
      rotateY: 5,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      gsap.killTweensOf(waves);
      gsap.killTweensOf(containerRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ perspective: '1000px' }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for each wave */}
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6B21E" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#F5F2EE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E6B21E" stopOpacity="0.15" />
          </linearGradient>
          
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D3062" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#F5F2EE" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4D3062" stopOpacity="0.12" />
          </linearGradient>
          
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9B1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#F5F2EE" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00C9B1" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="wave-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B1E16" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#F5F2EE" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2B1E16" stopOpacity="0.08" />
          </linearGradient>

          {/* Blur filter for soft effect */}
          <filter id="wave-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Wave 1 - Gold/Saffron - Front layer */}
        <path
          ref={wave1Ref}
          d="M0,100 Q250,80 500,100 T1000,100 T1500,100 T2000,100 V400 H0 Z"
          fill="url(#wave-gradient-1)"
          filter="url(#wave-blur)"
          opacity="0.4"
        />

        {/* Wave 2 - Purple - Middle-front layer */}
        <path
          ref={wave2Ref}
          d="M0,120 Q250,100 500,120 T1000,120 T1500,120 T2000,120 V400 H0 Z"
          fill="url(#wave-gradient-2)"
          filter="url(#wave-blur)"
          opacity="0.35"
        />

        {/* Wave 3 - Teal - Middle-back layer */}
        <path
          ref={wave3Ref}
          d="M0,140 Q250,120 500,140 T1000,140 T1500,140 T2000,140 V400 H0 Z"
          fill="url(#wave-gradient-3)"
          filter="url(#wave-blur)"
          opacity="0.3"
        />

        {/* Wave 4 - Brown - Back layer */}
        <path
          ref={wave4Ref}
          d="M0,160 Q250,140 500,160 T1000,160 T1500,160 T2000,160 V400 H0 Z"
          fill="url(#wave-gradient-4)"
          filter="url(#wave-blur)"
          opacity="0.25"
        />
      </svg>

      {/* Additional rotating sacred geometry overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="800" height="800" viewBox="0 0 800 800" className="animate-spin-slow">
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="#E6B21E"
            strokeWidth="1"
            opacity="0.3"
          />
          <circle
            cx="400"
            cy="400"
            r="250"
            fill="none"
            stroke="#4D3062"
            strokeWidth="1"
            opacity="0.3"
          />
          <circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke="#00C9B1"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M 400 100 L 550 400 L 400 700 L 250 400 Z"
            fill="none"
            stroke="#E6B21E"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveBackground;
