import { useMemo } from "react";
import { ISettingsState, IllustrationType } from ".";
import classes from "./index.module.scss";
import useRandomIndexes from "../../hooks/useRandomIndexes";

type IIllustrationPackMap = {
  [key in IllustrationType]: string[];
};

const illustrationPackMap: IIllustrationPackMap = {
  startingScreen: Object.values(
    // According to https://github.com/vitejs/vite/issues/5478
    // the path must be a static string, so can't use a function here
    // for TS to work properly the config object shouldn't also be a variable
    import.meta.glob(
      "@/assets/background/startingScreen/*.{png,jpg,jpeg,PNG,JPEG}",
      {
        eager: true,
        as: "url",
      }
    )
  ),
  ambience: Object.values(
    import.meta.glob("@/assets/background/ambience/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ),
  gordonAlyx: Object.values(
    import.meta.glob(
      "@/assets/background/gordonAlyx/*.{png,jpg,jpeg,PNG,JPEG}",
      {
        eager: true,
        as: "url",
      }
    )
  ),
  misc: Object.values(
    import.meta.glob("@/assets/background/misc/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ),
};

interface BackgroundGalleryProps {
  settingsState: ISettingsState;
}

const BackgroundGallery: React.FC<BackgroundGalleryProps> = ({
  settingsState,
}) => {
  const imagesList = settingsState.illustrationPacks.reduce(
    (acc: string[], packName) => [...acc, ...illustrationPackMap[packName]],
    []
  );

  // Without `useMemo` `useRandomIndex` will launch over and over again
  // because `imagesInfoIndices` would be re-created on every re-render
  // and we don't want this to happen
  const imagesInfoIndices = useMemo(
    () => [...Array(imagesList.length)].map((_, i) => i),
    [imagesList.length]
  );
  const randomIndexes = useRandomIndexes(
    imagesInfoIndices,
    settingsState.illustrationChangeTimer * 1000,
    4
  );

  return (
    <>
      {imagesList.map((imageSrc, index) => (
        <img
          src={imageSrc}
          key={imageSrc}
          width="1920"
          height="1080"
          className={classes.bgImage}
          loading={index === randomIndexes[1] ? "eager" : "lazy"}
          style={{
            opacity: index === randomIndexes[1] ? 1 : 0,
            display: randomIndexes.includes(index) ? "block" : "none",
          }}
        />
      ))}
    </>
  );
};

export default BackgroundGallery;
