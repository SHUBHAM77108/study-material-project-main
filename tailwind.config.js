/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes: {
          show_data: {
            '50%': { transform: 'translate(-10rem)' }, // Adjust this value to suit your design
            '100%': { transform: 'translate(-7rem)' },
          },
          remove_overflow: {
            to: { overflow: 'initial' },
          },
        },
      colors: {
        'primary': '#207262',
        'logoColor':'#002745',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'top-radius': '10px 10px 0px 0px', 
      },
    },
  },
  plugins: [],
}

