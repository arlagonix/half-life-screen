import classes from "./index.module.scss";
import clsx from "clsx";
import missionImagesMap from "../../utils/missionImagesMap";

interface SaveCardProps {
  /** Custom name of the mission from Half Life 2 */
  missionName: string;
  /** Source name of the image of the mission */
  missionImg: keyof typeof missionImagesMap;
  /** Custom date. May be a year or any other date string */
  date: string;
  /** If `true` the mission is chosen */
  active?: boolean;
  /** Changes state on click */
  clickHandler: () => void;
}

const SaveCard: React.FC<SaveCardProps> = ({
  missionName,
  missionImg,
  date,
  active,
  clickHandler,
}) => {
  return (
    <article
      className={classes.wrapper}
      onClick={clickHandler}
      draggable={false}
    >
      <img
        src={missionImagesMap[missionImg]}
        width={196}
        height={116}
        className={clsx(classes.image, active && classes.active)}
        draggable={false}
      />
      <div className={classes.textWrapper}>
        <h3 className={clsx(classes.header, active && classes.active)}>
          {missionName}
        </h3>
        <p className={clsx(classes.date, active && classes.active)}>{date}</p>
      </div>
    </article>
  );
};

export default SaveCard;
