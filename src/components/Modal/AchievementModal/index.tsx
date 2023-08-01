import Modal from "..";
import Achievement from "../../Achievement";
import Button from "../../Button";
import classes from "./index.module.scss";
import achievementsData from "./achievementsData";
import { useState } from "react";
import Checkbox from "../../Checkbox";
import { useTranslation } from "react-i18next";

interface AchievementsModalProps {
  /** `onClick` handler. Is used to close the modal */
  clickHandler: () => void;
}

const numberOfAchivements = achievementsData.length;
const numberOfCompletedAchievements = achievementsData.filter(
  (achievement) => achievement.isDone
).length;
const percentAchieved = Math.round(
  (numberOfCompletedAchievements / numberOfAchivements) * 100
);

const AchievementsModal: React.FC<AchievementsModalProps> = ({
  clickHandler,
}) => {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Modal
      header={t("achievements.modalName")}
      style={{ minWidth: 600 }}
      clickHandler={clickHandler}
      hasCloseIcon
    >
      <div className={classes.progressBarWrapper}>
        <div className={classes.progressBarDetails}>
          <h3 className={classes.header}>
            {t("achievements.achivementsEarned")}
          </h3>
          <span className={classes.value}>
            {numberOfCompletedAchievements} / {numberOfAchivements} ({" "}
            {percentAchieved}% )
          </span>
        </div>
        <div className={classes.progressBar}>
          <div
            className={classes.progressBarHandle}
            style={{ width: `${percentAchieved}%` }}
          ></div>
        </div>
      </div>
      <article className={classes.achievementBlackBox}>
        {achievementsData
          .filter((achievement) => (!isChecked ? true : !achievement.isDone))
          .sort((a, b) => +a.isDone - +b.isDone)
          .map((achievement) => (
            <Achievement
              name={t(achievement.nameI18nCode)}
              key={achievement.nameI18nCode}
              description={t(achievement.descriptionI18nCode)}
              imageSrc={achievement.imageType}
              isDone={achievement.isDone}
              values={achievement.values}
            />
          ))}
      </article>
      <div className={classes.buttonContainer}>
        <Button clickHandler={clickHandler}>{t("achievements.back")}</Button>
        <div>
          <Checkbox
            changeHandler={() => setIsChecked((prev) => !prev)}
            isChecked={isChecked}
            label={t("achievements.hideAchieved")}
            className={classes.centered}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AchievementsModal;
