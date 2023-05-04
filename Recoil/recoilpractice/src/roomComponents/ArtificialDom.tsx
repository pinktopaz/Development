import styled from "styled-components";
import RoomOne from "./RoomOne";
import { useState } from "react";
import { IsNightProps } from "./Interface/interfaceFile";

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

const ArtificialDom = () => {
  /** Interface 는 ./Interface/interfaceFile.ts 에 있습니다. */

  /** night 와 day 의 상태를 관리하는 useState */
  const [isnight, setIsNight] = useState<boolean>(true);

  /** 계절을 관리할 수 있는 useState 를 만들어주세요. */

  return (
    <Wrapper isnight={isnight}>
      <span>
        ArtificialDom - / isnight? : {isnight ? "night" : "Day"} / season :
        현재의 계절을 나타내주세요
      </span>
      <button onClick={() => setIsNight((prev) => !prev)}>light on/Off</button>

      <RoomOne isnight={isnight} />
      <button>Spring</button>
      <button>Summer</button>
      <button>Fall</button>
    </Wrapper>
  );
};

export default ArtificialDom;
