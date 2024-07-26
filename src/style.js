import { createTheme } from "@mui/material/styles";

const MaterialColorV3 = {
  dark: {
    primary: {
      main: "#D0BCFF",
      default: "#D0BCFF",
      onDefault: "#381E72",
      container: "#4F378B",
      onContainer: "#EADDFF",
    },
    secondary: {
      main: "#CCC2DC",
      default: "#CCC2DC",
      onDefault: "#332D41",
      container: "#4A4458",
      onContainer: "#E8DEF8",
    },
    tertiary: {
      main: "#EFB8C8",
      default: "#EFB8C8",
      onDefault: "#492532",
      container: "#633B48",
      onContainer: "#FFD8E4",
    },
    error: {
      main: "#F2B8B5",
      default: "#F2B8B5",
      onDefault: "#601410",
      container: "#8C1D18",
      onContainer: "#F9DEDC",
    },
    background: {
      default: "#141218",
      paper: "#36343B",
      container: "#211F26",
      variant: "#49454F",
      inverse: "#E6E0E9",
    },
    text: {
      primary: "#E6E0E9",
      disabled: "#3B383E",
      variant: "#CAC4D0",
      inverse: "#322F35",
      tint: "#D0BCFF",
    },
    outline: "#938F99",
    divider: "#49454F",
  },
  light: {
    primary: {
      main: "#6750A4",
      default: "#6750A4",
      onDefault: "#FFFFFF",
      container: "#EADDFF",
      onContainer: "#21005D",
    },
    secondary: {
      main: "#625B71",
      default: "#625B71",
      onDefault: "#FFFFFF",
      container: "#E8DEF8",
      onContainer: "#1D192B",
    },
    tertiary: {
      main: "#7D5260",
      default: "#7D5260",
      onDefault: "#FFFFFF",
      container: "#FFD8E4",
      onContainer: "#31111D",
    },
    error: {
      main: "#B3261E",
      default: "#B3261E",
      onDefault: "#FFFFFF",
      container: "#F9DEDC",
      onContainer: "#410E0B",
    },
    background: {
      default: "#FEF7FF",
      paper: "#FFFFFF",
      container: "#F3EDF7",
      variant: "#E7E0EC",
      inverse: "#322F35",
    },
    text: {
      primary: "#1D1B20",
      disabled: "#DED8E1",
      variant: "#49454F",
      inverse: "#F5EFF7",
      tint: "#6750A4",
    },
    outline: "#79747E",
    divider: "#CAC4D0",
  },
};

export const createCustomTheme = (isDarkMode) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode ? MaterialColorV3.dark : MaterialColorV3.light),
    },
    // components: {
    //   MuiButton: {

    //   }
    // }
  });
};
