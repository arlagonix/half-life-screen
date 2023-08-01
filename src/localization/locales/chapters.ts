import convertToI18nFormat from "../transformToI18nFormat";

// English texts: https://half-life.fandom.com/wiki/Half-Life_Wiki:Projects/Chapters
// Russian texts: https://hl-inside.me/hl2/walkthrough/

const chapters = convertToI18nFormat({
  pointInsertion: {
    en: "Point Insertion",
    ru: "Прибытие",
  },
  redLetterDay: {
    en: "A Red Letter Day",
    ru: "Великий день",
  },
  routeKanal: {
    en: "Route Kanal",
    ru: "Через каналы",
  },
  waterHazard: {
    en: "Water Hazard",
    ru: "Водная преграда",
  },
  blackMesaEast: {
    en: "Black Mesa East",
    ru: "Восточная черная меса",
  },
  ravenholm: {
    en: "We Don’t Go to Ravenholm",
    ru: "Мы не ходим в рейвенхолм...",
  },
  highway: {
    en: "Highway 17",
    ru: "Шоссе 17",
  },
  sandtraps: {
    en: "Sandtraps",
    ru: "Песчаные ловушки",
  },
  novaProspect: {
    en: "Nova Prospekt",
    ru: "Нова Проспект",
  },
  entaglement: {
    en: "Entanglement",
    ru: "Запутанность",
  },
  anticitizenOne: {
    en: "Anticitizen One",
    ru: "Нарушитель номер один",
  },
  followFreeman: {
    en: "Follow Freeman!",
    ru: "За Фрименом!",
  },
  ourBenefactors: {
    en: "Our Benefactors",
    ru: "Наши покровители",
  },
  darkEnergy: {
    en: "Dark Energy",
    ru: "Темная энергия",
  },
});

export default chapters;
