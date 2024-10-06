import type { PaletteOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { neutral } from '../neutral-colors';
import {
  secondary,
  primary,
  error,
  info,
  success,
  warning,
  backgroundColor,
  textColors,
  grey,
} from './light-theme-colors';

export const createPalette = (): PaletteOptions => {
  return {
    action: {
      active: neutral[500],
      disabled: neutral[400],
      disabledBackground: neutral[600],
      focus: alpha(neutral[100], 0.16),
      hover: alpha(neutral[100], 0.04),
      selected: alpha(neutral[100], 0.12),
    },
    background: {
      default: backgroundColor.main,
      paper: backgroundColor.light,
    },
    divider: neutral[500],
    error,
    info,
    mode: 'light',
    mono: { dark: neutral[100], light: neutral[900] },
    grey,
    customGrey: grey,
    primary,
    secondary,
    success,
    warning,
    text: {
      primary: textColors.main,
      secondary: textColors.dark,
      disabled: textColors.darkest,
    },
  };
};
