import React from "react";
import ReactDOM from "react-dom/client";

import { NavermapsProvider } from "react-naver-maps";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/style/theme/theme.ts";

import App from "./App.tsx";

const NCP_CLIENT_ID = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavermapsProvider ncpClientId={NCP_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </NavermapsProvider>
  </React.StrictMode>
);
