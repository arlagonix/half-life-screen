import convertToI18nFormat from "../transformToI18nFormat";

const quit = convertToI18nFormat({
  modalName: {
    en: "Quit",
    ru: "Выход",
  },
  description: {
    en: "Are you sure you want to quit?",
    ru: "Вы уверены, что хотите выйти?",
  },
  quit: {
    en: "Quit",
    ru: "Выход",
  },
  cancel: {
    en: "Cancel",
    ru: "Отменить",
  },
});

export default quit;
