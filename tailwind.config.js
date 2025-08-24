/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'pulse-blue': 'pulse-blue 2s infinite',
        kenburns: 'kenburns 12s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-out forwards', // added fade-in animation
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-blue': {
          '0%, 100%': {
            'box-shadow': '0 0 0 0 rgba(0, 96, 227, 0.7)',
            'border-color': 'rgba(0, 96, 227, 1)',
          },
          '50%': {
            'box-shadow': '0 0 10px 6px rgba(0, 96, 227, 0.4)',
            'border-color': 'rgba(0, 96, 227, 0.7)',
          },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.05) translate(2%, 2%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        fadeIn: { // keyframes for fade-in
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
