import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "season", //원하는 key 값 입력
  storage: localStorage,
});

export const seasonAtom = atom({
  key: "season",
  default: "Winter",
  effects_UNSTABLE: [persistAtom],
});

export const countChangeAtom = atom({
  key: "countDay",
  default: {
    season: 0,
    day: 0,
  },
});
