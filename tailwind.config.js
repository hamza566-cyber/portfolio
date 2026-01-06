/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-text': '#FFFFFF',
        'secondary-text': '#C7C7C7',
        'accent': '#FFC20C',
        'dark-bg': '#0A0A0A',
      },
      fontSize: {
        'title': '44px',
        'subtitle': '18px',
        'paragraph': '18px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

