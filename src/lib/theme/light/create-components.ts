import type { PaletteOptions, Theme } from '@mui/material';
import type { Components } from '@mui/material/styles/components';
import { neutral } from '../neutral-colors';
import { inheritColors } from './light-theme-colors';

type Config = {
  palette: PaletteOptions;
};

export const createComponents = ({ palette }: Config): Partial<Components> => {
  const { action, divider, primary, secondary, success, warning, error, info } =
    palette as Theme['palette'];

  return {
    MuiCard: {},
    MuiChip: {
      styleOverrides: {
        icon: {},
        root: {
          '&.MuiChip-colorPrimary': {
            '&:hover': {
              backgroundColor: primary?.dark,
            },
          },
          '&.MuiChip-colorSecondary': {
            '&:hover': {
              backgroundColor: secondary?.dark,
            },
          },
          '&.MuiChip-colorInfo': {
            color: neutral[400],
            '&:hover': {
              backgroundColor: info?.dark,
              color: info?.contrastText,
            },
          },
          '&.MuiChip-colorError': {
            '&:hover': { backgroundColor: error?.dark },
          },
          '&.MuiChip-colorSuccess': {
            '&:hover': {
              backgroundColor: success?.dark,
            },
          },
          '&.MuiChip-colorWarning': {
            '&:hover': {
              backgroundColor: warning?.dark,
            },
          },
          '&.MuiChip-colorDefault': {
            backgroundColor: neutral[600],
            '&:hover': {
              backgroundColor: neutral[400],
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: action?.disabledBackground,
            color: action?.disabled,
          },
          '&.MuiButton-colorInherit': {
            color: inheritColors.contrastText,
            backgroundColor: inheritColors.main,
            '&:disabled': {
              backgroundColor: action?.disabledBackground,
              color: action?.disabled,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:focus::placeholder': { color: neutral[50], opacity: 1 },
          '&::placeholder': {
            color: palette.text!.secondary,
          },
          '& :-webkit-autofill': { boxShadow: 'none' },
        },
      },
    },
    MuiSwitch: {},
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: divider,
        },
      },
    },
    MuiTableHead: {},
    MuiTooltip: {},
    MuiTypography: {},
  };
};
