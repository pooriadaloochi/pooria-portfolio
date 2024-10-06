import type { Direction, ThemeOptions } from '@mui/material';
import { createComponents } from './create-components';
import { createTypography } from './create-typography';

type Config = {
  direction?: Direction;
};

// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.

export const createOptions = (config: Config): ThemeOptions => {
  const { direction = 'ltr' } = config;

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1_200,
        xl: 1_440,
      },
    },
    components: createComponents(),
    direction,
    shape: { borderRadius: 6 },
    typography: createTypography(),
  };
};
