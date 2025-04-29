/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Uncial Antiqua"', 'sans-serif'],
        secondary: ['"Marko One"', 'sans-serif'],
      },
      colors: {
        'text1-public': '#F99713',
        'form-public': '#1C1B1B',
        'bg-public': '#FFAB39',
        'buttons-public': '#D77B00',
        'card-reviews': 'rgba(255, 255, 255, 0.7)',
        'color1-admin': '#00220F',
        'bg-text-admin': '#A1FF84',
        'text2-public': '#FFFFFF',
        'color1-public': '#000000',
        'card-admin': '#56C356',
        'color2-admin': '#01BC01',
        'text-review': '#003FBC',

        'cardproducts-start': '#FFFFFF',
        'cardproducts-end': '#999999',
      },
    },
  },
  plugins: [],
}