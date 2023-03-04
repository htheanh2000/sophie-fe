/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '425px',
      // => @media (min-width: 640px) { ... }

      tablet: '768px',
      // => @media (min-width: 640px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        gray: '#333333',
        teal: '#01B2BA',
        yellow: '#FEF452',
        purple: '#942F70',
        'dark-blue': '#14597A'
      },
    },
  },
  plugins: [],
}