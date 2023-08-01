import convertToI18nFormat from "../transformToI18nFormat";

// English texts: https://half-life.fandom.com/wiki/Half-Life_2_Achievements
// Russian texts: https://hl-inside.me/hl2/achievements/

const achievementsList = convertToI18nFormat({
  putCanInTrash: {
    name: {
      en: "Submissive",
      ru: "Покорность",
    },
    description: {
      en: "Put the can in the trash.",
      ru: "Положить банку в мусорный бак.",
    },
  },
  hitCancopWithCan: {
    name: {
      en: "Defiant",
      ru: "Дерзость",
    },
    description: {
      en: "Hit the trashcan cop with the can.",
      ru: "Бросить банку в полицейского.",
    },
  },
  escapeApartmentRaid: {
    name: {
      en: "Malcontent",
      ru: "Мятеж",
    },
    description: {
      en: "Escape the apartment block raid.",
      ru: "Сбежать от рейда, прочёсывающего здание.",
    },
  },
  breakMiniTeleporter: {
    name: {
      en: "What cat?",
      ru: "Какая кошка?",
    },
    description: {
      en: "Break the mini teleporter in Kleiner's lab.",
      ru: "Сломать мини-портал в лаборатории Кляйнера.",
    },
  },
  getCrowbar: {
    name: {
      en: "Trusty Hardware",
      ru: "Надёжный друг",
    },
    description: {
      en: "Get the crowbar.",
      ru: "Получить монтировку.",
    },
  },
  findAllLambdas: {
    name: {
      en: "Lambda Locator",
      ru: "Следопыт",
    },
    description: {
      en: "Find all lambda caches in Half-Life 2.",
      ru: "Найти все тайники с лямбдами.",
    },
  },
  killBarnaclesWithBarrel: {
    name: {
      en: "Barnacle Bowling",
      ru: "Боулинг с барнаклами",
    },
    description: {
      en: "Kill five barnacles with one explosive barrel.",
      ru: "Убить пять барнаклов одной бочкой.",
    },
  },
  getAirboat: {
    name: {
      en: "Anchor's Aweigh!",
      ru: "Поднять якорь!",
    },
    description: {
      en: "Get the Airboat.",
      ru: "Получить катер на воздушной подушке.",
    },
  },
  getAirboatGun: {
    name: {
      en: "Heavy Weapons",
      ru: "Тяжёлое оружие",
    },
    description: {
      en: "Get the Airboat's mounted gun.",
      ru: "Получить пулемет для катера.",
    },
  },
  killChopper: {
    name: {
      en: "Revenge!",
      ru: "Месть!",
    },
    description: {
      en: "Destroy the Hunter-Chopper.",
      ru: "Уничтожить вертолёт-охотник.",
    },
  },
  findVortigauntCave: {
    name: {
      en: "Vorticough",
      ru: "Вортикашель",
    },
    description: {
      en: "Discover the hidden singing Vortigaunt cave in chapter Water Hazard",
      ru: "Найти пещеру с поющим вортигонтом в главе «Водная преграда».",
    },
  },
  makeABasket: {
    name: {
      en: "Two Points",
      ru: "Двухочковый",
    },
    description: {
      en: "Use Dog's ball to make a basket in the scrapyard.",
      ru: "Забросить мячик Пса в корзину на свалке Илая.",
    },
  },
  getGravityGun: {
    name: {
      en: "Zero-Point Energy",
      ru: "Нулевой уровень",
    },
    description: {
      en: "Get the Gravity Gun in Black Mesa East.",
      ru: "Получить гравипушку в «Восточной Черной месе».",
    },
  },
  findHevFaceplate: {
    name: {
      en: "Blast from the Past",
      ru: "Воспоминания из прошлого",
    },
    description: {
      en: "Find the HEV Suit charger faceplate in Eli's scrapyard.",
      ru: "Найти лицевой щиток зарядного устройства костюма на свалке Илая.",
    },
  },
  killEnemyWithToilet: {
    name: {
      en: "Flushed",
      ru: "Крышка",
    },
    description: {
      en: "Kill an enemy with a toilet.",
      ru: "Убить врага унитазом.",
    },
  },
  beatCemetry: {
    name: {
      en: "Hallowed Ground",
      ru: "Святая земля",
    },
    description: {
      en: "Escort Grigori safely through the church cemetery.",
      ru: "Защитить отца Григория на церковном кладбище.",
    },
  },
  beatRavenholmNoWeapons: {
    name: {
      en: "Zombie Chopper",
      ru: "Зомбомёт",
    },
    description: {
      en: "Play through Ravenholm using only the Gravity Gun.",
      ru: "Пройти Рейвенхолм используя только гравипушку.",
    },
  },
  killEnemiesWithCrane: {
    name: {
      en: "OSHA Violation",
      ru: "Нарушение техники безопасности",
    },
    description: {
      en: "Kill 3 enemies using the crane.",
      ru: "Убить троих врагов с помощью крана.",
    },
  },
  pinSoldierToBillboard: {
    name: {
      en: "Targetted Advertising",
      ru: "Говорящая реклама",
    },
    description: {
      en: "Pin a soldier to the billboard in the chapter Highway 17.",
      ru: "Пришпилить солдата к рекламному щиту в главе «Шоссе 17».",
    },
  },
  killOdessaGunship: {
    name: {
      en: "Where Cubbage Fears to Tread",
      ru: "Где не справится даже Кэббедж",
    },
    description: {
      en: "Defend Little Odessa from the Gunship attack.",
      ru: "Защитить Маленькую Одессу от атаки штурмовика.",
    },
  },
  killThreeGunships: {
    name: {
      en: "One Man Army",
      ru: "Один стоит целой армии",
    },
    description: {
      en: "Destroy six Gunships in Half-Life 2.",
      ru: "Уничтожить шесть штурмовиков.",
    },
  },
  beatDontTouchSand: {
    name: {
      en: "Keep Off the Sand!",
      ru: "Ни шагу по песку!",
    },
    description: {
      en: "Cross the Antlion beach in the chapter Sandtraps without touching the sand.",
      ru: "Пересечь пляж в главе «Песчаные ловушки», ни разу не наступив на песок.",
    },
  },
  killEnemiesWithAntlions: {
    name: {
      en: "Bug Hunt",
      ru: "Большая охота",
    },
    description: {
      en: "Use the Antlions to kill 50 enemies.",
      ru: "Убить 50 врагов с помощью муравьиных львов.",
    },
  },
  killEnemiesWithManhack: {
    name: {
      en: "Hack Attack!",
      ru: "Атака хэков!",
    },
    description: {
      en: "Kill five enemies with a Manhack.Show instructions",
      ru: "Убить пятерых врагов с помощью мэнхэка.",
    },
  },
  beatTurrentStandoff2: {
    name: {
      en: "Warden Freeman",
      ru: "Тюремщик Фримен",
    },
    description: {
      en: "Survive the second turret standoff in Nova Prospekt.",
      ru: "Пережить вторую турельную осаду в Нова Проспект.",
    },
  },
  beatToxicTunnel: {
    name: {
      en: '"Radiation Levels Detected"',
      ru: "Уровень радиации - высокий",
    },
    description: {
      en: "Get through the toxic tunnel under City 17 in Half-Life 2.",
      ru: "Пробраться через токсичные тоннели под Сити-17.",
    },
  },
  beatPlazaStandoff: {
    name: {
      en: "Plaza Defender",
      ru: "Защитник площади",
    },
    description: {
      en: "Survive the generator plaza standoff in the chapter Anticitizen One.",
      ru: "Пережить воздействие генератора на площади в главе «Нарушитель номер один».",
    },
  },
  followFreeman: {
    name: {
      en: "Follow Freeman",
      ru: "За Фрименом",
    },
    description: {
      en: "Gain command of a squad of rebels in the uprising.",
      ru: "Стань командиром отряда повстанцев.",
    },
  },
  killAllSnipers: {
    name: {
      en: "Counter-Sniper",
      ru: "Анти-снайпер",
    },
    description: {
      en: "Kill all of the snipers in City 17.",
      ru: "Уничтожить всех снайперов в Сити-17.",
    },
  },
  beatSupressionDevice: {
    name: {
      en: "Fight the Power",
      ru: "Борец с полем",
    },
    description: {
      en: "Shut down the suppression device by disabling its generators.",
      ru: "Уничтожить поле подавления, отключив генераторы.",
    },
  },
  beatStriderStandoff: {
    name: {
      en: "Giant Killer",
      ru: "Убийца титанов",
    },
    description: {
      en: "Survive the rooftop Strider battle in the ruins of City 17.",
      ru: "Пережить битву со страйдерами на крыше в руинах Сити-17.",
    },
  },
  disintegrateSoldiers: {
    name: {
      en: "Atomizer",
      ru: "Дезинтегратор",
    },
    description: {
      en: "Disintegrate 15 soldiers by throwing them into a Combine ball field.Show instructions",
      ru: "Дезинтегрировать 15 солдат, кинув их в генератор поля Альянса.",
    },
  },
  beatGame: {
    name: {
      en: "Singularity Collapse",
      ru: "Коллапс сингулярности",
    },
    description: {
      en: "Destroy the Citadel's reactor core.",
      ru: "Уничтожить ядро реактора Цитадели.",
    },
  },
});

export default achievementsList;
