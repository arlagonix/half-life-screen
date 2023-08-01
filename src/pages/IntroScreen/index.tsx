import classes from "./index.module.scss";
import Particles from "react-tsparticles";
import introBg from "../../assets/mainBg.jpg";
import { useCallback } from "react";
import tsparticlesConfig from "./tsparticles-config";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTranslation } from "react-i18next";

const handleFullscreen = () => {
  const element = document.documentElement;
  element.requestFullscreen();
};

interface IntroScreenProps {
  /** Increases the state by 1. Allows to change the screens displayed */
  nextStepHandler: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ nextStepHandler }) => {
  const { t } = useTranslation();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <img
        src={introBg}
        alt="intro image"
        className={classes.bgImage}
        width="1920"
        height="1080"
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={tsparticlesConfig}
        style={{
          opacity: 0.75,
          pointerEvents: "none",
        }}
      />
      <main className={classes.intro}>
        <p className={classes.details}>{t("intro.description")}</p>
        <h1 className={classes.header}>HALF-LIFE 2</h1>
        <button
          className={classes.button}
          onClick={() => {
            nextStepHandler();
            handleFullscreen();
          }}
        >
          {t("intro.start")}
        </button>
      </main>
    </>
  );
};

export default IntroScreen;
