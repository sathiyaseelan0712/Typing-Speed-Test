// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        legend: ['Legend', 'sans-serif'],
        allerta: ['Allerta', 'sans-serif'],
        anime: ['"Anime Pocket Monk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
