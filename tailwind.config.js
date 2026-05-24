/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        overlay: '#F4F4F0',
        divide: '#E5E5E0',
        accent: '#D97706',
        'accent-hover': '#B45309',
        'accent-light': '#92400E',
        heading: '#111827',
        body: '#6B7280',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'hero-1': 'heroFadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards',
        'hero-2': 'heroFadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.45s forwards',
        'hero-3': 'heroFadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.65s forwards',
        'hero-4': 'heroFadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.85s forwards',
        'hero-5': 'heroFadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 1.05s forwards',
        'pulse-slow': 'subtlePulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
