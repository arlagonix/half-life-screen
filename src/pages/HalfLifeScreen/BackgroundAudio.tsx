import { useEffect, useRef } from "react";
import { BgSoundType } from ".";

import trainstationSquareAudio from "../../assets/sounds/background/trainstation_square.mp3";
import waterCanalsAudio from "../../assets/sounds/background/water_canals.mp3";
import ravenholmAudio from "../../assets/sounds/background/ravenholm.mp3";
import highwayBridgeAudio from "../../assets/sounds/background/highway_17_bridge.mp3";
import novaProspektAudio from "../../assets/sounds/background/nova_prospekt.mp3";
import destroyedCityAudio from "../../assets/sounds/background/destroyed_city_17.mp3";
import citadelAudio from "../../assets/sounds/background/citadel.mp3";

type IAudioMap = {
  [audioType in BgSoundType]: string;
};

const audioMap: IAudioMap = {
  trainstationSquare: trainstationSquareAudio,
  waterCanals: waterCanalsAudio,
  ravenholm: ravenholmAudio,
  highwayBridge: highwayBridgeAudio,
  novaProspekt: novaProspektAudio,
  destroyedCity: destroyedCityAudio,
  citadel: citadelAudio,
};

interface BackgroundAudioProps {
  /** Volume of the background audio: 0-100 */
  volume: number;
  /** What music must be played in background */
  audioType: BgSoundType;
}

const BackgroundAudio: React.FC<BackgroundAudioProps> = ({
  volume,
  audioType,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <audio ref={audioRef} loop autoPlay key={audioType}>
      <source src={audioMap[audioType]} type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundAudio;
