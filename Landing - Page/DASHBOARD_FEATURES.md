# Ancient Spiritual Wellness Dashboard - Features Documentation

## Overview
A premium, animation-heavy dashboard UI for the Ancient Spiritual Wellness platform featuring 3D backgrounds, advanced animations, and a sacred spiritual theme.

## 🎨 Design Theme
- **Color Palette:**
  - Saffron/Gold: `#E6B21E`
  - Deep Purple: `#4D3062`
  - Off-White: `#F5F2EE`
  - Dark Brown: `#2B1E16`
  - Teal Glow: `#00C9B1`

## 🚀 Technologies Used

### Animation Libraries
1. **Three.js** - 3D sacred geometry and mandala backgrounds
2. **GSAP + ScrollTrigger** - Scroll-linked animations and reveals
3. **Anime.js** - Micro-interactions and staggered animations
4. **Framer Motion** - React component animations and page transitions
5. **React-Spring** - Physics-based animations (ready for use)
6. **Lenis** - Buttery smooth scrolling experience

### Additional Features
- **Glassmorphism** - Premium frosted glass card effects
- **3D Mandalas** - Rotating sacred geometry in background
- **Floating Particles** - Lotus-inspired particle system
- **Scroll-Reactive** - Background rotates based on scroll direction

## 📋 Component Structure

### 1. EnhancedDashboard (Main Container)
- Initializes Lenis smooth scroll
- Manages tab state (Dashboard, Services, Profile)
- Renders 3D background and animated orbs
- Handles page transitions with Framer Motion

### 2. EnhancedHeader
- Fixed header with glassmorphism
- Sacred gradient background
- Animated logo with Anime.js
- Navigation tabs with GSAP hover effects
- Profile dropdown with smooth animations
- Golden glow effects on hover

### 3. SpiritualBackground3D
- Three.js canvas with sacred geometry
- Rotating mandala structures
- Floating lotus particles
- Scroll-reactive rotation
- Blurred for non-distraction
- GPU-optimized rendering

### 4. EnhancedWellnessSection (5 Service Cards)
- **Meditation** - Purple to Gold gradient
- **ZenChat** - Teal to Purple gradient
- **Discussion Room** - Gold to Teal gradient
- **Sound Healing** - Purple to Teal gradient
- **Personalized Sessions** - Gold to Purple gradient

#### Card Features:
- Glassmorphism with backdrop blur
- Hover lift animation (12px up, 1.03 scale)
- Icon rotation on hover (360° with elastic easing)
- Gradient glow effects
- GSAP ScrollTrigger reveal
- Anime.js staggered entrance
- Decorative floating orbs
- Arrow button with smooth transitions

## 🎭 Animation Details

### Header Animations
- Logo: Scale + opacity fade-in with elastic easing
- Nav buttons: Staggered slide-up (100ms delay each)
- Active tab: Smooth underline with layoutId
- Hover: Text shadow glow (Anime.js)
- Profile button: Scale + rotate on hover

### Card Animations
- **On Scroll:** GSAP ScrollTrigger fade + slide up
- **On Load:** Anime.js staggered reveal (150ms delay)
- **On Hover:**
  - Card lifts 12px with scale 1.03
  - Icon rotates 360° with elastic bounce
  - Gradient overlay fades in
  - Glow effect intensifies
  - Arrow button slides right

### Background Animations
- **3D Mandalas:** Continuous rotation (0.001 rad/frame)
- **Particles:** Sine wave floating + Y-axis rotation
- **Scroll Effect:** Clockwise on scroll down, counter-clockwise on scroll up
- **Orbs:** Scale pulse (1 → 1.2 → 1) with opacity fade

### Scroll Behavior
- **Lenis Settings:**
  - Duration: 1.2s
  - Easing: Custom exponential
  - Smooth wheel: Enabled
  - Touch multiplier: 2x
- **ScrollTrigger:**
  - Start: "top 85%"
  - End: "bottom 15%"
  - Toggle actions: play/reverse

## 🎯 Performance Optimizations

