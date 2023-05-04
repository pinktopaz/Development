import styled from "styled-components";
import { RoomProps } from "./Interface/interfaceFile";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 60%;
  height: 60%;
  background-color: white;
  border: 5px solid black;

  .bulb {
    width: 8rem;
    height: 8rem;
    transform: rotate(180deg);
  }

  .off {
    width: 7rem;
    height: 7rem;
  }

  .flower {
    position: absolute;
    bottom: 0;
    width: 12rem;
    height: 9rem;
  }

  button {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const RoomThree = ({ isnight, seasonObj }: RoomProps) => {
  return (
    <Wrapper>
      <span>RoomThree</span>
      <button onClick={() => seasonObj.setSeason("Winter")}>Winter</button>
      {isnight ? (
        <img
          className="bulb on"
          src="https://cdn-icons-png.flaticon.com/512/1884/1884795.png"
          alt="전구"
        ></img>
      ) : (
        <img
          className="bulb off"
          src="https://cdn-icons-png.flaticon.com/512/4021/4021717.png"
          alt="전구"
        ></img>
      )}

      {
        {
          Spring: (
            <img
              className="flower"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdHU2_XmfrtNcTNxVQMtwTlt2fxNy2vGcMA&usqp=CAU"
              alt="씨앗"
            />
          ),
          Summer: (
            <img
              className="flower"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzHL-NYMaW-3XpewkuyW7KTk3M56-sGiufA&usqp=CAU"
              alt="새싹"
            />
          ),
          Fall: (
            <img
              className="flower"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXL5BGkB7PWTqy4C3mmKLmCAALSSyKbK-Mw&usqp=CAU"
              alt="꽃"
            />
          ),
          Winter: null,
        }[seasonObj.season]
      }
    </Wrapper>
  );
};

export default RoomThree;
