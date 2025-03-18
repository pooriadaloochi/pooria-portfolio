import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  PaAppContextProvider,
  PaAppContextState,
} from "./lib/context/PaAppContext";
import { getLocalStorageAppSettings } from "./lib/helper/local-storage/getLocalStorageAppSettings";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const APP_CONTEXT_INITIAL_STATE: PaAppContextState = {
  ...getLocalStorageAppSettings(),
};

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <PaAppContextProvider initialState={APP_CONTEXT_INITIAL_STATE}>
          <App />
        </PaAppContextProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
