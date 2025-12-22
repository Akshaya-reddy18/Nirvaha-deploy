import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
      console.warn('GSAP is not available, cursor animations disabled');
      return;
    }

    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let particleCount = 0;

    // Create particle trail
    const createParticle = (x: number, y: number) => {
      if (particlesRef.current.length > 20) {
        const oldParticle = particlesRef.current.shift();
        if (oldParticle && oldParticle.parentNode) {
          oldParticle.parentNode.removeChild(oldParticle);
        }
      }

      const particle = document.createElement('div');
      particle.className = 'fixed pointer-events-none z-[9999]';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = '#003f3f';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = '0.6';
      
      document.body.appendChild(particle);
      particlesRef.current.push(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
          const index = particlesRef.current.indexOf(particle);
          if (index > -1) {
            particlesRef.current.splice(index, 1);
          }
        }
      });
    };

    // Update cursor position
    const updateCursor = () => {
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      // Smooth follower with delay
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      gsap.set(follower, {
        x: followerX,
        y: followerY,
      });

      requestAnimationFrame(updateCursor);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create particles when moving quickly
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      if (speed > 10) {
        particleCount++;
        if (particleCount % 3 === 0) {
          createParticle(e.clientX, e.clientY);
        }
      }
    };

    // Magnetic effect for buttons
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('btn-sacred') || target.closest('.btn-sacred')) {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(follower, {
          scale: 2,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Magnetic attraction for buttons
    const handleButtonHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('.btn-sacred');
      
      if (button) {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = centerX - mouseX;
        const deltaY = centerY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
          const attraction = (200 - distance) / 200;
          mouseX += deltaX * attraction * 0.1;
          mouseY += deltaY * attraction * 0.1;
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleButtonHover);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Start animation loop
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleButtonHover);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = '';
      
      // Clean up particles
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(143, 240, 210, 0.8)',
          boxShadow: '0 0 10px rgba(143, 240, 210, 0.5), 0 0 20px rgba(143, 240, 210, 0.3)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Follower cursor */}
      <div
        ref={cursorFollowerRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(143, 240, 210, 0.3)',
          backgroundColor: 'transparent',
          transition: 'transform 0.15s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
