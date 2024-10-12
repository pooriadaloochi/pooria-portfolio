import type { PaletteMode } from "@mui/material";
import { LocalesType } from "../locales/i18.types";

export enum PaAppContextActionName {
  SWITCH_THEME,
  SWITCH_LANGUAGE,
}

export type PaAppContextState = {
  paletteMode: PaletteMode;
  lang: LocalesType;
};

export type PaAppContextActions = {
  switchTheme: () => void;
  switchLanguage: (payload: LocalesType) => void;
};

export type PaAppContextAction =
  | PaContextAction<PaAppContextActionName.SWITCH_THEME>
  | PaContextActionWithPayload<
      PaAppContextActionName.SWITCH_LANGUAGE,
      LocalesType
    >;

export type PaContextAction<T> = {
  type: T;
};

export type PaContextActionWithPayload<T, P> = {
  payload: P;
  type: T;
};
