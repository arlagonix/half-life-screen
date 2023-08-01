import classes from "./index.module.scss";
import imageMap from "./imageMap";

interface AchievementProps {
  /** Name of the achievement */
  name: string;
  /** Achievement description */
  description: string;
  /** Source for the image displayed for the achievement */
  imageSrc: string;
  /**
   * `true` if achievement has been completed, `false` otherwise.
   * `false` is default
   */
  isDone?: boolean;
  /** Optional, min and max value of the parameter */
  values?: [number, number];
}

const Achievement: React.FC<AchievementProps> = ({
  name,
  description,
  imageSrc,
  isDone = false,
  values,
}) => {
  return (
    <article className={classes.achievementWrapper}>
      <img
        src={isDone ? imageSrc : imageMap.locked}
        width={56}
        height={56}
        draggable={false}
        className={classes.image}
      />
      <div className={classes.infoWrapper}>
        <h3 className={classes.header}>{name}</h3>
        <p className={classes.description}>{description}</p>
        {values !== undefined && (
          <div className={classes.progressBarWrapper}>
            <div className={classes.progressBar}>
              <div
                className={classes.progressBarHandle}
                style={{
                  width: `${Math.floor((values[0] / values[1]) * 100)}%`,
                }}
              ></div>
            </div>
            <span className={classes.progressBarValue}>
              {values[0]}/{values[1]}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default Achievement;
