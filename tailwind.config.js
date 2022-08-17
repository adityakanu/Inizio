/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      xd: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colours: {
        darkPurple: 'hsl(269, 89%, 18%)',
        redPurple: 'hsl(287, 88%, 19%)',
        purple: 'hsl(267, 80%, 29%)',
        lightPurple: 'hsl(252, 77%, 88%)',
      },
    },
  },
  plugins: [],
}
