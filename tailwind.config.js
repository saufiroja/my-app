module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Alef"],
      },
      backgroundImage: {
        impostor: "url('/images/background.jpeg')",
        hero: "url('/images/banner-bg.png')",
        section: "url('/images/section-bg.png')",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        main: "#ced4da",
        primary: "#5956E9",
      },
      borderRadius: {
        large: "40px",
        "2.5xl": "20px",
      },
      width: {
        400: "400px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
