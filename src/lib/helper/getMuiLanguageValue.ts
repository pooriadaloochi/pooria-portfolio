import { deDE, enUS, faIR } from "@mui/x-date-pickers/locales";

export const getMuiLanguageValue = (lang: string) => {
  switch (lang) {
    case "en":
      return enUS;
    case "de":
      return deDE;
    case "fa":
      return { localeText: faIR };
    default:
      return enUS;
  }
};
