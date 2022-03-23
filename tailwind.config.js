module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        zalando: '#FF6900',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
