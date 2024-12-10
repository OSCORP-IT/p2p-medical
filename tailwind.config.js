/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d5152",
        secondary: "#4A7C7D",
        titleColor: "#22252b",
        textColor3: "#737780",
        textColor4: "#333740",
        textGradient1: "#649697",
        textGradient2: "#08312F",
        accent: "#ff6b00",
        primaryBackground: "#F2FAFA",
        bgGradient1: "#DEECE8",
        bgGradient2: "#B3D4D8",
        bgGradient3: "#143A3A",
        dropShadow: "#B3D4D8",
        islamic: "#0da500",
        blueText: "#000aff",
        textColor2: "#22252b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rage: ["Rage Italic", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
      boxShadow: {
        allSide: "0 0 10px 5px rgba(0, 0, 0, 0.5)", // Example custom shadow
      },
      screens: {
        tab: "770px",
        smLap: "1025px",
        laptop: "1285px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #E7EEEE 0%, #FFF 68.9%)",
      },
      borderRadius: {
        md: "10px", // Customize the rounded-md value (default is 0.375rem or 6px)
      },
    },
  },
  plugins: [],
};
