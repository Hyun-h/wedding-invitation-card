import { createTheme } from "@mui/material/styles";

// 폰트
import "@fontsource-variable/noto-sans-kr";
import "@fontsource/nanum-pen-script";
import "@fontsource/grandiflora-one";

const theme = createTheme({
  palette: {
    text: {
      primary: "#0A0A0A",
      secondary: "#315934",
      disabled: "#94A6A2",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ["Noto Sans Kr", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: "120%",
      letterSpacing: 2,
      fontFamily: ["Grandiflora One", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 300,
      lineHeight: "140%",
    },
  },
  components: {
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
