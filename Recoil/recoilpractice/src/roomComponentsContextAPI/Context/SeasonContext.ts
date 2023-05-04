import { createContext } from "react";

interface SeasonType {
  season: string;
  setSeason: (e: string) => void;
}

export const SeasonContext = createContext<SeasonType>({
  season: "defaultValue",
  setSeason: () => console.log("its error"),
});
