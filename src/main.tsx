import React from "react";
import ReactDOM from "react-dom/client";

// 폰트
import "@fontsource-variable/noto-sans-kr";
import "@fontsource/nanum-pen-script";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
