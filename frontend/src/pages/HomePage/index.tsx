import styled from "styled-components";
import { Background } from "./Background";
import { Welcome } from "./Welcome";

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 344px;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Background />
      <SubContainer>
        <Welcome />
      </SubContainer>
    </Container>
  );
};
