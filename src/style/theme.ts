import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#0A0A0A",
    },
  },
  typography: {
    fontFamily: ["Noto Sans Kr", "sans-serif"].join(","),
  },
});

export default theme;
