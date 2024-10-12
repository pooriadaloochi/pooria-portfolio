import { LOCAL_STORAGE_KEYS } from "../../config/local-storage-keys";
import { getLocalStorageAppSettings } from "./getLocalStorageAppSettings";

export function setLocalStorageValue(value: Record<string, unknown>) {
  const currentValue = getLocalStorageAppSettings();
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.appSetting,
    JSON.stringify({ ...currentValue, ...value })
  );
}
