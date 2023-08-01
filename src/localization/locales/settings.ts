import convertToI18nFormat from "../transformToI18nFormat";

const settings = convertToI18nFormat({
  modalName: {
    en: "Settings",
    ru: "Настройки",
  },
  graphics: {
    tabName: {
      en: "Graphics",
      ru: "Графика",
    },
    displayedPacs: {
      en: "Sets of displayed illustrations",
      ru: "Наборы отображаемых иллюстраций",
    },
    illustrationChangeTimer: {
      en: "Timer for changing illustrations in sec.",
      ru: "Таймер смены иллюстраций в сек.",
    },
    langSwitcher: {
      en: "Language",
      ru: "Язык",
    },
  },
  audio: {
    tabName: {
      en: "Audio",
      ru: "Аудио",
    },
    backgroundMusicType: {
      en: "Background music",
      ru: "Фоновая музыка",
    },
    backgroundVolume: {
      en: "Background music volume",
      ru: "Громкость фоновой музыки",
    },
    uiVolume: {
      en: "UI sounds volume",
      ru: "Громкость звуков UI",
    },
  },
  buttons: {
    ok: {
      en: "OK",
      ru: "ОК",
    },
    cancel: {
      en: "Cancel",
      ru: "Отмена",
    },
    apply: {
      en: "Apply",
      ru: "Применить",
    },
  },
});

export default settings;
