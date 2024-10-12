import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { usePaAppContextActions } from "../../lib/PaAppContext";
import { LocalesEnum } from "../../lib/locales/i18.types";

const languages = [
  {
    name: "en",
    country: "us",
  },
  {
    name: "fa",
    country: "ir",
  },
  {
    name: "de",
    country: "de",
  },
];

export function PdSwitchLanguage() {
  const { t, i18n } = useTranslation();
  const { switchLanguage } = usePaAppContextActions();

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as LocalesEnum;
    switchLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
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
