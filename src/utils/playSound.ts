import hoverSoundSrc from "../assets/sounds/ui/buttonrollover.wav";
import clickSoundSrc from "../assets/sounds/ui/buttonclickrelease.wav";
import deathSoundSrc from "../assets/sounds/other/combine_death.mp3";
import friedNailsSoundSrc from "../assets/sounds/other/fried_nails.mp3";
import loadAudio from "./loadAudio";

const soundMap = {
  hover: await loadAudio(hoverSoundSrc),
  click: await loadAudio(clickSoundSrc),
  death: await loadAudio(deathSoundSrc),
  friedNails: await loadAudio(friedNailsSoundSrc),
};

const playSound = (
  /** Which sound to play */
  type: keyof typeof soundMap,
  /** If `true` returns callback that plays sound
   * If `false` just plays the sound
   */
  returnCallback = false,
  /** Audio volume:
   * min: 0 (no sound)
   * max: 1 (max sound)
   */
  volume = 0.2
) => {
  const chosenSound = soundMap[type];

  if (returnCallback)
    return () => {
      // Code duplication is necessary, so that sound is played smoothly when you activate the same sound several times in a row
      const soundCopy = chosenSound.cloneNode() as HTMLAudioElement;
      soundCopy.volume = volume;
      soundCopy.play();
    };

  const soundCopy = chosenSound.cloneNode() as HTMLAudioElement;
  soundCopy.volume = volume;
  soundCopy.play();
};

export default playSound;
