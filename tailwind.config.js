/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'monospace'],
        'syne': ['var(--font-syne)', 'sans-serif'],
        'orbitron': ['var(--font-orbitron)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wave': 'wave 2s linear infinite',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite alternate',
        'hologram': 'hologram 4s ease-in-out infinite',
        'matrix': 'matrix 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '33%': { transform: 'translateY(-20px) rotate(3deg) scale(1.05)' },
          '66%': { transform: 'translateY(-10px) rotate(-3deg) scale(0.95)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.5), 0 0 80px rgba(255, 255, 0, 0.3)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        hologram: {
          '0%, 100%': { 
            filter: 'hue-rotate(0deg) brightness(1)',
            transform: 'skewX(0deg)',
          },
          '25%': { 
            filter: 'hue-rotate(90deg) brightness(1.2)',
            transform: 'skewX(1deg)',
          },
          '50%': { 
            filter: 'hue-rotate(180deg) brightness(1)',
            transform: 'skewX(0deg)',
          },
          '75%': { 
            filter: 'hue-rotate(270deg) brightness(1.2)',
            transform: 'skewX(-1deg)',
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translateY(1000%)', opacity: '0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
        'grid': "url('/grid.svg')",
      },
      colors: {
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-yellow': '#ffff00',
        'neon-green': '#00ff00',
      }
    },
  },
  plugins: [],
}
