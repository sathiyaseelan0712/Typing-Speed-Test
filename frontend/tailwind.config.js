// tailwind.config.js
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      legend: ['Legend', 'sans-serif'],
      allerta: ['Allerta', 'sans-serif'],
      // mono: ['', 'sans-serif'],
      meditative: ["Meditative", "sans-serif"],
    },
  },
};
export const plugins = [];
