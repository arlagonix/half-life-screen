import convertToI18nFormat from "../transformToI18nFormat";

const newGame = convertToI18nFormat({
  modalName: {
    en: "New Game",
    ru: "Новая игра",
  },
  chapter: {
    en: "Chapter",
    ru: "Глава",
  },
  more: {
    en: "More",
    ru: "Ещё",
  },
  startNewGame: {
    en: "Start new game",
    ru: "Начать новую игру",
  },
  cancel: {
    en: "Cancel",
    ru: "Отмена",
  },
});

export default newGame;
