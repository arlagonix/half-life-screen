import { useTranslation } from "react-i18next";
import classes from "./index.module.scss";
import clsx from "clsx";

const cardMap = {
  default: classes.default,
  active: classes.active,
  disabled: classes.disabled,
};

export type CardMapKeyType = keyof typeof cardMap;

interface NewGameCardProps {
  /** Chapter number. May be a string in case of `9A` */
  chapterNumber: string;
  /** Chapter name */
  chapterName: string;
  /** Path to the source image of the related mission */
  missionImageSrc: string;
  /** Card state */
  state: CardMapKeyType;
  /** `onClick` handler */
  clickHandler?: () => void;
}

const NewGameCard: React.FC<NewGameCardProps> = ({
  chapterNumber,
  chapterName,
  missionImageSrc,
  state,
  clickHandler,
}) => {
  const { t } = useTranslation();
  return (
    <article
      className={clsx(classes.container, cardMap[state])}
      onClick={state === "default" ? clickHandler : undefined}
    >
      <p className={clsx(classes.header, cardMap[state])}>
        {t("newGame.chapter")} {chapterNumber}
      </p>
      <h3 className={clsx(classes.header, cardMap[state])}>{chapterName}</h3>
      <img
        src={missionImageSrc}
        width={170}
        height={116}
        draggable={false}
        className={clsx(classes.missionIllustration, cardMap[state])}
      />
    </article>
  );
};

export default NewGameCard;
