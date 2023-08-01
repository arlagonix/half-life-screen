import convertToI18nFormat from "../transformToI18nFormat";

const achievements = convertToI18nFormat({
  modalName: {
    en: "My Achievements",
    ru: "Мои достижения",
  },
  achivementsEarned: {
    en: "Total Achievements Earned",
    ru: "Выполнено достижений",
  },
  hideAchieved: {
    en: "Hide Achieved",
    ru: "Скрыть выполненные",
  },
  back: {
    en: "Back",
    ru: "Назад",
  },
});

export default achievements;
