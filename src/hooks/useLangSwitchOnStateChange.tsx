import { useEffect } from "react";
import { ChosenLanguageType, ISettingsState } from "../pages/HalfLifeScreen";
import i18next from "i18next";
import { LanguageType } from "../localization/languages";

export const languageMap: {
  [key in ChosenLanguageType]: LanguageType;
} = {
  Русский: "ru",
  English: "en",
};

const useLangSwitchOnStateChange = (settingsState: ISettingsState) => {
  useEffect(() => {
    i18next.changeLanguage(languageMap[settingsState.chosenLanguage]);
  }, [settingsState.chosenLanguage]);
};

export default useLangSwitchOnStateChange;
