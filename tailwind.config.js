/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bbb3',
          500: '#a67c6d',
          600: '#7d5e52',
          700: '#5c2c2c',
          800: '#4a2323',
          900: '#3d1d1d',
          950: '#2d1515',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf9f7',
          200: '#f5f3f0',
          300: '#efeae5',
          400: '#e8e0d5',
          500: '#d4c4b0',
          600: '#b8a890',
          700: '#9d8d75',
          800: '#7d6f5c',
          900: '#5c5142',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(234, 60, 255, 0.5)' },
          'to': { boxShadow: '0 0 40px rgba(234, 60, 255, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(234, 60, 255, 0.5)',
        'glow-lg': '0 0 50px rgba(234, 60, 255, 0.6)',
        'neon': '0 0 5px theme("colors.primary.400"), 0 0 20px theme("colors.primary.600")',
      },
    },
  },
  plugins: [],
}

