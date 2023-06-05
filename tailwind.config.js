/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'proxima': ['proxima-nova', 'sans-serif']
        },
      },
      colors:{
        primary:"#171717",
        secondary:"#e8e8e8",
        secondary_2:"#e2e2e2",
        yellow:"#F1B561",
        dark_secondary:"#171717",
        dark_primary:"#686868",
        dark_secondary_2:"#090909",
        danger:"#ef4444",
        btn:"#2e94c5",
        text_secondary:"#0f172a",
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }