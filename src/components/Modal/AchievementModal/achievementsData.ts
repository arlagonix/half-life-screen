import imageMap from "../../Achievement/imageMap";

interface IAchievementData {
  /**
   * Localized achievement name.
   * Localizations are stored in \src\localization\locales\achievements.ts
   */
  nameI18nCode: string;
  /**
   * Localized achievement description.
   * Localizations are stored in \src\localization\locales\achievements.ts
   */
  descriptionI18nCode: string;
  /** Image that must be displayed, is used to get a src from a map object */
  imageType: string;
  /** If `true` the achievemnt is accomplished */
  isDone: boolean;
  /** Optional, value and max value of some parameter for the achievement */
  values?: [number, number];
}

const achievementsData: IAchievementData[] = [
  {
    nameI18nCode: "achievementsList.putCanInTrash.name",
    descriptionI18nCode: "achievementsList.putCanInTrash.description",
    imageType: imageMap.putCanInTrash,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.hitCancopWithCan.name",
    descriptionI18nCode: "achievementsList.hitCancopWithCan.description",
    imageType: imageMap.hitCancopWithCan,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.escapeApartmentRaid.name",
    descriptionI18nCode: "achievementsList.escapeApartmentRaid.description",
    imageType: imageMap.escapeApartmentRaid,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.breakMiniTeleporter.name",
    descriptionI18nCode: "achievementsList.breakMiniTeleporter.description",
    imageType: imageMap.breakMiniTeleporter,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.getCrowbar.name",
    descriptionI18nCode: "achievementsList.getCrowbar.description",
    imageType: imageMap.getCrowbar,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.findAllLambdas.name",
    descriptionI18nCode: "achievementsList.findAllLambdas.description",
    imageType: imageMap.findAllLambdas,
    isDone: false,
    values: [35, 45],
  },
  {
    nameI18nCode: "achievementsList.killBarnaclesWithBarrel.name",
    descriptionI18nCode: "achievementsList.killBarnaclesWithBarrel.description",
    imageType: imageMap.killBarnaclesWithBarrel,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.getAirboat.name",
    descriptionI18nCode: "achievementsList.getAirboat.description",
    imageType: imageMap.getAirboat,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.getAirboatGun.name",
    descriptionI18nCode: "achievementsList.getAirboatGun.description",
    imageType: imageMap.getAirboatGun,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.killChopper.name",
    descriptionI18nCode: "achievementsList.killChopper.description",
    imageType: imageMap.killChopper,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.findVortigauntCave.name",
    descriptionI18nCode: "achievementsList.findVortigauntCave.description",
    imageType: imageMap.findVortigauntCave,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.makeABasket.name",
    descriptionI18nCode: "achievementsList.makeABasket.description",
    imageType: imageMap.makeABasket,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.getGravityGun.name",
    descriptionI18nCode: "achievementsList.getGravityGun.description",
    imageType: imageMap.getGravityGun,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.findHevFaceplate.name",
    descriptionI18nCode: "achievementsList.findHevFaceplate.description",
    imageType: imageMap.findHevFaceplate,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.killEnemyWithToilet.name",
    descriptionI18nCode: "achievementsList.killEnemyWithToilet.description",
    imageType: imageMap.killEnemyWithToilet,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.beatCemetry.name",
    descriptionI18nCode: "achievementsList.beatCemetry.description",
    imageType: imageMap.beatCemetry,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.beatRavenholmNoWeapons.name",
    descriptionI18nCode: "achievementsList.beatRavenholmNoWeapons.description",
    imageType: imageMap.beatRavenholmNoWeapons,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.killEnemiesWithCrane.name",
    descriptionI18nCode: "achievementsList.killEnemiesWithCrane.description",
    imageType: imageMap.killEnemiesWithCrane,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.pinSoldierToBillboard.name",
    descriptionI18nCode: "achievementsList.pinSoldierToBillboard.description",
    imageType: imageMap.pinSoldierToBillboard,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.killOdessaGunship.name",
    descriptionI18nCode: "achievementsList.killOdessaGunship.description",
    imageType: imageMap.killOdessaGunship,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.killThreeGunships.name",
    descriptionI18nCode: "achievementsList.killThreeGunships.description",
    imageType: imageMap.killThreeGunships,
    isDone: true,
    values: [6, 6],
  },
  {
    nameI18nCode: "achievementsList.beatDontTouchSand.name",
    descriptionI18nCode: "achievementsList.beatDontTouchSand.description",
    imageType: imageMap.beatDontTouchSand,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.killEnemiesWithAntlions.name",
    descriptionI18nCode: "achievementsList.killEnemiesWithAntlions.description",
    imageType: imageMap.killEnemiesWithAntlions,
    isDone: false,
    values: [47, 50],
  },
  {
    nameI18nCode: "achievementsList.killEnemiesWithManhack.name",
    descriptionI18nCode: "achievementsList.killEnemiesWithManhack.description",
    imageType: imageMap.killEnemiesWithManhack,
    isDone: false,
    values: [1, 5],
  },
  {
    nameI18nCode: "achievementsList.beatTurrentStandoff2.name",
    descriptionI18nCode: "achievementsList.beatTurrentStandoff2.description",
    imageType: imageMap.beatTurrentStandoff2,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.beatToxicTunnel.name",
    descriptionI18nCode: "achievementsList.beatToxicTunnel.description",
    imageType: imageMap.beatToxicTunnel,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.beatPlazaStandoff.name",
    descriptionI18nCode: "achievementsList.beatPlazaStandoff.description",
    imageType: imageMap.beatPlazaStandoff,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.followFreeman.name",
    descriptionI18nCode: "achievementsList.followFreeman.description",
    imageType: imageMap.followFreeman,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.killAllSnipers.name",
    descriptionI18nCode: "achievementsList.killAllSnipers.description",
    imageType: imageMap.killAllSnipers,
    isDone: false,
  },
  {
    nameI18nCode: "achievementsList.beatSupressionDevice.name",
    descriptionI18nCode: "achievementsList.beatSupressionDevice.description",
    imageType: imageMap.beatSupressionDevice,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.beatStriderStandoff.name",
    descriptionI18nCode: "achievementsList.beatStriderStandoff.description",
    imageType: imageMap.beatStriderStandoff,
    isDone: true,
  },
  {
    nameI18nCode: "achievementsList.disintegrateSoldiers.name",
    descriptionI18nCode: "achievementsList.disintegrateSoldiers.description",
    imageType: imageMap.disintegrateSoldiers,
    isDone: true,
    values: [15, 15],
  },
  {
    nameI18nCode: "achievementsList.beatGame.name",
    descriptionI18nCode: "achievementsList.beatGame.description",
    imageType: imageMap.beatGame,
    isDone: true,
  },
];

export default achievementsData;
