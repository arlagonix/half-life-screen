/*
  Had to use a separate file for this to avoid "using before initialization" issues.
  Tried many ways how to do that in a more elegant way, but this one is the only working.
*/
export type LanguageType = "en" | "ru";
export const languages = ["en", "ru"] as LanguageType[];
