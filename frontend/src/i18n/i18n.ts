import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/i18n/locales/en/common.json";

const resources = {
  en: { common: enCommon },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React already escapes HTML
  },
});

export default i18n;
