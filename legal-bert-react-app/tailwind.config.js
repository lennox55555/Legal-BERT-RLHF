module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#4F46E5',  // Adjust this color to match your image
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}