# Nirvaha Wellness Platform - 21st.dev Configuration

## Project Overview
AI-Powered Holistic Mental Wellness Platform combining ancient spiritual wisdom with modern therapy, meditation, and professional counseling services.

## Features
- 🧘‍♀️ **Meditation & Mindfulness**: Sacred mind training with guided practices
- 🎵 **Sound Healing**: Soothing soundscapes and ambient sounds
- 👥 **Community Support**: Safe space for sharing and peer support
- 📚 **Content Library**: Curated wellness content (Nirvaha OTT)
- 🏥 **Professional Services**: Therapist discovery and appointments
- 📊 **Analytics Dashboard**: Wellness tracking and insights

## Tech Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Routing**: React Router
- **State Management**: React Context + React Query

## Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── CommunityHero.tsx
│   ├── NirvahaOTT.tsx
│   ├── MindTraining.tsx
│   └── MindhouseLanding.tsx
├── pages/              # Page components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
└── lib/                # Utilities
```

## Key Components

### CommunityHero
Main hero section with meditation image and call-to-action buttons.
- **Features**: Animated elements, gradient backgrounds, responsive design
- **Image**: meditation.png (large, right-aligned)

### NirvahaOTT
Wellness content library with three categories:
- **Mental Wellness**: Mindfulness, stress management, anxiety relief
- **Personal Wellness**: Sleep optimization, nutrition, daily routines  
- **Professional Development**: Workplace wellness, leadership, burnout prevention

### MindTraining
Sacred mind training section with interactive tabs:
- Mindfulness, Breathwork, Sleep Stories
- Guided Meditation, Soothing Soundscapes, Ambient Sounds

### MindhouseLanding
Community section for safe sharing and support:
- Anonymous posting features
- Real-time peer support
- WhatsApp community integration

## Color Palette
- **Primary**: Emerald (#10b981), Teal (#14b8a6), Cyan (#06b6d4)
- **Secondary**: Purple (#8b5cf6), Pink (#ec4899), Blue (#3b82f6)
- **Gradients**: Emerald to Teal to Cyan for primary elements

## Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 21st.dev Integration
This project is configured for 21st.dev extension with:
- Component documentation
- Style guide integration
- Page structure mapping
- Feature categorization
