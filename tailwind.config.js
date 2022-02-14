module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1029px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

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
        secondary: "#f8f9fa"
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
