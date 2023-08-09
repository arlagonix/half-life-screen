import { useCallback, useState } from "react";
import { ChapterNumber } from "./cardsData";

export const usePageHandler = (initialValue = 1) => {
  const [page, setPage] = useState(initialValue);
  const prevPageHandler = useCallback(() => setPage((prev) => prev - 1), []);
  const nextPageHandler = useCallback(() => setPage((prev) => prev + 1), []);

  return { page, prevPageHandler, nextPageHandler };
};

export const useChosenMission = (initialValue: "none" | ChapterNumber) => {
  const [chosenMission, setChosenMission] = useState<"none" | ChapterNumber>(
    initialValue
  );
  const setSpecificMission = useCallback(
    (chapterNumber: ChapterNumber) => () => {
      setChosenMission(chapterNumber);
    },
    []
  );

  return { chosenMission, setSpecificMission };
};
