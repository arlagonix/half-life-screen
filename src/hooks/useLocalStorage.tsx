import { useState, useEffect } from "react";

/**
 * Returns the value by its key from `localStorage`.
 * If the value for such key is not found returns `initialValue`.
 * If `initialValue` is a function, returns the result of execution of that function.
 * Inspired by: https://courses.webdevsimplified.com/react-hooks-simplified
 */
function getSavedValue<T>(
  /** Key that defines the path to the value in `localStorage` */
  key: string,
  /** Initial value that is used when the value was not found */
  initialValue: T
) {
  const savedValue = JSON.parse(localStorage.getItem(key) ?? "null");
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

/**
 * `useState` that tries to get the initial value from `localStorage`
 * and updates the value in `localStorage` on every change of value or key.
 * Inspired by: https://courses.webdevsimplified.com/react-hooks-simplified
 */
export default function useLocalStorage<T>(
  /** Key that defines the path to the value in `localStorage` */
  key: string,
  /** Initial value that is used when the value was not found */
  initialValue: T
) {
  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return { value, setValue };
}
