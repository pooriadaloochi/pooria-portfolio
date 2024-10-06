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
  light: "#68C9BE",
  main: "#009688",
  dark: "#00796B",
  darkest: "#004D40",
  contrastText: "#ffffff",
});

export const secondary = withAlphas({
  light: "#FF8A65",
  main: "#FF5722",
  dark: "#E64A19",
  darkest: "#BF360C",
  contrastText: "#ffffff",
});

export const success = withAlphas({
  light: "#00C853",
  main: "#0B8457",
  dark: "#087443",
  darkest: "#004D40",
  contrastText: "#ffffff",
});

export const info = withAlphas({
  light: "#00E0FF",
  main: "#00BCD4",
  dark: "#0E7090",
  darkest: "#164C63",
  contrastText: "#ffffff",
});

export const blue = withAlphas({
  light: "#3D97FF",
  main: "#2196F3",
  dark: "#004EEB",
  darkest: "#00359E",
  contrastText: "#ffffff",
});

export const warning = withAlphas({
  light: "#FFB74D",
  main: "#FF971D",
  dark: "#B54708",
  darkest: "#8C3A00",
  contrastText: "#ffffff",
});

export const error = withAlphas({
  light: "#FF5252",
  main: "#DC3545",
  dark: "#B42318",
  darkest: "#7A271A",
  contrastText: "#ffffff",
});

export const backgroundColor = withAlphas({
  light: "#161420",
  main: "#0F0F13",
  dark: "#05050F",
  darkest: "#000000",
  contrastText: "#ffffff",
});

export const textColors = withAlphas({
  light: "#ffffff",
  main: "#EDF2F7",
  dark: "#A0AEC0",
  darkest: "#718096",
  contrastText: neutral[700],
});

export const inheritColors = withAlphas({
  light: "#ffffff",
  main: "#F5F5FF",
  dark: "#F5F5FF",
  darkest: "#F5F5FF",
  contrastText: neutral[700],
});

export const grey: GreyColors = {
  0: "#ffffff",
  100: "#F5F5FF",
  200: "#D0D0DA",
  300: "#A9A9B7",
  400: "#8A8A98",
  500: "#70707C",
  600: "#5B5B65",
  700: "#40404A",
  800: "#2C2C35",
  900: "#1E1E24",
  1_000: "#0F0F13",
  1_100: "#000000",
};

export const gradients = {
  purple: "linear-gradient(90deg, #7517F8 0%, #E323FF 100%)",
  darkUltramarine: "linear-gradient(90deg, #02A4FF 0%, #7D40FF 100%)",
  lightBruise: "linear-gradient(90deg, #4DA1FF 0%, #4DFFDF 100%)",
};
