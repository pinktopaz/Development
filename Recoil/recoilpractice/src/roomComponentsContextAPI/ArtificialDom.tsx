import styled from "styled-components";
import RoomOne from "./RoomOne";
import { useState } from "react";
import { IsNightProps } from "./Interface/interfaceFile";
import { SeasonContext } from "./Context/SeasonContext";

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

const ArtificialDomContextAPI = () => {
  /** Interface 는 ./Interface/interfaceFile.ts 에 있습니다. */

  /** night 와 day 의 상태를 관리하는 useState */
  const [isnight, setIsNight] = useState<boolean>(true);

  /** 계절을 관리할 수 있는 useState 를 만들어주세요. */
  const [season, setSeason] = useState<string>("Winter");

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      <Wrapper isnight={isnight}>
        <span>
          ArtificialDom - / isnight? : {isnight ? "night" : "Day"} / season :{" "}
          {season}
        </span>
        <button onClick={() => setIsNight((prev) => !prev)}>
          light on/Off
        </button>

        <RoomOne isnight={isnight} />
        <button onClick={() => setSeason("Spring")}>Spring</button>
        <button onClick={() => setSeason("Summer")}>Summer</button>
        <button onClick={() => setSeason("Fall")}>Fall</button>
      </Wrapper>
    </SeasonContext.Provider>
  );
};

export default ArtificialDomContextAPI;
