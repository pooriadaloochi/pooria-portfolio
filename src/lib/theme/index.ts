import type { Theme, ThemeConfig } from '@mui/material';
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';
// Exporting all the theme colors
export * as lightThemeColors from './light/light-theme-colors';
export * as neutralColors from './neutral-colors';
export * as darkThemeColors from './dark/dark-theme-colors';

export const createTheme = ({
  paletteMode,
  resFontSizes,
  muiLanguageValue,
}: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    createBaseOptions({ direction: 'ltr' }),
    paletteMode === 'dark' ? createDarkOptions() : createLightOptions(),
    muiLanguageValue
  );

  if (resFontSizes) theme = responsiveFontSizes(theme);

  return theme;
};
