module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["satoshiregular"],
      title: ["satoshibold"],
      black: ["satoshiblack"],
      caption: ["satoshilight"],
    },
    colors: {
      Secondary1: "#EBF8FF",
      Secondary2: "#FFF5D2",
      Secondary3: "#F3FBFF",
      Secondary4: "#F3EEFF",
      Neutral800: "#14142B",
      Neutral700: "#4E4B66",
      Neutral600: "#777990",
      Neutral500: "#B2B4C4",
      Neutral400: "#D9DBE9",
      Neutral300: "#EFF0F6",
      Neutral200: "#F6F7FF",
      Neutral100: "#FFFFFF",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
