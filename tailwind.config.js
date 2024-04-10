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
      fontSize: {
        '10px': '10px',
        '24px': '24px'
      },
      colors: {
        'bgEffectColor': 'hsla(146, 63%, 63%, .1)',
        'neoGreen': 'hsla(146, 63%, 63%, 1)',
        'pageColor': 'hsla(0, 0%, 5%, .9)',
      },
      boxShadowColor: {
        'whiteShadow': '0 0 0 2px white',
      },
      spacing: {
        '2px': '2px',
        'pad': 'max(20px, 4vmin)',
        '2pad': 'calc(max(20px, 4vmin) * 2)'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      }
    },
  },
  plugins: [],
}

