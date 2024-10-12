import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import { SplashScreen } from "./components/icons/splash-screen";
import { Helmet } from "react-helmet-async";
import { usePaAppContextState } from "./lib/PaAppContext";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { getMuiLanguageValue } from "./lib/helper/getMuiLanguageValue";
import { createTheme } from "./lib/theme";

import "react-toastify/dist/ReactToastify.css";
import "./lib/locales/i18n";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  const element = useRoutes(routes);
  const { paletteMode, lang } = usePaAppContextState();

  const theme = useMemo(
    () =>
      createTheme({
        paletteMode,
        muiLanguageValue: getMuiLanguageValue(lang),
        resFontSizes: true,
        direction: lang === "fa" ? "rtl" : "ltr",
      }),
    [paletteMode, lang]
  );

  useEffect(() => {
    document.body.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="dark" />
      </Helmet>
      <CssBaseline />
      <ToastContainer position="bottom-left" theme="colored" />
      {false ? <SplashScreen /> : <>{element}</>}
    </ThemeProvider>
  );
}

export default App;
