import { createContext, useMemo, useReducer } from "react";
import { PaAppContextReducer } from "./PsAppContext.reducer";
import {
  PaAppContextActionName,
  type PaAppContextActions,
  type PaAppContextState,
} from "./PdAppContext.types";

export const PaAppContextStateContext = createContext<PaAppContextState>(
  {} as PaAppContextState
);
export const PaAppContextActionsContext = createContext<PaAppContextActions>(
  {} as PaAppContextActions
);

const INITIAL_STATE: PaAppContextState = {
  paletteMode: "dark",
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

  const actionsValue = useMemo(
    (): PaAppContextActions => ({
      switchTheme() {
        dispatch({ type: PaAppContextActionName.SWITCH_THEME });
      },
    }),
    []
  );

  return (
    <PaAppContextStateContext.Provider value={state}>
      <PaAppContextActionsContext.Provider value={actionsValue}>
        {children}
      </PaAppContextActionsContext.Provider>
    </PaAppContextStateContext.Provider>
  );
}
