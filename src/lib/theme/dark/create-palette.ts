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
} from './dark-theme-colors';

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
    divider: neutral[300],
    error,
    info,
    mode: 'dark',
    mono: { dark: neutral[900], light: neutral[0] },
    primary,
    secondary,
    success,
    warning,
    grey,
    customGrey: grey,
    text: {
      primary: textColors.main,
      secondary: textColors.dark,
      disabled: textColors.darkest,
    },
  };
};
