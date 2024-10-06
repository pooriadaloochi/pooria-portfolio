import { ExpandMore } from '@mui/icons-material';
import type { Components } from '@mui/material/styles/components';

// Used only to create transitions

export const createComponents = (): Components => {
  return {
    MuiButton: {
      defaultProps: { variant: 'contained' },
      styleOverrides: {
        root: {
          p: '6px 16px',
          textTransform: 'none',
          borderRadius: 8,
          '&.MuiButton-sizeLarge': { height: 48 },
          '&.MuiButton-sizeMedium': { height: 38 },
          '&.MuiButton-sizeSmall': { height: 30 },
        },
      },
    },
    MuiCard: {},
    MuiCheckbox: {
      defaultProps: { color: 'primary' },
    },
    MuiChip: {
      defaultProps: {
        sx: { pr: '6px', pl: '6px' },
      },
    },
    MuiStack: {},
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#root, #__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2_000,
        },
      },
    },
    MuiIconButton: { styleOverrides: {} },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-root': { borderRadius: 6 },
          input: { fontSize: '0.875rem' },
        },
        input: {
          '&:focus::placeholder': { opacity: 1 },
          '& :-webkit-autofill': { boxShadow: 'none' },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: { pl: '20px' },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'filled' },
      styleOverrides: {
        root: { '& .MuiInputBase-input': { pl: '20px' } },
      },
    },
    MuiFormLabel: {},
    MuiLinearProgress: {},
    MuiLink: { defaultProps: { underline: 'hover' } },
    MuiListItemIcon: {},
    MuiPopover: { defaultProps: { elevation: 16 } },
    MuiRadio: {},
    MuiSwitch: {},
    MuiTab: {},
    MuiTableCell: {},
    MuiTableHead: {},
    MuiSelect: {
      defaultProps: { IconComponent: ExpandMore },
    },
    MuiTypography: {
      defaultProps: { variant: 'body2' },
      styleOverrides: {
        root: {},
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            fontWeight: 'normal',
            fontSize: '.75rem',
          },
        },
      },
    },
  };
};
