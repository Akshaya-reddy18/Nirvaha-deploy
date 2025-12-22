import React from 'react';
import { motion } from 'framer-motion';

interface SplittingTextProps {
  text: string;
  className?: string;
  delay?: number; // ms
  type?: 'words' | 'letters';
}

export const SplittingText: React.FC<SplittingTextProps> = ({
  text,
  className = '',
  delay = 0,
  type = 'letters',
}) => {
  // Split text into words or letters
  const units = type === 'words' ? text.split(' ') : text.split('');
  const baseDelay = 0.35; // seconds per unit (optimized for smoother flow)
  const initialDelay = delay / 1000; // convert ms to s
  
  console.log('[SplittingText] Rendering:', { text, units: units.length, type, delay });

  return (
    <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, scale: 0.3, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{
            delay: initialDelay + i * baseDelay,
            type: 'spring',
            stiffness: 400,
            damping: 25,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ display: 'inline-block', whiteSpace: type === 'words' ? 'pre' : undefined }}
        >
          {unit}
          {type === 'words' ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
}; 