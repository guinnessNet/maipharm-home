/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#dcefe6',
          200: '#b9dfcd',
          300: '#8cc7b0',
          400: '#5caa92',
          500: '#3d8d77',
          600: '#2d715f',
          700: '#245a4c',
          800: '#1f4a3f',
          900: '#184230',
          950: '#0c2a1f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'primary-start': '#184230',
        'primary-end': '#0f2a1e',
      },
    },
  },
  plugins: [],
}
