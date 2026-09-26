import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import App from "./App";
import theme from "./theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlayerProvider } from "./context/PlayerContext";
import { AuthProvider } from "./context/AuthContext";
import AOSProvider  from "./providers/AOSProvider"
// import Hotjar from "@hotjar/browser";
//import { HotjarTracker } from "./components";

// const siteId = Number(import.meta.env.VITE_HOTJAR_SITE_ID);

// if (siteId) {
//   Hotjar.init(siteId, 6);
// }

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      {/* <HotjarTracker /> */}
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <PlayerProvider>
              <AOSProvider />
                <App />
            </PlayerProvider>
          </QueryClientProvider>
        </AuthProvider>
        <Toaster position="top-right" />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
