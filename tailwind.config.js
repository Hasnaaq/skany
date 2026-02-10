/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#3D5A5E",
        secondary: "#F2F2F2",
        accent: "#FF6B6B",
        dark: "#333333",
        light: "#FFFFFF",
      }
    },
  },
  plugins: [
   
    require('tailwind-scrollbar-hide')
 
  ],
};
