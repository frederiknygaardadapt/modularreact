module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zalando: "#FF6900",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
