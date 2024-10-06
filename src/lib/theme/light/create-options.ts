import type { ThemeOptions } from '@mui/material';
import { createComponents } from './create-components';
import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';

export const createOptions = (): ThemeOptions => {
  const palette = createPalette();
  const components = createComponents({ palette });
  const shadows = createShadows();

  return { components, palette, shadows };
};
