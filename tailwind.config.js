/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/elements/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
    './src/pages/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'gunmetal': '#232830',
      'gunmetal-light': '#2B303A',
      'gray': '#C5C3CA',
      'gray-light': '#ECE8EE',
      'white': '#F8F4F9',
      'gold': '#F6CA83',
      'red': '#F38F69',
      'green': '#B4E191',
      'blue': '#80CFC1',
    },
    fontFamily: {
      sans: ['Assistant', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        zoomIn: {
          from: { opacity: 0, transform: 'scale(0)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: 'translateX(-6rem)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: 0, transform: 'translateX(6rem)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          from: { opacity: 0, transform: 'translateY(-6rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDownGrow: {
          '0%': { opacity: 0, visibility: 'hidden', transform: 'translateY(-6rem)', marginTop: '-6rem' },
          '50%': { opacity: 0 },
          '100%': { opacity: 1, visibility: 'visible', transform: 'translateY(0)', marginTop: '0' },
        },
        fadeOut: {
          from: { opacity: 1, visibility: 'visible' },
          to: { opacity: 0, visibility: 'hidden' },
        },
      },
      animation: {
        'zoom-in': '2s ease-out zoomIn',
        'fade-in': '2s ease-in fadeIn',
        'fade-in-left': '2500ms ease-out fadeInLeft',
        'fade-in-right': '2500ms ease-out fadeInRight',
        'fade-in-down': '1s ease-in-out fadeInDown',
        'fade-in': '2s ease-in fadeIn',
        'fade-out': '1s ease-in fadeOut',
      }
    },
  },
  plugins: [],
}
