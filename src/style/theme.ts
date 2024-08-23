import { createTheme } from "@mui/material/styles";

// 폰트
import "@fontsource-variable/noto-sans-kr";
import "@fontsource/grandiflora-one";

const theme = createTheme({
  palette: {
    primary: { main: "#315934" },
    secondary: { main: "#94A6A2" },
    background: { default: "#F0F0F0", paper: "#F0F0F0" },
    text: {
      primary: "#0A0A0A",
      secondary: "#315934",
      disabled: "#94A6A2",
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
      color: "#315934",
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
      color: "#94A6A2",
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: "#F0F0F0",
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
