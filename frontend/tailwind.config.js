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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
};
export const plugins = [];
