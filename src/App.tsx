import { lazy, useState, Suspense } from "react";
import Spinner from "./components/Spinner/index.tsx";

const IntroScreen = lazy(() => import("./pages/IntroScreen/index.tsx"));
const ValveGuyVideo = lazy(() => import("./pages/ValveGuyVideo/index.tsx"));
const HalfLifeScreen = lazy(() => import("./pages/HalfLifeScreen/index.tsx"));

const App: React.FC = () => {
  const [stepShown, setStepShown] = useState(1);
  const nextStepHandler = () => setStepShown((prev) => prev + 1);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {stepShown === 1 && <IntroScreen nextStepHandler={nextStepHandler} />}
        {stepShown === 2 && <ValveGuyVideo nextStepHandler={nextStepHandler} />}
        {stepShown === 3 && <HalfLifeScreen />}
      </Suspense>
    </>
  );
};

export default App;
