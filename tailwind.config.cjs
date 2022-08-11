/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      background: "#FAFAFA",
      card: "#F3F2F2",
      input: "#EDEDED",
      button: "#E6E5E5",
      hover: "#D7D5D5",
      label: "#8D8686",
      text: "#574F4D",
      subtitle: "#403937",
      title: "#272221",
      purpleDark: "#4B2995",
      purple: "#8047F8",
      purpleLight: "#EBE5F9",
      yellowDark: "#C47F17",
      yellow: "#DBAC2C",
      yellowLight: "#F1E9C9",
    },
    extend: {
      borderRadius: {
        "4xl": "36px",
      },
      width: {
        banner: "1004px",
      },
      height: {
        banner: "650px",
      },
      backgroundImage: {
        bannerBg: "url('/src/assets/Background.png')",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        baloo2: "'Baloo 2', cursive",
      },
      fontSize: {
        titleXL: ["48px", { fontWeight: 800 }],
        titleL: ["32px", { fontWeight: 800 }],
        titleM: ["24px", { fontWeight: 800 }],
        titleS: ["20px", { fontWeight: 700 }],
        titleXS: ["18px", { fontWeight: 700 }],
        titleXS: ["18px", { fontWeight: 700 }],
        boldL: ["20px", { fontWeight: 700 }],
        boldM: ["16px", { fontWeight: 700 }],
        boldS: ["14px", { fontWeight: 700 }],
        regularL: ["20px", { fontWeight: 400 }],
        regularM: ["16px", { fontWeight: 400 }],
        regularS: ["14px", { fontWeight: 400 }],
        tag: ["10px", { fontWeight: 700 }],
        buttonG: ["14px", { fontWeight: 700 }],
        buttonS: ["12px", { fontWeight: 400 }],
      },
    },
  },
  plugins: [],
};
