import styled from "styled-components";
import RoomThree from "./RoomThree";
import { RoomProps } from "./Interface/interfaceFile";

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

const RoomTwo = ({ isnight, seasonObj }: RoomProps) => {
  return (
    <Wrapper>
      <span>RoomTwo</span>
      <RoomThree isnight={isnight} seasonObj={seasonObj} />
    </Wrapper>
  );
};

export default RoomTwo;
