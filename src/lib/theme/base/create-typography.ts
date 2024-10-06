import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      fontWeight: 400,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: { fontSize: '2.25rem', lineHeight: 1.2 },
    h4: { fontSize: '2rem', lineHeight: 1.2 },
    h5: { fontSize: '1.5rem', lineHeight: 1.2 },
    h6: { fontWeight: 400, fontSize: '1.125rem', lineHeight: 1.2 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.57,
      fontWeight: 500,
    },
    subtitle2: { fontSize: '1rem', lineHeight: 1.57 },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
    button: { fontWeight: 600, lineHeight: 1.5 },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
  };
};
