module.exports = {

  prefix: 'tw-',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      boxShadow: {
        '3xl': '0px 5px 7px rgba(58, 212, 175, 0.25)',
      },
      colors: {
        nishblue:
        {
          50: '#e4fcf6',
          100: '#c0f1e6',
          200: '#9ae7d5',
          300: '#73dec3',
          400: '#3AD4AF',
          500: '#3abc9a',
          600: '#2c9278',
          700: '#1e6955',
          800: '#0e3f33',
          900: '#001610',
        },

        nishyellow: {
          50: '#fff7da',
          100: '#ffe7ad',
          200: '#ffd77d',
          300: '#ffc84b',
          400: '#ffb81a',
          500: '#e69e00',
          600: '#b37b00',
          700: '#815800',
          800: '#4e3500',
          900: '#1e1100',

        },
        nishbluelight:
        {
          50: '#e4fcf6',
          100: '#c0f1e6',
          200: '#9ae7d5',
          300: '#73dec3',
          400: '#50d5b4',
          500: '#3abc9a',
          600: '#2c9278',
          700: '#1e6955',
          800: '#0e3f33',
          900: '#001610',
        },
        nishtext:
        {
          50: '#eafbf6',
          100: '#c6f0e5',
          200: '#a0e8d5',
          300: '#7adfc4',
          400: '#5ad7b4',
          500: '#45bd9b',
          600: '#369379',
          700: '#276956',
          800: '#173f34',
          900: '#041511',

        }


      },
      height: {
        sm: '371px',
        md: '406px',
        lg: '24px',
        xl: '48px',
        htmax: '600px',
        steps: '1000px',
        stepssm: '950px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
