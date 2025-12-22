'use client';

import * as React from 'react';
import {
  motion,
  type Transition,
} from 'framer-motion';

type WritingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  transition?: Transition;
  spacing?: number | string;
  text: string;
};

const WritingText = React.forwardRef<HTMLSpanElement, WritingTextProps>(
  (
    {
      spacing = 5,
      text,
      transition = { type: 'spring', bounce: 0, duration: 2, delay: 0.5 },
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

    const words = React.useMemo(() => text.split(' '), [text]);

    return (
      <span ref={localRef} data-slot="writing-text" {...props}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block will-change-transform will-change-opacity"
            style={{ marginRight: spacing }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: index * (transition?.delay ?? 0),
            }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </span>
    );
  }
);

export { WritingText, type WritingTextProps }; 