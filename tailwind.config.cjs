/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        appear: 'appear 320ms linear',
        'appear-slow': 'appear 640ms linear',
        'pass-through': 'pass-through 2s linear infinite',
        'pass-through-vertical': 'pass-through-vertical 3s linear infinite',
        scale: 'scale 3s linear infinite 0s alternate',
      },
      keyframes: {
        'pass-through': {
          '0%': { left: '-40%' },
          '100%': { left: '100%' },
        },
        'pass-through-vertical': {
          '0%': { top: '-80%' },
          '100%': { top: '100%' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'loading-dot-appear-1': {
          '0%': { opacity: 0 },
          '33%': { opacity: 1 },
          '66%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        'loading-dot-appear-2': {
          '0%': { opacity: 0 },
          '33%': { opacity: 0 },
          '66%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        'loading-dot-appear-3': {
          '0%': { opacity: 0 },
          '33%': { opacity: 0 },
          '66%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          300: '#0e0f11',
        },
      },
    },
  },
  plugins: [],
};
