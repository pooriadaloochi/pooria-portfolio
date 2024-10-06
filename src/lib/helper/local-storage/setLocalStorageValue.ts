import { LOCAL_STORAGE_KEYS } from "../../config/local-storage-keys";

export function setLocalStorageValue(value: Record<string, unknown>) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.appSetting, JSON.stringify(value));
}
