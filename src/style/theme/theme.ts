import { createTheme } from "@mui/material/styles";
import { color } from "./color";

// 폰트
import "@fontsource-variable/noto-sans-kr";
import "@fontsource/grandiflora-one";

const theme = createTheme({
  palette: {
    primary: { main: color.primary },
    secondary: { main: color.secondary, light: color.background.sub },
    background: {
      default: color.background.main,
      paper: color.background.main,
    },
    text: {
      primary: color.text,
      secondary: color.primary,
      disabled: color.secondary,
    },
  },
  typography: {
    fontFamily: ["Noto Sans Kr", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: "120%",
      letterSpacing: 2,
      fontFamily: ["Grandiflora One", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "1.5rem",
      color: color.primary,
      fontWeight: "bold",
      letterSpacing: 2,
      lineHeight: "4rem",
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: 300,
      lineHeight: "140%",
    },
    caption: {
      color: color.secondary,
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: color.background.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: "pre-line", // 줄바꿈(\n)을 반영하도록 설정
          textAlign: "center",
          wordBreak: "keep-all",
        },
      },
    },
  },
});

export default theme;
