import { useContext } from 'react';
import {
  PaAppContextActionsContext,
  PaAppContextStateContext,
} from './PdAppContext.context';

export function usePaAppContextState() {
  const context = useContext(PaAppContextStateContext);
  if (context === undefined) {
    throw new Error(
      'usePaAppContextStateContext must be used within a PaAppContextProvider'
    );
  }

  return context;
}

export function usePaAppContextActions() {
  const context = useContext(PaAppContextActionsContext);
  if (context === undefined) {
    throw new Error(
      'usePaAppContextActionsContext must be used within a PaAppContextProvider'
    );
  }

  return context;
}
