module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if you're using TypeScript
  ],
  theme: {
    extend: {
      colors: {
        blackBg: "#15161A",
        greyDark: "#1F2024",
        greyLight: "#313236",
        prymaryTxt: "#4A66F5",
        prymaryBg: "#555FFF",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
