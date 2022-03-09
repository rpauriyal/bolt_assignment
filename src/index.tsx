import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./_app/index";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./_core/theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
