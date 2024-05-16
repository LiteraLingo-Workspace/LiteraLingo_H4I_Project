import styled from "styled-components";
import { Background } from "./Background";
import { Welcome } from "./Welcome";
import { TranslationBar } from "./TranslationBar";
import { TranslationBox } from "./TranslationBox";
import { History } from "./History";

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  position: absolute;
  width: 344px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 68px;
`;

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Background />
      <SubContainer>
        <Welcome />
        <TranslationBar />
        <TranslationBox />
      </SubContainer>
      <History />
    </Container>
  );
};
