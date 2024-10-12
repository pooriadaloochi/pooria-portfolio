import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import { PaAppContextProvider, PaAppContextState } from "./lib/PaAppContext";
import { getLocalStorageAppSettings } from "./lib/helper/local-storage/getLocalStorageAppSettings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const APP_CONTEXT_INITIAL_STATE: PaAppContextState = {
  activeModals: [],
  activeUser: null,
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
