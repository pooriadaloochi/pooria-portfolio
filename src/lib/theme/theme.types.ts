import type { Direction, PaletteColor, PaletteMode } from '@mui/material';
import type { Overwrite } from '@mui/types';

export type ThPaletteColorNoAlpha = Overwrite<
  PaletteColor,
  { alpha4?: string; darkest: string }
>;

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface Palette {
    customGrey: GreyColors;
    mono: { dark: string; light: string };
    neutral?: NeutralColors;
  }

  // eslint-disable-next-line
  interface PaletteOptions {
    customGrey: Partial<GreyColors>;
    mono: { dark: string; light: string };
    neutral?: NeutralColors;
  }

  // eslint-disable-next-line
  interface PaletteColor {
    alpha4: string;
    darkest: string;
  }

  type GreyColors = {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    // eslint-disable-next-line
    1_000: string;
    1_100: string;
  };

  type NeutralColors = {
    0: string;
    25: string;
    50: string;
    // eslint-disable-next-line
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  type ThemeConfig = {
    direction?: Direction;
    muiLanguageValue?: any;
    paletteMode?: PaletteMode;
    resFontSizes?: boolean;
  };
}
