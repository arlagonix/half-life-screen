import classes from "./index.module.scss";
import Modal from "..";
import Button from "../../Button";
import { useState } from "react";
import AudioTab from "./AudioTab";
import GraphicsTab from "./GraphicsTab";
import TabsList from "./TabsList";
import { ISettingsState } from "../../../pages/HalfLifeScreen";
import { useTranslation } from "react-i18next";

export type TabsType = "audio" | "graphics";

interface SettingsModalProps {
  /** `onClick` handler. Is used to close the modal */
  clickHandler: () => void;
  /** Global settings list */
  settingsState: ISettingsState;
  /** Callback for updating the global settings list */
  setSettingsState: React.Dispatch<React.SetStateAction<ISettingsState>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  clickHandler,
  settingsState,
  setSettingsState,
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabsType>("graphics");
  const [localSettingsState, setLocalSettingsState] = useState<ISettingsState>(
    structuredClone(settingsState)
  );
  const [didLocalSettingsChange, setDidLocalSettingsChange] = useState(false);
  const handleSetLocalSettingsState = (
    newState: React.SetStateAction<ISettingsState>
  ) => {
    setDidLocalSettingsChange(true);
    setLocalSettingsState(newState);
  };

  return (
    <Modal
      header={t("settings.modalName")}
      clickHandler={clickHandler}
      hasCloseIcon
      style={{ minWidth: 600 }}
    >
      <div>
        <TabsList activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className={classes.content}>
          {activeTab === "graphics" && (
            <GraphicsTab
              localSettingsState={localSettingsState}
              setLocalSettingsState={handleSetLocalSettingsState}
            />
          )}
          {activeTab === "audio" && (
            <AudioTab
              localSettingsState={localSettingsState}
              setLocalSettingsState={handleSetLocalSettingsState}
            />
          )}
        </section>
      </div>
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <Button clickHandler={clickHandler}>{t("settings.buttons.ok")}</Button>
        <Button clickHandler={clickHandler}>
          {t("settings.buttons.cancel")}
        </Button>
        <Button
          clickHandler={() => {
            setSettingsState(structuredClone(localSettingsState));
            setDidLocalSettingsChange(false);
          }}
          disabled={!didLocalSettingsChange}
        >
          {t("settings.buttons.apply")}
        </Button>
      </div>
    </Modal>
  );
};

export default SettingsModal;
