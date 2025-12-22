import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      // Clean up all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateOnScroll = (
    target: string | Element,
    animation: gsap.TweenVars,
    scrollTriggerOptions?: ScrollTrigger.Vars
  ) => {
    return gsap.to(target, {
      ...animation,
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTriggerOptions,
      },
    });
  };

  const createParallax = (
    target: string | Element,
    speed: number = 0.5
  ) => {
    return gsap.to(target, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  };

  return { animateOnScroll, createParallax };
};

export default useScrollAnimations;
