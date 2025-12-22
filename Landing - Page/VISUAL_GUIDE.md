# 🎨 Visual Guide - Ancient Spiritual Wellness Dashboard

## Color Palette Reference

```
┌─────────────────────────────────────────────────────────────┐
│                    SACRED COLOR PALETTE                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🟡 SAFFRON/GOLD    #E6B21E   Divine energy, illumination  │
│  🟣 DEEP PURPLE     #4D3062   Spiritual wisdom, depth      │
│  ⚪ OFF-WHITE       #F5F2EE   Purity, clarity, peace       │
│  🟤 DARK BROWN      #2B1E16   Grounding, earth element     │
│  🔵 TEAL GLOW       #00C9B1   Healing, balance, harmony    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Layout Structure

```
┌────────────────────────────────────────────────────────────────┐
│                         HEADER                                 │
│  ┌──────┐        ┌─────────────────────┐        ┌──────┐     │
│  │ LOGO │        │ Dashboard Services  │        │ 👤   │     │
│  └──────┘        │      Profile        │        └──────┘     │
│                  └─────────────────────┘                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                    3D BACKGROUND (BLURRED)                     │
│              ╱╲    Rotating Mandalas    ╱╲                    │
│            ╱    ╲  Floating Particles ╱    ╲                  │
│          ╱        ╲                 ╱        ╲                │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │              │  │              │  │              │       │
│  │  ✨ CARD 1  │  │  💬 CARD 2  │  │  👥 CARD 3  │       │
│  │  Meditation  │  │   ZenChat   │  │ Discussion  │       │
│  │              │  │              │  │    Room     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐                          │
│  │              │  │              │                          │
│  │  🎵 CARD 4  │  │  ❤️ CARD 5  │                          │
│  │    Sound     │  │ Personalized │                          │
│  │   Healing    │  │   Sessions   │                          │
│  └──────────────┘  └──────────────┘                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## Card Design Anatomy

```
┌─────────────────────────────────────────────────┐
│  ┌──────┐                                       │ ← Glassmorphism
│  │ ICON │  ← Rotates 360° on hover             │   Background
│  └──────┘                                       │
│                                                 │
│  Card Title                                     │ ← Bold, 2xl
│  ─────────────                                  │
│                                                 │
│  Tagline text describing the service           │ ← Gray, base
│  and its spiritual benefits...                 │
│                                                 │
│                                                 │
│  Explore →                    ┌────┐           │
│                               │ →  │ ← Arrow   │
│                               └────┘   Button  │
│                                                 │
│  ╱ Decorative Orbs ╲                           │ ← Glow Effects
└─────────────────────────────────────────────────┘
   ↑                                         ↑
   Gradient Border                    Shadow Glow
```

## Animation Timeline

```
PAGE LOAD
    ↓
┌─────────────────────────────────────────────────┐
│ 0ms    │ Logo scales in (elastic)              │
│ 200ms  │ Nav buttons slide up (staggered)      │
│ 400ms  │ 3D background fades in                │
│ 600ms  │ Cards start appearing                 │
└─────────────────────────────────────────────────┘

SCROLL INTO VIEW
    ↓
┌─────────────────────────────────────────────────┐
│ Card 1 │ Fade + Slide (0ms delay)              │
│ Card 2 │ Fade + Slide (150ms delay)            │
│ Card 3 │ Fade + Slide (300ms delay)            │
│ Card 4 │ Fade + Slide (450ms delay)            │
│ Card 5 │ Fade + Slide (600ms delay)            │
└─────────────────────────────────────────────────┘

HOVER STATE
    ↓
┌─────────────────────────────────────────────────┐
│ 0ms    │ Card lifts 12px                       │
│ 0ms    │ Card scales to 1.03                   │
│ 100ms  │ Icon starts rotating                  │
│ 200ms  │ Glow effect intensifies               │
│ 400ms  │ Icon completes 360° rotation          │
└─────────────────────────────────────────────────┘
```

## Gradient Directions

```
CARD 1: MEDITATION
┌─────────────────┐
│ 🟣 Purple       │
│   ↘             │
│     ↘           │
│       ↘         │
│         🟡 Gold │
└─────────────────┘

CARD 2: ZENCHAT
┌─────────────────┐
│ 🔵 Teal         │
│   ↘             │
│     ↘           │
│       ↘         │
│         🟣 Purple│
└─────────────────┘

CARD 3: DISCUSSION ROOM
┌─────────────────┐
│ 🟡 Gold         │
│   ↘             │
│     ↘           │
│       ↘         │
│         🔵 Teal │
└─────────────────┘

CARD 4: SOUND HEALING
┌─────────────────┐
│ 🟣 Purple       │
│   ↘             │
│     ↘           │
│       ↘         │
│         🔵 Teal │
└─────────────────┘

CARD 5: PERSONALIZED SESSIONS
┌─────────────────┐
│ 🟡 Gold         │
│   ↘             │
│     ↘           │
│       ↘         │
│         🟣 Purple│
└─────────────────┘
```

## 3D Background Elements

