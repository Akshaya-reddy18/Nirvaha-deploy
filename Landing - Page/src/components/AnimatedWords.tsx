import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Soul", "Life", "Mind"];

const AnimatedWords = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);
    return (
        <span className="relative min-w-[8.5ch] inline-block h-[1.3em] align-bottom text-left" style={{ verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -32 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 w-full text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent text-left"
                    style={{ lineHeight: 1.2, minWidth: '8.5ch', whiteSpace: 'nowrap', textAlign: 'left' }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default AnimatedWords;
