import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { toast } from "react-toastify";
import { commonEN } from "@locales/translations/common/en";
import { commonFA } from "@locales/translations/common/fa";
import { commonDE } from "@locales/translations/common/de";
import { LocalesEnum, LocalesType } from "@locales/i18.types";
import { usePaAppContextActions } from "@context/PaAppContext";

type LanguagesType = {
  name: LocalesType;
  country: string;
};

const languages: LanguagesType[] = [
  {
    name: LocalesEnum.EN,
    country: "us",
  },
  {
    name: LocalesEnum.FA,
    country: "ir",
  },
  {
    name: LocalesEnum.DE,
    country: "de",
  },
];

const getLanguageChangeMessage = (name: string) => {
  switch (name) {
    case LocalesEnum.EN:
      return commonEN["common.languages.messages.success"];
    case LocalesEnum.FA:
      return commonFA["common.languages.messages.success"];
    case LocalesEnum.DE:
      return commonDE["common.languages.messages.success"];
    default:
      return commonEN["common.languages.messages.error"];
  }
};

export function PdSwitchLanguage() {
  const { t, i18n } = useTranslation();
  const { switchLanguage } = usePaAppContextActions();

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as LocalesType;
    switchLanguage(selectedLanguage);
    toast.success(getLanguageChangeMessage(selectedLanguage), {
      autoClose: 1000,
    });
  };
  const getToken = (name: string) => {
    return `common.languages.${name}`;
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChangeLanguage}
      variant="outlined"
      displayEmpty
      sx={{ minWidth: "150px" }}
      renderValue={(value) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <span
            className={`fi fi-${
              languages.find((lang) => lang.name === value)?.country
            }`}
          />
          {t(getToken(value))}
        </Stack>
      )}
    >
      {languages.map(({ name, country }) => (
        <MenuItem key={name} value={name}>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <span className={`fi fi-${country}`} style={{ fontSize: "20px" }} />
            {t(getToken(name))}
          </Stack>
        </MenuItem>
      ))}
    </Select>
  );
}
