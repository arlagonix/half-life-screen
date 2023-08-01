import { CardMapKeyType } from "../../NewGameCard";
import { ChapterNumber } from "./cardsData";

export const isItemOnPage = (
  /** The index of the item being checked */
  itemIndex: number,
  /** On what page number we need to check the presence of the item */
  pageNumber: number,
  /** Number of items on each page */
  pageSize: number
) =>
  itemIndex >= (pageNumber - 1) * pageSize &&
  itemIndex <= pageNumber * pageSize - 1;

export const defineCardStatus = (
  isDisabled: boolean,
  chapterNumber: ChapterNumber,
  chosenMission: ChapterNumber
): CardMapKeyType => {
  if (isDisabled) return "disabled";
  if (chapterNumber === chosenMission) return "active";
  return "default";
};
