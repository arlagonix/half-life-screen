import { useTranslation } from "react-i18next";
import {
  ChosenLanguageType,
  ISettingsState,
  IllustrationType,
} from "../../../pages/HalfLifeScreen";
import Checkbox from "../../Checkbox";
import Radiobutton from "../../Radiobutton";
import classes from "./index.module.scss";

const illustrationPackData: IllustrationType[] = [
  "startingScreen",
  "ambience",
  "gordonAlyx",
  "misc",
];

const languagesData: ChosenLanguageType[] = ["English", "Русский"];

interface GraphicsTabProps {
  /** A list of settings parameters */
  localSettingsState: ISettingsState;
  /** Callback for updating settings */
  setLocalSettingsState: React.Dispatch<React.SetStateAction<ISettingsState>>;
}

const GraphicsTab: React.FC<GraphicsTabProps> = ({
  localSettingsState,
  setLocalSettingsState,
}) => {
  const { t } = useTranslation();
  const removeIllustrationPack = (packToRemove: IllustrationType) =>
    setLocalSettingsState((prev) => {
      const updatedIllustrationPack =
        localSettingsState.illustrationPacks.filter(
          (pack) => pack !== packToRemove
        );
      // This way we ensure that there is always at least one pack selected
      if (updatedIllustrationPack.length === 0)
        updatedIllustrationPack.push("startingScreen");
      return {
        ...prev,
        illustrationPacks: updatedIllustrationPack,
      };
    });

  const addIllustrationPack = (packToAdd: IllustrationType) =>
    setLocalSettingsState((prev) => {
      const updatedIllustrationPack = [
        ...localSettingsState.illustrationPacks,
        packToAdd,
      ];
      return {
        ...prev,
        illustrationPacks: updatedIllustrationPack,
      };
    });

  return (
    <>
      <div className={classes.column}>
        <p>{t("settings.graphics.displayedPacs")}:</p>
        {illustrationPackData.map((packName) => (
          <Checkbox
            key={packName}
            className={classes.inputGroup}
            label={packName}
            isChecked={localSettingsState.illustrationPacks.includes(packName)}
            changeHandler={() => {
              const isInList =
                localSettingsState.illustrationPacks.includes(packName);
              if (isInList) removeIllustrationPack(packName);
              else addIllustrationPack(packName);
            }}
          />
        ))}
      </div>
      <div className={classes.column}>
        <label className={classes.inputGroup}>
          <p className={classes.inputLabel}>
            {t("settings.graphics.illustrationChangeTimer")} (5-1000000000)
          </p>
          <input
            type="text"
            className={classes.numberInput}
            value={localSettingsState.illustrationChangeTimer}
            onChange={(e) => {
              const value = +e.target.value.replace(/\D/g, "");
              setLocalSettingsState((prev) => ({
                ...prev,
                illustrationChangeTimer: value,
              }));
            }}
            onBlur={() => {
              setLocalSettingsState((prev) => ({
                ...prev,
                illustrationChangeTimer: Math.min(
                  Math.max(localSettingsState.illustrationChangeTimer, 5),
                  1000000000
                ),
              }));
            }}
          />
        </label>
        <p>{t("settings.graphics.langSwitcher")}</p>
        {languagesData.map((lang) => (
          <Radiobutton
            isChecked={localSettingsState.chosenLanguage === lang}
            key={lang}
            label={lang}
            radioName="language"
            radioValue={lang}
            changeHandler={() =>
              setLocalSettingsState((prev) => ({
                ...prev,
                chosenLanguage: lang,
              }))
            }
          />
        ))}
      </div>
    </>
  );
};

export default GraphicsTab;
