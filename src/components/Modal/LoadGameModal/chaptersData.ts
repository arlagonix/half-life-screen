import { MissionImageType } from "../../../utils/missionImagesMap";

interface IMission {
  /** String for mapping with image source path */
  chapterImg: MissionImageType;
  /**
   * Localized chapter name.
   * Localizations are stored in \src\localization\locales\chapters.ts
   */
  chapterI18nCode: string;
  /** Date of game save */
  date: string;
}

const missionData: IMission[] = [
  {
    chapterImg: "entaglement",
    chapterI18nCode: "chapters.entaglement",
    date: "Mon Jun 19 23:21:32 2023",
  },
  {
    chapterImg: "ravenholm",
    chapterI18nCode: "chapters.ravenholm",
    date: "Mon Jun 19 22:21:32 2023",
  },
  {
    chapterImg: "waterHazard",
    chapterI18nCode: "chapters.waterHazard",
    date: "Mon Jun 19 20:21:32 2023",
  },
  {
    chapterImg: "sandtraps",
    chapterI18nCode: "chapters.sandtraps",
    date: "Mon Jun 19 15:21:32 2023",
  },
  {
    chapterImg: "novaProspect",
    chapterI18nCode: "chapters.novaProspect",
    date: "Mon Jun 19 10:21:32 2023",
  },
];

export default missionData;
