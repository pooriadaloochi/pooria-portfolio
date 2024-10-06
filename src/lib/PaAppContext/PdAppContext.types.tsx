import type { PaletteMode } from "@mui/material";

export enum PaAppContextActionName {
  SWITCH_THEME,
}

export type PaAppContextState = {
  paletteMode: PaletteMode;
};

export type PaAppContextActions = {
  switchTheme: () => void;
};

export type PaAppContextAction =
  PaContextAction<PaAppContextActionName.SWITCH_THEME>;

export type PaContextAction<T> = {
  type: T;
};

export type PaContextActionWithPayload<T, P> = {
  payload: P;
  type: T;
};
