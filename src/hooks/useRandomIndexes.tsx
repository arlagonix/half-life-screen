import { useEffect, useRef, useState } from "react";

const swap = <T,>(x: T, y: T) => [y, x];

function shuffle(array: number[]) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = swap(
      array[currentIndex],
      array[randomIndex]
    );
  }

  return array;
}

/**
 * Shuffles the indexList and returns a moving window of `numNextIndexes` elements.
 * The window moves forward on `numNextIndexes` once in `duration` ms.
 * Used to create a random sequence of background images. A moving window was used
 * to optimize performance for cases when the gallery consists of hundreds
 * or even thousands of images
 */
const useRandomIndexes = (
  indexList: number[],
  duration = 2000,
  numNextIndexes = 4
) => {
  const indexRef = useRef(0);
  const shuffledIndicesRef = useRef<number[]>([]);
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (indexList.length === 0) return;

    shuffledIndicesRef.current = shuffle(indexList);
    const initialIndexes = shuffledIndicesRef.current.slice(0, numNextIndexes);
    setRandomIndexes(initialIndexes);

    const interval = setInterval(() => {
      const currentIndex = indexRef.current;
      const nextIndexes = [];

      for (let i = 0; i < numNextIndexes; i++) {
        const index = (currentIndex + i) % shuffledIndicesRef.current.length;
        nextIndexes.push(shuffledIndicesRef.current[index]);
      }

      setRandomIndexes(nextIndexes);
      indexRef.current++;
    }, duration);

    return () => clearInterval(interval);
  }, [indexList, duration, numNextIndexes]);

  return randomIndexes;
};

export default useRandomIndexes;
