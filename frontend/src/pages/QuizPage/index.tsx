import * as S from "./Styles";
import { Header } from "../../components/Header/index";
import { TypeLabel } from "../../components/TypeLabel/index";
import { theme } from "../../styles/index";
import { StatusInfo } from "./StatusInfo/index";
import { Prompt } from "./Prompt/index";
import { MultipleChoice } from "./MultipleChoice/index";
import { Background } from "../../components/Background/index";
import { Navbar } from "../../components/Navbar/index";

export const QuizPage: React.FC = () => {
  return (
    <S.Container>
      <Background />
      <Header
        title="Quiz"
        color={theme.colors.primary}
        typeLabel={
          <TypeLabel
            color={theme.colors.warmYellow}
            bg={theme.colors.faintYellow}
            text="Simile"
          />
        }
      />
      <S.SubContainer>
        <StatusInfo />
        <Prompt />
        <MultipleChoice />
      </S.SubContainer>
      <Navbar />
    </S.Container>
  );
};
