import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import { SplashScreen } from "./components/icons/splash-screen";
import { Helmet } from "react-helmet-async";
import { usePaAppContextState } from "./lib/PaAppContext";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { getMuiLanguageValue } from "./lib/helper/getMuiLanguageValue";
import { createTheme } from "./lib/theme";
import { useTranslation } from "react-i18next";

function App() {
  const element = useRoutes(routes);
  const { paletteMode } = usePaAppContextState();
  const { language } = useTranslation().i18n;

  const theme = useMemo(
    () =>
      createTheme({
        paletteMode,
        muiLanguageValue: getMuiLanguageValue(language),
        resFontSizes: true,
      }),
    [paletteMode, language]
  );
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content={"#333"} />
      </Helmet>
      <CssBaseline />
      {false ? <SplashScreen /> : <>{element}</>}
    </ThemeProvider>
  );
}

export default App;
