import { useEffect, useRef } from "react";
import hl_guy from "../../assets/half_life_guy.mp4";

interface ValveGuyVideoProps {
  /** Increases the state by 1. Allows to change the screens displayed */
  nextStepHandler: () => void;
}

const ValveGuyVideo: React.FC<ValveGuyVideoProps> = ({ nextStepHandler }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="bgImage"
      onEnded={nextStepHandler}
      preload="auto"
      playsInline
    >
      <source src={hl_guy} type="video/mp4" />
    </video>
  );
};

export default ValveGuyVideo;
