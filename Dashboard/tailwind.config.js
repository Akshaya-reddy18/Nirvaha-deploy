import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",           // main index
    "./src/**/*.{js,ts,jsx,tsx}", // all src files
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Emerald Sanctuary theme tokens
        sanctuary: {
          DEFAULT: '#072f2f',
          900: '#051f20',
          800: '#0f3d3e'
        },
        "luminous-mint": {
          DEFAULT: '#00d2a0',
          500: '#00b894'
        },
        // Ancient Spiritual Wellness Palette
        saffron: {
          DEFAULT: '#E6B21E',
          light: '#F5D576',
          dark: '#C89A0D',
        },
        deepPurple: {
          DEFAULT: '#4D3062',
          light: '#6B4A82',
          dark: '#2F1D3C',
        },
        offWhite: {
          DEFAULT: '#F5F2EE',
          light: '#FFFDF6',
          dark: '#E8E4DF',
        },
        darkBrown: {
          DEFAULT: '#2B1E16',
          light: '#3D2E24',
          dark: '#1A110C',
        },
        tealGlow: {
          DEFAULT: '#00C9B1',
          light: '#33D9C5',
          dark: '#00A08C',
        },
        mint: {
          500: '#8FF0D2',
        },
        deepTeal: {
          900: '#003f3f',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "sacred-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "mandala-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "energy-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(230, 178, 30, 0.3), 0 0 40px rgba(230, 178, 30, 0.1)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(230, 178, 30, 0.6), 0 0 80px rgba(230, 178, 30, 0.3)",
            transform: "scale(1.02)"
          },
        },
        "lotus-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(2deg)" },
          "50%": { transform: "translateY(-5px) rotate(0deg)" },
          "75%": { transform: "translateY(-15px) rotate(-2deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sacred-shimmer": "sacred-shimmer 3s linear infinite",
        "mandala-spin": "mandala-spin 20s linear infinite",
        "energy-pulse": "energy-pulse 3s ease-in-out infinite",
        "lotus-float": "lotus-float 4s ease-in-out infinite",
      },
      backgroundImage: {
        'sanctuary': 'linear-gradient(135deg, #0f3d3e 0%, #051f20 100%)',
      },
      boxShadow: {
        'mint-glow': '0 10px 30px rgba(0,210,160,0.1)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
