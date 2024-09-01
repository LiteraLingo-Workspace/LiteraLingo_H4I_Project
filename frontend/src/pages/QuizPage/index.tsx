import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { TypeLabel } from "../../components/TypeLabel/TypeLabel";
import { theme } from "../../common/styles";
import { StatusInfo } from "./StatusInfo";
import { Prompt } from "./Prompt";
import { MultipleChoice } from "./MultipleChoice";
import { Background } from "./Background";
import { Navbar } from "../../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const QuizPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Header
        title="Quiz"
        color={theme.colors.primary}
        typeLabel={
          <TypeLabel
            color={theme.colors.warmYellow}
            bg={theme.colors.faintYellow}
          >
            Simile
          </TypeLabel>
        }
      />
      <div
        style={{
          position: "absolute",
          top: "104px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StatusInfo />
        <Prompt />
        <MultipleChoice />
      </div>
      <Navbar />
    </Container>
  );
};
