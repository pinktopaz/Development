import { selector } from "recoil";
import { countChangeAtom } from "./atom";

export const countChangeSelector = selector({
  key: "countChangeSelector",
  get: ({ get }) => {
    return get(countChangeAtom).day + get(countChangeAtom).season;
  },
});
