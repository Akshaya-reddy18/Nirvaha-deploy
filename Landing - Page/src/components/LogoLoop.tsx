import React, { useEffect, useRef, useState } from 'react';

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 40,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let currentPosition = 0;

    const animate = () => {
      if (!isHovered || !pauseOnHover) {
        currentPosition += direction === 'left' ? -speed / 60 : speed / 60;
        
        // Reset position when all logos have scrolled past
        const totalWidth = container.scrollWidth / 2;
        if (Math.abs(currentPosition) >= totalWidth) {
          currentPosition = 0;
        }
        
        container.style.transform = `translateX(${currentPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, direction, isHovered, pauseOnHover]);

  const renderLogo = (logo: LogoItem, index: number) => {
    const logoElement = logo.node ? (
      <div className="flex items-center justify-center" style={{ height: logoHeight }}>
        {logo.node}
      </div>
    ) : logo.src ? (
      <img
        src={logo.src}
        alt={logo.alt || logo.title || `Logo ${index + 1}`}
        className="object-contain"
        style={{ height: logoHeight }}
      />
    ) : null;

    if (!logoElement) return null;

    const content = (
      <div
        className={`flex items-center justify-center transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{ 
          minWidth: logo.title && logo.title.includes('Nirvaha') ? 'auto' : logoHeight + gap, 
          padding: `0 ${gap / 2}px` 
        }}
      >
        {logoElement}
      </div>
    );

    if (logo.href) {
      return (
        <a
          key={index}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
          aria-label={logo.title || logo.alt}
        >
          {content}
        </a>
      );
    }

    return <div key={index}>{content}</div>;
  };

  const fadeOutStyle = fadeOut ? {
    background: `linear-gradient(to right, ${fadeOutColor}, transparent, ${fadeOutColor})`,
    maskImage: `linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)`,
    WebkitMaskImage: `linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)`
  } : {};

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
    >
      <div
        ref={containerRef}
        className="flex items-center"
        style={{
          width: 'max-content',
          ...fadeOutStyle
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => renderLogo(logo, index))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
      </div>
    </div>
  );
};

export default LogoLoop;
