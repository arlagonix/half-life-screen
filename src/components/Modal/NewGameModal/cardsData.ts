import missionImagesMap from "../../../utils/missionImagesMap";

interface IChapter {
  /** Chapter number. String, because it may be `9A` */
  chapterNumber: string;
  /**
   * Localized chapter name.
   * Localizations are stored in \src\localization\locales\chapters.ts
   */
  chapterI18nCode: string;
  /** Path to the source image of the related mission */
  missionImageSrc: string;
  /** If `true` it's disabled and you can't do anything with it */
  isDisabled: boolean;
}

const cardsData: IChapter[] = [
  {
    chapterNumber: "1",
    chapterI18nCode: "chapters.pointInsertion",
    missionImageSrc: missionImagesMap.pointInsertion,
    isDisabled: false,
  },
  {
    chapterNumber: "2",
    chapterI18nCode: "chapters.redLetterDay",
    missionImageSrc: missionImagesMap.redLetterDay,
    isDisabled: false,
  },
  {
    chapterNumber: "3",
    chapterI18nCode: "chapters.routeKanal",
    missionImageSrc: missionImagesMap.routeKanal,
    isDisabled: false,
  },
  {
    chapterNumber: "4",
    chapterI18nCode: "chapters.waterHazard",
    missionImageSrc: missionImagesMap.waterHazard,
    isDisabled: false,
  },
  {
    chapterNumber: "5",
    chapterI18nCode: "chapters.blackMesaEast",
    missionImageSrc: missionImagesMap.blackMesaEast,
    isDisabled: false,
  },
  {
    chapterNumber: "6",
    chapterI18nCode: "chapters.ravenholm",
    missionImageSrc: missionImagesMap.ravenholm,
    isDisabled: false,
  },
  {
    chapterNumber: "7",
    chapterI18nCode: "chapters.highway",
    missionImageSrc: missionImagesMap.highway,
    isDisabled: false,
  },
  {
    chapterNumber: "8",
    chapterI18nCode: "chapters.sandtraps",
    missionImageSrc: missionImagesMap.sandtraps,
    isDisabled: false,
  },
  {
    chapterNumber: "9",
    chapterI18nCode: "chapters.novaProspect",
    missionImageSrc: missionImagesMap.novaProspect,
    isDisabled: false,
  },
  {
    chapterNumber: "9A",
    chapterI18nCode: "chapters.entaglement",
    missionImageSrc: missionImagesMap.entaglement,
    isDisabled: false,
  },
  {
    chapterNumber: "10",
    chapterI18nCode: "chapters.anticitizenOne",
    missionImageSrc: missionImagesMap.anticitizenOne,
    isDisabled: true,
  },
  {
    chapterNumber: "11",
    chapterI18nCode: "chapters.followFreeman",
    missionImageSrc: missionImagesMap.followFreeman,
    isDisabled: true,
  },
  {
    chapterNumber: "12",
    chapterI18nCode: "chapters.ourBenefactors",
    missionImageSrc: missionImagesMap.ourBenefactors,
    isDisabled: true,
  },
  {
    chapterNumber: "13",
    chapterI18nCode: "chapters.darkEnergy",
    missionImageSrc: missionImagesMap.darkEnergy,
    isDisabled: true,
  },
];

export default cardsData;

export type ChapterNumber = (typeof cardsData)[number]["chapterNumber"];
