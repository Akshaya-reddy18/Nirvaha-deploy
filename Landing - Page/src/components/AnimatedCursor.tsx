import { useEffect, useRef } from 'react';

/**
 * Animated Cursor Component
 * 
 * Provides a custom animated cursor without hover effects.
 */
const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = () => {
      // Update main cursor position
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      // Smooth follower animation
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Start animation loop
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(143, 240, 210, 0.8)',
          boxShadow: '0 0 10px rgba(143, 240, 210, 0.5), 0 0 20px rgba(143, 240, 210, 0.3)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Follower ring */}
      <div
        ref={cursorFollowerRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(143, 240, 210, 0.3)',
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
};

export default AnimatedCursor;

