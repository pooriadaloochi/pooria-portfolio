import type { GreyColors, PaletteColor } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { neutral } from "../neutral-colors";
import type { ThPaletteColorNoAlpha } from "../theme.types";

const withAlphas = (color: ThPaletteColorNoAlpha): PaletteColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
  };
};

export const primary = withAlphas({
  light: "#B2DFDB",
  main: "#4DB6AC",
  dark: "#00796B",
  darkest: "#004D40",
  contrastText: "#000000",
});

export const secondary = withAlphas({
  light: "#FFAB91",
  main: "#FF7043",
  dark: "#D84315",
  darkest: "#BF360C",
  contrastText: "#ffffff",
});

export const success = withAlphas({
  light: "#69F0AE",
  main: "#00C853",
  dark: "#087443",
  darkest: "#004D40",
  contrastText: "#000000",
});

export const info = withAlphas({
  light: "#80DEEA",
  main: "#00ACC1",
  dark: "#00838F",
  darkest: "#005662",
  contrastText: "#000000",
});

export const blue = withAlphas({
  light: "#64B5F6",
  main: "#1E88E5",
  dark: "#1565C0",
  darkest: "#0D47A1",
  contrastText: "#ffffff",
});

export const warning = withAlphas({
  light: "#FFE082",
  main: "#FFB300",
  dark: "#FF8F00",
  darkest: "#FF6F00",
  contrastText: "#000000",
});

export const error = withAlphas({
  light: "#FF8A80",
  main: "#FF5252",
  dark: "#D32F2F",
  darkest: "#B71C1C",
  contrastText: "#ffffff",
});

export const backgroundColor = withAlphas({
  light: "#FFFFFF",
  main: "#F5F5F5",
  dark: "#E0E0E0",
  darkest: "#BDBDBD",
  contrastText: "#000000",
});

export const textColors = withAlphas({
  light: "#212121",
  main: "#424242",
  dark: "#757575",
  darkest: "#BDBDBD",
  contrastText: neutral[900],
});

export const inheritColors = withAlphas({
  light: "#FAFAFA",
  main: "#FAFAFA",
  dark: "#EEEEEE",
  darkest: "#E0E0E0",
  contrastText: neutral[800],
});

export const grey: GreyColors = {
  0: "#FFFFFF",
  100: "#F5F5FF",
  200: "#E0E0E0",
  300: "#BDBDBD",
  400: "#9E9E9E",
  500: "#757575",
  600: "#616161",
  700: "#424242",
  800: "#2C2C35",
  900: "#1E1E24",
  1_000: "#0F0F13",
  1_100: "#000000",
};

export const gradients = {
  primary: `linear-gradient(90deg, ${primary.light} 0%, ${primary.dark} 100%)`,
  secondary: `linear-gradient(90deg, ${secondary.light} 0%, ${secondary.dark} 100%)`,
  success: `linear-gradient(90deg, ${success.light} 0%, ${success.dark} 100%)`,
  info: `linear-gradient(90deg, ${info.light} 0%, ${info.dark} 100%)`,
  blue: `linear-gradient(90deg, ${blue.light} 0%, ${blue.dark} 100%)`,
  warning: `linear-gradient(90deg, ${warning.light} 0%, ${warning.dark} 100%)`,
  error: `linear-gradient(90deg, ${error.light} 0%, ${error.dark} 100%)`,
};