```
LAYER 1: MANDALA 1 (Left)
    ╱───╲
   ╱  ⊕  ╲    ← 8-fold symmetry
  │   │   │     Torus geometry
   ╲  ⊕  ╱      Wireframe style
    ╲───╱       Rotates slowly

LAYER 2: MANDALA 2 (Right)
    ╱─╲
   ╱ ⊕ ╲      ← Smaller scale (0.7)
  │  │  │       Different position
   ╲ ⊕ ╱        Counter-rotation
    ╲─╱

LAYER 3: PARTICLES
  ·  ·    ·     ← 100 floating points
    ·  ·  ·       Sine wave motion
  ·    ·    ·     Teal glow color
    ·  ·  ·       Additive blending
  ·    ·    ·
```

## Hover State Comparison

```
NORMAL STATE                    HOVER STATE
┌──────────────┐               ┌──────────────┐
│              │               │              │ ↑ 12px
│   ✨ Icon   │               │   ✨ Icon   │ ↑ lift
│              │               │   (rotated)  │
│   Title      │    ──────→    │   Title      │
│   Tagline    │               │   Tagline    │
│              │               │              │
│         →    │               │    Explore → │
└──────────────┘               └──────────────┘
  No glow                        ✨ Glowing ✨
  Scale: 1.0                     Scale: 1.03
  Y: 0                           Y: -12px
```

## Scroll Behavior

```
SCROLL DOWN ↓
┌─────────────────────────────────┐
│  Background rotates clockwise   │
│         ↻                       │
│    Cards fade in from below     │
│         ↑                       │
└─────────────────────────────────┘

SCROLL UP ↑
┌─────────────────────────────────┐
│ Background rotates counter-     │
│    clockwise ↺                  │
│    Cards fade out               │
│         ↓                       │
└─────────────────────────────────┘
```

## Responsive Grid

```
DESKTOP (1024px+)
┌────────┬────────┬────────┐
│ Card 1 │ Card 2 │ Card 3 │
├────────┼────────┼────────┤
│ Card 4 │ Card 5 │        │
└────────┴────────┴────────┘

TABLET (768-1023px)
┌────────┬────────┐
│ Card 1 │ Card 2 │
├────────┼────────┤
│ Card 3 │ Card 4 │
├────────┼────────┤
│ Card 5 │        │
└────────┴────────┘

MOBILE (<768px)
┌────────┐
│ Card 1 │
├────────┤
│ Card 2 │
├────────┤
│ Card 3 │
├────────┤
│ Card 4 │
├────────┤
│ Card 5 │
└────────┘
```

## Typography Scale

```
┌─────────────────────────────────────────┐
│ HEADING 1  │ 4xl-5xl │ Cinzel Display  │
│ HEADING 2  │ 2xl     │ Poppins Bold    │
│ HEADING 3  │ xl      │ Poppins SemiBold│
│ BODY       │ base    │ Poppins Regular │
│ CAPTION    │ sm      │ Poppins Medium  │
└─────────────────────────────────────────┘
```

## Shadow & Glow Levels

```
LEVEL 1: RESTING
box-shadow: 0 8px 32px rgba(77, 48, 98, 0.1)

LEVEL 2: HOVER
box-shadow: 0 20px 60px rgba(77, 48, 98, 0.2)

LEVEL 3: ACTIVE GLOW
box-shadow: 0 0 40px rgba(230, 178, 30, 0.6),
            0 0 80px rgba(230, 178, 30, 0.3)
```

## Border Radius Scale

```
┌─────────────────────────────────┐
│ CARDS      │ 24px (rounded-3xl) │
│ BUTTONS    │ 12px (rounded-xl)  │
│ ICONS      │ 16px (rounded-2xl) │
│ PROFILE    │ 50% (rounded-full) │
└─────────────────────────────────┘
```

## Spacing System

```
┌──────────────────────────────────┐
│ SECTION PADDING    │ 48-96px    │
│ CARD PADDING       │ 32px       │
│ CARD GAP           │ 32px       │
│ ELEMENT MARGIN     │ 16-24px    │
│ ICON MARGIN        │ 24px       │
└──────────────────────────────────┘
```

## Animation Easing

```
┌─────────────────────────────────────────────┐
│ ELASTIC    │ easeOutElastic(1, .6)         │
│ SMOOTH     │ cubic-bezier(0.25,0.46,0.45,0.94)│
│ BOUNCE     │ easeOutQuad                   │
│ LINEAR     │ linear (for continuous)       │
└─────────────────────────────────────────────┘
```

## Icon States

```
NORMAL          HOVER           ACTIVE
  ✨            ✨ (360°)        ✨
  │             ↻               ↻↻
  │             │               │
Scale: 1.0    Scale: 1.2      Scale: 1.0
Rotate: 0°    Rotate: 180°    Rotate: 360°
```

## Performance Targets

```
┌─────────────────────────────────────┐
│ FPS              │ 60fps           │
│ First Paint      │ < 1s            │
│ Time to Interactive│ < 2s          │
│ Bundle Size      │ Optimized       │
│ Memory Usage     │ < 100MB         │
└─────────────────────────────────────┘
```

---

**Visual Reference Complete** 🎨✨

*Use this guide for consistent implementation and maintenance*
