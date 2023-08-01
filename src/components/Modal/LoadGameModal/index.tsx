import { useState } from "react";
import classes from "../index.module.scss";
import Modal from "..";
import Button from "../../Button";
import SaveCard from "../../SaveCard";
import playSound from "../../../utils/playSound";
import missionData from "./chaptersData";
import { useTranslation } from "react-i18next";

interface LoadGameModalProps {
  /** `onClick` handler */
  clickHandler: () => void;
}

const LoadGameModal: React.FC<LoadGameModalProps> = ({ clickHandler }) => {
  const { t } = useTranslation();
  const [chosenMissionIndex, setChosenMissionIndex] = useState(-1);
  const isMissionChosen = chosenMissionIndex !== -1;
  return (
    <Modal
      header={t("loadGame.modalName")}
      hasCloseIcon
      clickHandler={clickHandler}
      style={{
        minWidth: "500px",
      }}
    >
      <p>{t("loadGame.description")}</p>
      <div className={classes.blackBox} draggable={false}>
        {missionData.map((item, index) => (
          <SaveCard
            missionImg={item.chapterImg}
            missionName={t(item.chapterI18nCode)}
            key={item.date}
            date={item.date}
            active={index === chosenMissionIndex}
            clickHandler={() => setChosenMissionIndex(index)}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          clickHandler={() => {
            playSound("death");
          }}
          disabled={!isMissionChosen}
        >
          {t("loadGame.delete")}
        </Button>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            clickHandler={() => {
              playSound("death");
            }}
            disabled={!isMissionChosen}
          >
            {t("loadGame.load")}
          </Button>
          <Button clickHandler={clickHandler}>{t("loadGame.cancel")}</Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoadGameModal;