1. **GPU Acceleration:**
   - Transform and opacity animations only
   - Will-change properties on animated elements
   - RequestAnimationFrame for Three.js

2. **Lazy Loading:**
   - Components render on scroll into view
   - Three.js geometries disposed on unmount

3. **Reduced Motion:**
   - Respects prefers-reduced-motion
   - Fallback to simple opacity transitions

4. **Optimized Rendering:**
   - Three.js pixel ratio capped at 2
   - Blur filter on 3D canvas for performance
   - Minimal particle count (100)

## 📱 Responsive Design

- **Desktop (1024px+):** 3-column grid
- **Tablet (768px-1023px):** 2-column grid
- **Mobile (<768px):** 1-column grid
- Touch-optimized interactions
- Reduced animation complexity on mobile

## 🔧 Customization Guide

### Changing Colors
Edit `tailwind.config.js`:
```javascript
saffron: { DEFAULT: '#E6B21E' },
deepPurple: { DEFAULT: '#4D3062' },
// etc.
```

### Adjusting Animation Speed
Edit `EnhancedWellnessSection.tsx`:
```javascript
anime({
  duration: 800, // Change this value
  easing: 'easeOutElastic(1, .6)',
});
```

### Modifying 3D Background
Edit `SpiritualBackground3D.tsx`:
- Change geometry: `TorusGeometry`, `SphereGeometry`, etc.
- Adjust particle count: `particlesCount = 100`
- Modify colors: `color: 0x00D4AA`

### Scroll Speed
Edit `EnhancedDashboard.tsx`:
```javascript
const lenis = new Lenis({
  duration: 1.2, // Adjust scroll duration
});
```

## 🎨 Sacred Design Elements

1. **Mandala Patterns:** 8-fold symmetry representing cosmic order
2. **Lotus Particles:** Symbol of spiritual enlightenment
3. **Golden Ratio:** Used in spacing and proportions
4. **Sacred Geometry:** Circles and polygons in background
5. **Energy Flow:** Gradient directions follow chakra alignment

## 🚦 Usage

The dashboard automatically loads when users navigate to `/dashboard` route. All animations are self-initializing and require no manual setup.

### Navigation Tabs:
- **Dashboard:** Shows 5 wellness service cards
- **Services:** OTT content section
- **Profile:** Gamification features

### Service Cards Link To:
- `/meditation` - Meditation practices
- `/zenchat` - AI wellness companion
- `/discussion-room` - Community discussions
- `/sound-healing` - Frequency healing
- `/personalized-sessions` - Custom wellness plans

## 🐛 Troubleshooting

### Cards not animating:
- Check browser console for errors
- Ensure GSAP and Anime.js are installed
- Verify ScrollTrigger is registered

### 3D background not showing:
- Check WebGL support in browser
- Verify Three.js installation
- Check canvas element in DOM

### Scroll not smooth:
- Ensure Lenis is initialized
- Check for conflicting scroll libraries
- Verify RAF loop is running

## 📦 Dependencies

```json
{
  "three": "^0.x.x",
  "gsap": "^3.13.0",
  "animejs": "^3.x.x",
  "framer-motion": "^12.23.12",
  "react-spring": "^9.x.x",
  "@studio-freight/lenis": "^1.0.42",
  "react-intersection-observer": "^9.16.0"
}
```

## 🎓 Best Practices

1. **Animation Performance:**
   - Use transform and opacity only
   - Avoid animating width/height
   - Batch DOM reads/writes

2. **Accessibility:**
   - Respect reduced motion preferences
   - Maintain keyboard navigation
   - Ensure sufficient color contrast

3. **Code Organization:**
   - Separate animation logic from components
   - Use custom hooks for reusable animations
   - Clean up event listeners and timers

## 🌟 Future Enhancements

- [ ] Add Barba.js page transitions
- [ ] Implement Spline 3D models
- [ ] Add sound effects on interactions
- [ ] Create custom cursor with sacred symbols
- [ ] Add particle trails on mouse movement
- [ ] Implement WebGL shaders for backgrounds

---

**Created with sacred intention for holistic wellness** 🕉️
