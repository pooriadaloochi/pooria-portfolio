import { createContext, useEffect, useMemo, useReducer } from "react";
import { PaAppContextReducer } from "./PsAppContext.reducer";
import {
  PaAppContextActionName,
  type PaAppContextActions,
  type PaAppContextState,
} from "./PdAppContext.types";
import { LocalesEnum } from "../locales/i18.types";
import { useTranslation } from "react-i18next";

export const PaAppContextStateContext = createContext<PaAppContextState>(
  {} as PaAppContextState
);
export const PaAppContextActionsContext = createContext<PaAppContextActions>(
  {} as PaAppContextActions
);

const INITIAL_STATE: PaAppContextState = {
  paletteMode: "dark",
  lang: LocalesEnum.EN,
};

export function PaAppContextProvider({
  children,
  initialState = INITIAL_STATE,
}: {
  readonly children: React.ReactNode;
  readonly initialState?: PaAppContextState;
}) {
  const [state, dispatch] = useReducer(PaAppContextReducer, {
    ...INITIAL_STATE,
    ...initialState,
  });
  const { i18n } = useTranslation();

  const actionsValue = useMemo(
    (): PaAppContextActions => ({
      switchTheme() {
        dispatch({ type: PaAppContextActionName.SWITCH_THEME });
      },
      switchLanguage(payload) {
        dispatch({
          payload,
          type: PaAppContextActionName.SWITCH_LANGUAGE,
        });
      },
    }),
    []
  );
  useEffect(() => {
    i18n.changeLanguage(state.lang);
  }, [i18n, state.lang]);

  return (
    <PaAppContextStateContext.Provider value={state}>
      <PaAppContextActionsContext.Provider value={actionsValue}>
        {children}
      </PaAppContextActionsContext.Provider>
    </PaAppContextStateContext.Provider>
  );
}
