import type { PaletteMode } from "@mui/material";
import { LocalesEnum } from "../locales/i18.types";

export enum PaAppContextActionName {
  SWITCH_THEME,
  SWITCH_LANGUAGE,
}

export type PaAppContextState = {
  paletteMode: PaletteMode;
  lang: LocalesEnum;
};

export type PaAppContextActions = {
  switchTheme: () => void;
  switchLanguage: (payload: LocalesEnum) => void;
};

export type PaAppContextAction =
  | PaContextAction<PaAppContextActionName.SWITCH_THEME>
  | PaContextActionWithPayload<PaAppContextActionName.SWITCH_LANGUAGE, LocalesEnum>;

export type PaContextAction<T> = {
  type: T;
};

export type PaContextActionWithPayload<T, P> = {
  payload: P;
  type: T;
};
