import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { mytheme } from "./components/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mytheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
