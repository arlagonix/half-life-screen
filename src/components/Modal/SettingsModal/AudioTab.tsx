import classes from "./index.module.scss";
import Radiobutton from "../../Radiobutton";
import { BgSoundType, ISettingsState } from "../../../pages/HalfLifeScreen";
import { useTranslation } from "react-i18next";

const soundBgData: BgSoundType[] = [
  "trainstationSquare",
  "waterCanals",
  "ravenholm",
  "highwayBridge",
  "novaProspekt",
  "destroyedCity",
  "citadel",
];

interface AudioTabProps {
  /** A list of settings parameters */
  localSettingsState: ISettingsState;
  /** Callback for updating settings */
  setLocalSettingsState: React.Dispatch<React.SetStateAction<ISettingsState>>;
}

const AudioTab: React.FC<AudioTabProps> = ({
  localSettingsState,
  setLocalSettingsState,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.column}>
        <p>{t("settings.audio.backgroundMusicType")}:</p>
        {soundBgData.map((name) => (
          <Radiobutton
            key={name}
            isChecked={localSettingsState.bgSound === name}
            changeHandler={() =>
              setLocalSettingsState((prev) => ({ ...prev, bgSound: name }))
            }
            label={name}
            radioName="bg_sound"
            radioValue={name}
          />
        ))}
      </div>
      <div className={classes.column}>
        <label className={classes.inputGroup}>
          <p className={classes.inputLabel}>
            {t("settings.audio.backgroundVolume")} (0-100)
          </p>
          <input
            type="text"
            className={classes.numberInput}
            value={localSettingsState.bgSoundVolume}
            onChange={(e) => {
              const value = +e.target.value.replace(/\D/g, "");
              setLocalSettingsState((prev) => ({
                ...prev,
                bgSoundVolume: value,
              }));
            }}
            onBlur={() => {
              setLocalSettingsState((prev) => ({
                ...prev,
                bgSoundVolume: Math.min(
                  Math.max(localSettingsState.bgSoundVolume, 0),
                  100
                ),
              }));
            }}
          />
        </label>
        <label className={classes.inputGroup}>
          <p className={classes.inputLabel}>
            {t("settings.audio.uiVolume")} (0-100)
          </p>
          <input
            type="text"
            className={classes.numberInput}
            value={localSettingsState.uiSoundVolume}
            onChange={(e) => {
              const value = +e.target.value.replace(/\D/g, "");
              setLocalSettingsState((prev) => ({
                ...prev,
                uiSoundVolume: value,
              }));
            }}
            onBlur={() => {
              setLocalSettingsState((prev) => ({
                ...prev,
                uiSoundVolume: Math.min(
                  Math.max(localSettingsState.uiSoundVolume, 0),
                  100
                ),
              }));
            }}
          />
        </label>
      </div>
    </>
  );
};

export default AudioTab;
