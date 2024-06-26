/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Play"', 'sans-serif'],
      },
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
      },
      boxShadowColor: {
        'whiteShadow': '0 0 0 2px white',
      },
      spacing: {
        '2px': '2px',
        'md-main': 'calc(40% - max(1vmin, 5vmin))' ,
        'space': 'max(1vmin, 5vmin)',
        '2space': 'calc(max(1vmin, 5vmin) * 2)',
        '3space': 'calc(max(1vmin, 5vmin) * 3)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}

