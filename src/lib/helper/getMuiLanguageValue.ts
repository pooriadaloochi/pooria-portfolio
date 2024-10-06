import { deDE, enUS } from '@mui/x-date-pickers/locales';

export const getMuiLanguageValue = (lang: string) => {
  switch (lang) {
    case 'en':
      return enUS;
    case 'de':
      return deDE;
    default:
      return enUS;
  }
};
