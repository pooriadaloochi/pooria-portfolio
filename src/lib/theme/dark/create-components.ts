import type { PaletteOptions, Theme } from '@mui/material';
import type { Components } from '@mui/material/styles/components';
import { neutral } from '../neutral-colors';
import { inheritColors } from './dark-theme-colors';

type Config = {
  palette: PaletteOptions;
};

export const createComponents = ({ palette }: Config): Partial<Components> => {
  const {
    action,
    primary,
    secondary,
    success,
    warning,
    error,
    info,
    background,
    text,
  } = palette as Theme['palette'];

  return {
    MuiCard: {
      styleOverrides: {
        root: { background: background?.paper },
      },
    },
    MuiChip: {
      styleOverrides: {
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
            '&:hover': {
              backgroundColor: error?.dark,
            },
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
          '&:focus::placeholder': { color: neutral[50] },
          '&::placeholder': {
            color: text!.secondary,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[400],
          color: primary?.contrastText,
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            backgroundColor: background?.paper,
            borderBottomColor: secondary?.main,
            '& .MuiButtonBase-root': { opacity: 1 },
            '& .MuiSvgIcon-root': { fill: neutral[200] },
          },
          '& .MuiCheckbox-root': {
            '& .MuiSvgIcon-root': { fill: neutral[600] },
          },
          '&:hover': { '& .MuiSvgIcon-root': { fill: neutral[200] } },
        },
        head: {
          '& .MuiTableCell-root': {
            backgroundColor: secondary?.main,
            color: secondary?.light,
            '& .MuiSvgIcon-root': { fill: neutral[200] },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            '& .MuiCheckbox-root': {
              '& .MuiSvgIcon-root': { fill: neutral[200] },
            },
          },
        },
      },
    },
    MuiTooltip: {},
    MuiTypography: {},
  };
};
