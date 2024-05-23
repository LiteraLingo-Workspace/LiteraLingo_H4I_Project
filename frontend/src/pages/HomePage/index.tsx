import styled from "styled-components";
import { Background } from "./Background";
import { Welcome } from "./Welcome";
import { TranslationBar } from "./TranslationBar";
import { TranslationBox } from "./TranslationBox";

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  position: absolute;
  width: 344px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 7.98%;
`;

// const Temp = styled.div`
//   position: fixed;
//   bottom: 0;
//   height: 7%;
//   width: 100%;
//   background-color: white;
//   z-index: 1;
// `;

export const HomePage: React.FC = () => {
  // TODO: fix css styles to make them more neat
  return (
    <Container>
      <Background />
      <SubContainer>
        <Welcome />
        <TranslationBar />
        <TranslationBox />
      </SubContainer>
    </Container>
  );
};
