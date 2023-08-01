import convertToI18nFormat from "../transformToI18nFormat";

const menu = convertToI18nFormat({
  newGame: {
    en: "New Game",
    ru: "Новая игра",
  },
  loadGame: {
    en: "Load Game",
    ru: "Загрузить игру",
  },
  achievements: {
    en: "Achievements",
    ru: "Достижения",
  },
  settings: {
    en: "Settings",
    ru: "Настройки",
  },
  quit: {
    en: "Quit",
    ru: "Выход",
  },
});

export default menu;
