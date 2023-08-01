import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";
import { languageMap } from "../hooks/useLangSwitchOnStateChange";
import { ChosenLanguageType } from "../pages/HalfLifeScreen";

export const savedLanguage: ChosenLanguageType =
  JSON.parse(localStorage.getItem("settingsState") ?? "null")?.chosenLanguage ??
  (navigator.language === "ru-RU" ? "Русский" : "English");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    lng: languageMap[savedLanguage],
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
