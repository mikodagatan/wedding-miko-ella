const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
        header: ['Playlist Script', ...defaultTheme.fontFamily.sans],
        logo: ['Bellefair', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pastelPink: '#f8dbe0',
        pink: '#f2a9b6',
        darkPink: '#ed8092',
        pastelBlue: '#bed5e7',
        pastelYellow: '#f4de95',
        pastelOrange: '#f6bd7b'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
