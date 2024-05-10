import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

i18n
  .use(LanguageDetector) // detects user language on device being used
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      // key connection to json files
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
  });

export default i18n;
