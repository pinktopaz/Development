import styled from "styled-components";
import RoomThree from "./RoomThree";
import { IsNightProps } from "./Interface/interfaceFile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 70%;
  height: 70%;
  background-color: white;
  border: 5px solid black;

  .off {
    width: 7rem;
    height: 7rem;
  }
`;

const RoomTwo = ({ isnight }: IsNightProps) => {
  return (
    <Wrapper>
      <span>RoomTwo</span>
      <RoomThree isnight={isnight} />
    </Wrapper>
  );
};

export default RoomTwo;
