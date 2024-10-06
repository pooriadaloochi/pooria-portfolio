import { LOCAL_STORAGE_KEYS } from "../../config/local-storage-keys";

export function getLocalStorageAppSettings() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEYS.appSetting);
  if (value) return JSON.parse(value);
}
