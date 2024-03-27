/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        '1px': 1,
      },
      // backgroundImage: {
      //   'gradient-radial':  radial-gradient(at 50% 50%)
      // },
      colors: {
        'bgEffectColor': 'hsla(146, 63%, 63%, .1)'
      }
    },
  },
  plugins: [],
}

