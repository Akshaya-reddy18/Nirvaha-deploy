import React, { useEffect, useRef, useState } from 'react';

interface Symbol {
  id: number;
  type: 'om' | 'swastik';
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  rotation: number;
  path: { x: number; y: number }[];
  pathIndex: number;
  age: number;
}

const AnimatedSacredSymbols: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const symbolIdRef = useRef(0);

  // Generate random organic path
  const generatePath = (startX: number, startY: number, width: number, height: number): { x: number; y: number }[] => {
    const path: { x: number; y: number }[] = [];
    const numPoints = 8 + Math.floor(Math.random() * 6);
    const stepX = width / numPoints;
    const stepY = height / numPoints;
    
    let currentX = startX;
    let currentY = startY;
    
    for (let i = 0; i <= numPoints; i++) {
      path.push({ x: currentX, y: currentY });
      // Random organic movement
      currentX += stepX + (Math.random() - 0.5) * stepX * 0.8;
      currentY += stepY + (Math.random() - 0.5) * stepY * 0.8;
      
      // Keep within bounds with some margin
      currentX = Math.max(width * 0.1, Math.min(width * 0.9, currentX));
      currentY = Math.max(height * 0.1, Math.min(height * 0.9, currentY));
    }
    
    return path;
  };

  // Spawn a new symbol
  const spawnSymbol = (width: number, height: number): Symbol => {
    const type = Math.random() > 0.5 ? 'om' : 'swastik';
    const startX = Math.random() * width;
    const startY = Math.random() * height;
    const size = 40 + Math.random() * 80; // 40-120px
    const duration = 8000 + Math.random() * 12000; // 8-20 seconds
    const rotation = Math.random() * 360;
    
    const path = generatePath(startX, startY, width, height);
    
    return {
      id: symbolIdRef.current++,
      type,
      x: startX,
      y: startY,
      size,
      opacity: 0, // Start invisible
      duration,
      rotation,
      path,
      pathIndex: 0,
      age: 0,
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    // Reduce symbols on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const maxSymbols = isMobile ? 6 : 12; // Total number of symbols to maintain
    const spawnInterval = isMobile ? 3000 : 2000; // Spawn new symbol every 2-3 seconds
    let lastSpawnTime = 0;

    const animate = (currentTime: number) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      setSymbols((prevSymbols) => {
        let updated = [...prevSymbols];

        // Spawn new symbols if needed
        if (currentTime - lastSpawnTime > spawnInterval && updated.length < maxSymbols) {
          updated.push(spawnSymbol(width, height));
          lastSpawnTime = currentTime;
        }

        // Update existing symbols
        updated = updated.map((symbol) => {
          const newAge = symbol.age + 16; // ~60fps
          const progress = newAge / symbol.duration;
          
          // Fade in during first 20% of life
          let opacity = 0;
          if (progress < 0.2) {
            opacity = progress / 0.2 * 0.15; // Max opacity 0.15
          } else if (progress < 0.8) {
            opacity = 0.15;
          } else {
            // Fade out during last 20%
            opacity = 0.15 * ((1 - progress) / 0.2);
          }

          // Move along path
          let pathProgress = progress;
          if (pathProgress > 1) pathProgress = 1;
          
          const pathIndex = Math.floor(pathProgress * (symbol.path.length - 1));
          const nextIndex = Math.min(pathIndex + 1, symbol.path.length - 1);
          const segmentProgress = (pathProgress * (symbol.path.length - 1)) - pathIndex;
          
          const currentPoint = symbol.path[pathIndex];
          const nextPoint = symbol.path[nextIndex];
          
          const x = currentPoint.x + (nextPoint.x - currentPoint.x) * segmentProgress;
          const y = currentPoint.y + (nextPoint.y - currentPoint.y) * segmentProgress;
          
          // Gentle rotation
          const rotation = symbol.rotation + progress * 360 * (Math.random() > 0.5 ? 1 : -1);

          return {
            ...symbol,
            x,
            y,
            opacity,
            rotation,
            age: newAge,
            pathIndex,
          };
        });

        // Remove symbols that have completed their lifecycle
        return updated.filter((symbol) => symbol.age < symbol.duration);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize with a few symbols
    const initialSymbols: Symbol[] = [];
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
      initialSymbols.push(spawnSymbol(rect.width || 1000, rect.height || 800));
    }
    setSymbols(initialSymbols);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sacred-layer"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {symbols.map((symbol) => (
        <span
          key={symbol.id}
          className="sacred-symbol-animated"
          style={{
            position: 'absolute',
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            fontSize: `${symbol.size}px`,
            color: `rgba(120, 210, 200, ${symbol.opacity})`,
            mixBlendMode: 'soft-light',
            transform: `translate(-50%, -50%) rotate(${symbol.rotation}deg)`,
            transition: 'none',
            willChange: 'transform, opacity',
          }}
        >
          {symbol.type === 'om' ? 'ॐ' : '卐'}
        </span>
      ))}
    </div>
  );
};

export default AnimatedSacredSymbols;

