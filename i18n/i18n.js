import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize'
import de from './translations/de.json';
import en from './translations/en.json';
import ar from './translations/ar.json';

let translations = {
  ar: () => ar,
  en: () => en,
  de: () => de,
};

let fallback = { languageTag: "en", isRTL: false };

let { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation : ar,
      },
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    lng: languageTag,
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;