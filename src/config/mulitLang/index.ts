import * as RNLocalize from "react-native-localize";
import english from "../../../languages/english.json";
import french from "../../../languages/french.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const languageDetector: any = {
  type: "languageDetector",
  async: true,
  detect: (callback: (arg0: any) => any) => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUerLanguages: () => {},
};
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "fr",
    resources: {
      fr: french,
      en: english,
    },
  });

export default i18next;
