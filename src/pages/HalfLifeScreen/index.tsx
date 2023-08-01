import { useState } from "react";
import classes from "./index.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
import playSound from "../../utils/playSound";

import NewGameModal from "../../components/Modal/NewGameModal";
import ExitGameModal from "../../components/Modal/ExitGameModal";
import LoadGameModal from "../../components/Modal/LoadGameModal";
import AchievementsModal from "../../components/Modal/AchievementModal";
import SettingsModal from "../../components/Modal/SettingsModal";
import BackgroundGallery from "./BackgroundGallery";
import BackgroundAudio from "./BackgroundAudio";

import useLangSwitchOnStateChange from "../../hooks/useLangSwitchOnStateChange";
import { useTranslation } from "react-i18next";
import { savedLanguage } from "../../localization/i18n";

interface ITab {
  /** Tab name */
  name: string;
  /** Optional callback, launched on click */
  clickCallback?: () => void;
}

type TabNameType =
  | null
  | "new game"
  | "load game"
  | "achievements"
  | "settings"
  | "quit";

export type BgSoundType =
  | "trainstationSquare"
  | "waterCanals"
  | "ravenholm"
  | "highwayBridge"
  | "novaProspekt"
  | "destroyedCity"
  | "citadel";

export type IllustrationType =
  | "startingScreen"
  | "ambience"
  | "gordonAlyx"
  | "misc";

export type ChosenLanguageType = "Русский" | "English";

export interface ISettingsState {
  /** Specifies the audio to play on background */
  bgSound: BgSoundType;
  /** The volume of background audio */
  bgSoundVolume: number;
  /** The volume of interface sounds (hover, clicks) */
  uiSoundVolume: number;
  /** Sets of images that must be displayed in background */
  illustrationPacks: IllustrationType[];
  /** How often the illustrations must change, in seconds */
  illustrationChangeTimer: number;
  /** Languages for localization */
  chosenLanguage: ChosenLanguageType;
}

const HalfLifeScreen: React.FC = () => {
  const { t } = useTranslation();

  const [chosenModal, setChosenModal] = useState<TabNameType>(null);
  const closeModal = () => setChosenModal(null);

  const { value: settingsState, setValue: setSettingsState } =
    useLocalStorage<ISettingsState>("settingsState", {
      bgSound: "highwayBridge",
      bgSoundVolume: 50,
      uiSoundVolume: 15,
      illustrationPacks: ["startingScreen", "ambience"],
      illustrationChangeTimer: 15,
      chosenLanguage: savedLanguage,
    });

  useLangSwitchOnStateChange(settingsState);

  const tabsData: ITab[] = [
    {
      name: t("menu.newGame"),
      clickCallback: () => {
        setChosenModal("new game");
      },
    },
    {
      name: t("menu.loadGame"),
      clickCallback: () => setChosenModal("load game"),
    },
    {
      name: t("menu.achievements"),
      clickCallback: () => setChosenModal("achievements"),
    },
    {
      name: t("menu.settings"),
      clickCallback: () => setChosenModal("settings"),
    },
    {
      name: t("menu.quit"),
      clickCallback: () => setChosenModal("quit"),
    },
  ];

  return (
    <>
      <BackgroundAudio
        audioType={settingsState.bgSound}
        volume={settingsState.bgSoundVolume}
      />
      <BackgroundGallery settingsState={settingsState} />
      <main
        className={classes.main}
        // That's how HL2 screen works, yeah
        style={{
          opacity: chosenModal === "quit" ? 0 : "initial",
          pointerEvents: chosenModal === "quit" ? "none" : "initial",
        }}
      >
        <h1 className={classes.header}>
          HALF-LIFE <sup style={{ fontSize: ".75em" }}>2</sup>
        </h1>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            {tabsData.map((tab) => (
              <li
                key={tab.name}
                onMouseEnter={playSound(
                  "hover",
                  true,
                  settingsState.uiSoundVolume / 100
                )}
                onClick={() => {
                  playSound("click", false, settingsState.uiSoundVolume / 100);
                  if (tab.clickCallback !== undefined) tab.clickCallback();
                }}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </nav>
      </main>
      {chosenModal === "new game" && <NewGameModal clickHandler={closeModal} />}
      {chosenModal === "load game" && (
        <LoadGameModal clickHandler={closeModal} />
      )}
      {chosenModal === "achievements" && (
        <AchievementsModal clickHandler={closeModal} />
      )}
      {chosenModal === "settings" && (
        <SettingsModal
          clickHandler={closeModal}
          settingsState={settingsState}
          setSettingsState={setSettingsState}
        />
      )}
      {chosenModal === "quit" && <ExitGameModal clickHandler={closeModal} />}
    </>
  );
};

export default HalfLifeScreen;
