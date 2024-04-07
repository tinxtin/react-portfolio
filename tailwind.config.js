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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        tightest: '-.01em',
      },
      colors: {
        'bgEffectColor': 'hsla(146, 63%, 63%, .1)',
        'neoGreen': 'hsla(146, 63%, 63%, 1)',
      }
    },
  },
  plugins: [],
}

