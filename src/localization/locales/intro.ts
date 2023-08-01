import convertToI18nFormat from "../transformToI18nFormat";

const intro = convertToI18nFormat({
  description: {
    en: 'Press "Start" to see the starting screen for',
    ru: 'Нажмите "Начать", чтобы увидеть начальный экран для',
  },
  start: {
    en: "Start",
    ru: "Начать",
  },
});

export default intro;
