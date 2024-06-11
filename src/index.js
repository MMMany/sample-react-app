import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./utils/style";
import { createTheme } from "@mui/material/styles";
import MainRouter from "./routers/MainRouter";
import useMediaQuery from "@mui/material/useMediaQuery";

function CustomThemeProvider(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => {
    const themeProps = createCustomTheme(process.env.USE_SYSTEM_THEME ? prefersDarkMode : false);
    return createTheme({ ...themeProps });
  }, [prefersDarkMode]);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
