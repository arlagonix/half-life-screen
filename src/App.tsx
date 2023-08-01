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
      {stepShown === 1 && (
        <Suspense fallback={<Spinner />}>
          <IntroScreen nextStepHandler={nextStepHandler} />
        </Suspense>
      )}
      {stepShown === 2 && (
        <Suspense fallback={<Spinner />}>
          <ValveGuyVideo nextStepHandler={nextStepHandler} />
        </Suspense>
      )}
      {stepShown === 3 && (
        <Suspense fallback={<Spinner />}>
          <HalfLifeScreen />
        </Suspense>
      )}
    </>
  );
};

export default App;
