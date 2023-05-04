import styled from "styled-components";
import RoomOne from "./RoomOne";
import { useState } from "react";
import { IsNightProps } from "./Interface/interfaceFile";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { countChangeAtom, seasonAtom } from "./Atom/atom";
import { countChangeSelector } from "./Atom/selector";

const Wrapper = styled.div<IsNightProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: aliceblue;
  background-color: ${(props) => (props.isnight ? "black" : "white")};
  font-size: 4rem;

  span {
    position: absolute;
    top: 0;
    left: 0;

    color: plum;
    font-size: 4rem;
  }
`;

const ArtificialDomRecoil = () => {
  /** Interface 는 ./Interface/interfaceFile.ts 에 있습니다. */

  /** night 와 day 의 상태를 관리하는 useState */
  const [isnight, setIsNight] = useState<boolean>(true);

  const [season, setSeasonRecoilFn] = useRecoilState(seasonAtom);
  const setCountChangeFn = useSetRecoilState(countChangeAtom);
  const totalChangeCount = useRecoilValue(countChangeSelector);

  return (
    <>
      <Wrapper isnight={isnight}>
        <span>
          <p>날과 계절이 바뀐 totalCount :{totalChangeCount} </p>
          ArtificialDom - / isnight? : {isnight ? "night" : "Day"} / season :{" "}
          {season}
        </span>

        <button
          onClick={() => {
            setIsNight((prev) => !prev);
            setCountChangeFn((prev) => ({
              ...prev,
              day: prev.day + 1,
            }));
          }}
        >
          light on/Off
        </button>

        <RoomOne isnight={isnight} />
        <button
          onClick={() => {
            setSeasonRecoilFn("Spring");
            setCountChangeFn((prev) => ({
              ...prev,
              season: prev.season + 1,
            }));
          }}
        >
          Spring
        </button>
        <button
          onClick={() => {
            setSeasonRecoilFn("Summer");
            setCountChangeFn((prev) => ({
              ...prev,
              season: prev.season + 1,
            }));
          }}
        >
          Summer
        </button>
        <button
          onClick={() => {
            setSeasonRecoilFn("Fall");
            setCountChangeFn((prev) => ({
              ...prev,
              season: prev.season + 1,
            }));
          }}
        >
          Fall
        </button>
      </Wrapper>
    </>
  );
};

export default ArtificialDomRecoil;
