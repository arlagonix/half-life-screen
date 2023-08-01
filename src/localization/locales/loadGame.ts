import convertToI18nFormat from "../transformToI18nFormat";

const loadGame = convertToI18nFormat({
  modalName: {
    en: "Load Game",
    ru: "Загрузить игру",
  },
  description: {
    en: "Select a saved game, and then press 'Load'",
    ru: "Выберите сохранение, а затем нажмите «Загрузить».",
  },
  delete: {
    en: "Delete",
    ru: "Удалить",
  },
  load: {
    en: "Load",
    ru: "Загрузить",
  },
  cancel: {
    en: "Cancel",
    ru: "Отмена",
  },
});

export default loadGame;
