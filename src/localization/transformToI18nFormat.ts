import { LanguageType, languages } from "./languages";

/**
 * ```
 * {
 *   en: "Cat",
 *   ru: "Кот"
 * }
 * ```
 */
type ConvenientTranslationSubtype = {
  [lang in LanguageType]: string;
};

/**
 * ```js
 * {
 *   newGame: {
 *     ru: "Новая игра",
 *     en: "New Game"
 *   },
 *   loadGame: {
 *     ru: "Загрузить игру",
 *     en: "Load Game"
 *   },
 *   tabs: {
 *     graphics: {
 *       ru: "Графика",
 *       en: "Graphics"
 *     },
 *     audio: {
 *       ru: "Аудио",
 *       en: "Audio"
 *     }
 *   }
 * }
 * ```
 */
type ConvenientTranslationType = {
  [key: string]: ConvenientTranslationSubtype | ConvenientTranslationType;
};

/**
 * ```js
 * {
 *  newGame: 'New Game',
 *  loadGame: 'Load Game',
 *  tabs: {
 *    graphics: 'Graphics',
 *    audio: 'Audio'
 *  }
 * }
 * ```
 */
type I18nFormatSubtype = {
  [key: string]: string | I18nFormatSubtype;
};

/**
 * ```js
 * {
 *   en: {
 *     newGame: 'New Game',
 *     loadGame: 'Load Game',
 *     tabs: {
 *       graphics: 'Graphics',
 *       audio: 'Audio'
 *     }
 *   },
 *   ru: {
 *     newGame: 'Новая игра',
 *     loadGame: 'Загрузить игру',
 *     tabs: {
 *       graphics: 'Графика',
 *       audio: 'Аудио'
 *     }
 *   }
 * }
 * ```
 */
type I18nFormatType = {
  [lang in LanguageType]: I18nFormatSubtype;
};

const unwrapObject = (
  obj: ConvenientTranslationType,
  lang: LanguageType
): I18nFormatSubtype => {
  const unwrappedObj = {} as I18nFormatSubtype;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key][lang] === "string") unwrappedObj[key] = obj[key][lang];
    else
      unwrappedObj[key] = unwrapObject(
        obj[key] as ConvenientTranslationType,
        lang
      );
  }
  return unwrappedObj;
};

const convertToI18nFormat = (
  localeObject: ConvenientTranslationType
): I18nFormatType => {
  const convertedObj = {} as I18nFormatType;
  for (const lang of languages) {
    convertedObj[lang] = unwrapObject(localeObject, lang);
  }
  return convertedObj;
};

export default convertToI18nFormat;
