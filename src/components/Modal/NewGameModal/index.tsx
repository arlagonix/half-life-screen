import Modal from "..";
import playSound from "../../../utils/playSound";
import Button from "../../Button";
import NewGameCard from "../../NewGameCard";
import cardsData from "./cardsData";
import classes from "./index.module.scss";
import { defineCardStatus, isItemOnPage } from "./utils";
import { useTranslation } from "react-i18next";
import { useChosenMission, usePageHandler } from "./hooks";

const maxPage = Math.ceil(cardsData.length / 3);

interface NewGameModalProps {
  /** `onClick` handler. Is used to close the modal */
  clickHandler: () => void;
}

const NewGameModal: React.FC<NewGameModalProps> = ({ clickHandler }) => {
  const { t } = useTranslation();
  const { page, prevPageHandler, nextPageHandler } = usePageHandler(1);
  const { chosenMission, setSpecificMission } = useChosenMission("none");

  return (
    <Modal
      header={t("newGame.modalName")}
      clickHandler={clickHandler}
      hasCloseIcon
      style={{
        minWidth: "600px",
      }}
    >
      <hr />
      <div className={classes.missionContainer}>
        {cardsData
          .filter((_, index) => isItemOnPage(index, page, 3))
          .map((card) => (
            <NewGameCard
              chapterNumber={card.chapterNumber}
              chapterName={t(card.chapterI18nCode)}
              missionImageSrc={card.missionImageSrc}
              state={defineCardStatus(
                card.isDisabled,
                card.chapterNumber,
                chosenMission
              )}
              key={card.chapterI18nCode}
              clickHandler={setSpecificMission(card.chapterNumber)}
            />
          ))}
      </div>
      <div className={classes.paginationContainer}>
        <Button
          clickHandler={prevPageHandler}
          style={{
            visibility: page === 1 ? "hidden" : "initial",
          }}
        >
          {"<"} {t("newGame.more")}
        </Button>
        <Button
          clickHandler={nextPageHandler}
          style={{
            visibility: page === maxPage ? "hidden" : "initial",
          }}
        >
          {t("newGame.more")} {">"}
        </Button>
      </div>
      <hr />
      <div className={classes.buttonContainer}>
        <Button
          clickHandler={() => playSound("death")}
          disabled={chosenMission === "none"}
        >
          {t("newGame.startNewGame")}
        </Button>
        <Button clickHandler={clickHandler}>{t("newGame.cancel")}</Button>
      </div>
    </Modal>
  );
};

export default NewGameModal;
