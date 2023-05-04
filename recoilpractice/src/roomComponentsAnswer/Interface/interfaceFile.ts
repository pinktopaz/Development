export  interface IsNightProps {
  isnight: boolean;
}

export  interface RoomProps {
  isnight: boolean;
  seasonObj: {
    season: string;
    setSeason: (season: string) => void;
  };
}
