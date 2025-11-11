/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003D7A',       // Dark blue
        secondary: '#87CEEB',     // Light sky blue
        accent: '#D4A574',        // Gold
        dark: '#0A0E27',          // Almost black
        light: '#F5F1E8',         // Beige
        white: '#FFFFFF'
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
