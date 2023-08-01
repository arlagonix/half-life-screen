import clsx from "clsx";
import { TabsType } from ".";
import classes from "./index.module.scss";
import { useTranslation } from "react-i18next";

interface TabsListProps {
  /** Which tab must be displayed currently */
  activeTab: TabsType;
  /** Callback for updating the active tab */
  setActiveTab: React.Dispatch<React.SetStateAction<TabsType>>;
}

const TabsList: React.FC<TabsListProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  return (
    <header className={classes.tabList}>
      <div
        className={clsx(
          classes.tab,
          activeTab === "graphics" && classes.active
        )}
        onClick={() => setActiveTab("graphics")}
      >
        <h3>{t("settings.graphics.tabName")}</h3>
      </div>
      <div
        className={clsx(classes.tab, activeTab === "audio" && classes.active)}
        onClick={() => setActiveTab("audio")}
      >
        <h3>{t("settings.audio.tabName")}</h3>
      </div>
    </header>
  );
};

export default TabsList;
