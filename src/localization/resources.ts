import { LanguageType } from "./languages";
import menu from "./locales/menu";
import settings from "./locales/settings";
import chapters from "./locales/chapters";
import achievementsList from "./locales/achievementsList";
import newGame from "./locales/newGame";
import loadGame from "./locales/loadGame";
import achievements from "./locales/achievements";
import quit from "./locales/quit";
import intro from "./locales/intro";

type TranslationObject = {
  [key in string]: string | TranslationObject;
};

export type ResourcesType = {
  [key in LanguageType]: {
    translation: TranslationObject;
  };
};

const getLocale = (lang: LanguageType): TranslationObject => ({
  intro: { ...intro[lang] },
  menu: { ...menu[lang] },
  settings: { ...settings[lang] },
  chapters: { ...chapters[lang] },
  achievementsList: { ...achievementsList[lang] },
  newGame: { ...newGame[lang] },
  loadGame: { ...loadGame[lang] },
  achievements: { ...achievements[lang] },
  quit: { ...quit[lang] },
});

const resources: ResourcesType = {
  en: {
    translation: {
      ...getLocale("en"),
    },
  },
  ru: {
    translation: {
      ...getLocale("ru"),
    },
  },
};

export default resources;
