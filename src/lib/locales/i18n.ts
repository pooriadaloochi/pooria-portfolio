import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fa } from './translations/fa';
import { en } from './translations/en';
import { de } from './translations/de';

export default i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    de: { translation: de },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
