/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75em', 
        'sm': '0.875em', 
        'base':  '1em', 
        'lg': '1.125em', 
        'xl': '1.25em', 
        '2xl': '1.5em', 
        '3xl': '1.875em',
        '4xl': '2.25em',
        '5xl': '3em',
        '6xl': '3.75em',
        '7xl': '4.5em',
        '8xl': '6em',
        '9xl': '8em',
        
      },
      backgroundImage: {
        'card-radial-gradient-primary': 'radial-gradient(circle at 50% 100%, #031953 0%, #1770F7 200%)',
        'button-radial-gradient-primary': 'radial-gradient(circle at 50% 350%, #0A308B 50%, #1E6EFB 80%)',
      },
      borderColor: {
        'blue-transparent': 'rgba(151,186,255,0.4)',
      },
      color:{
        "blue" : '#88B3FD',
      },
    },
  },
  plugins: [],
}

