import { setLocalStorageValue } from "../helper/local-storage/setLocalStorageValue";
import {
  PaAppContextActionName,
  type PaAppContextAction,
  type PaAppContextState,
} from "./PdAppContext.types";

export function PaAppContextReducer(
  state: PaAppContextState,
  action: PaAppContextAction
): PaAppContextState {
  switch (action.type) {
    case PaAppContextActionName.SWITCH_THEME: {
      const paletteMode = state.paletteMode === "dark" ? "light" : "dark";
      setLocalStorageValue({ paletteMode });
      return { ...state, paletteMode };
    }

    case PaAppContextActionName.SWITCH_LANGUAGE: {
      setLocalStorageValue({ lang: action.payload });
      return { ...state, lang: action.payload };
    }

    default:
      throw new Error("Unhandled action type");
  }
}
