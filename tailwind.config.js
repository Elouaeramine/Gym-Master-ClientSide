module.exports = {
  mode: "jit",
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
     }
    },
    colors: {
      'cod-gray': {
        '500': '#181818'
      },
      'white': {
        DEFAULT: 'white'
      },
      'red': {
        DEFAULT: 'red'
      }

    }
  },
    
    
  variants: {
    extend: {},
  },

   plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography')
  ],

};
