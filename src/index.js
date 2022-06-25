import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

import Main from "./Main";
import reportWebVitals from "./reportWebVitals";

// import main sass file
import "./sass/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
