import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "2px",
  palette: {
    common: {
      white: "#FFFFFF",
      blue: "#4FC7FA",
      violet: "#8676FF",
      indigo: "#023AFF",
      yellow: "#FFBA69",
      orange: "#FD756C",
      green: "#00B998",
      lightupGreen: "#24D092",
      lightdownRed: "#E24A4A",
      offWhite: "#FBF8F1",
      error: "#FBE7E7",
      red: "#DA1414",
      trendingGreen: "#0CE06E",
    },
    orange: ["#EF420F", "#FF6639", "#FF7D57", "#FFE6DF", "#FFF3F0"],
    status: {
      error1: "#DA1414",
      error2: "#FBE7E7",
      warning1: "#DB9000",
      warning2: "#F8F2E5",
      success1: "#287D3C",
      success2: "#E9F2EB",
    },

    teal: [
      "#224D5B",
      "#336676",
      "#4F8293",
      "#527D8B",
      "#CFE0E5",
      "#F4F9FB",
      "#83AAB7",
      "#E6F1F4",
    ],
    gradient: [
      "linear-gradient(96.45deg, #698F9A 0%, #255A68 100%)",
      "linear-gradient(96.45deg, #698F9A 0%, #255A68 100%)",
      "linear-gradient(96.45deg, #ff6e65 0%, #ff8957 100%)",
    ],
    greyScale: [
      "#252525",
      "#555555",
      "#858585",
      "#C5C5C5",
      "#E5E5E5",
      "#F5F5F5",
      "#F9F9F9",
      "#FFFFFF",
      "#000000",
      "#00000099",
      "#FCFCFC",
    ],
    primary: {
      main: "#224D5B",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#224D5B",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Nunito-regular",
      "Nunito-italic",
      "Nunito-semiBold",
      "Nunito-light",
      "Nunito-bold",
    ],
    fontStyle: ["normal", "italic"],
    fontWeight: ["300", "400", "500", "600", "700"],
    fontSize: {
      extraSmall: "12px",
      small: "14px",
      regular: " 16px",
      medium: " 18px",
      large: "20px",
      mediumLarge: "28px",
      extraLarge: "24px",
      largest: "36px",
      extraLargest: "40px",
      countSize: "58px",
      size46: "46px",
      size32: "32px",
      size60: "60px",
      size8: "8px",
      size10: "10px",
      size25: "25px",
    },
  },

  screens: {
    screenSize: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      desktop: "2560px",
    },
  },
};
