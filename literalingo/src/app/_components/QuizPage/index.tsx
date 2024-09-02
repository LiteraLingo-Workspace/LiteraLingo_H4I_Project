import * as S from "./Styles";
import { Header } from "../../_components/shared/Header/Header";
import { TypeLabel } from "../../_components/shared/TypeLabel/TypeLabel";
import { theme } from "../../../styles/index";
import { StatusInfo } from "./StatusInfo/index";
import { Prompt } from "./Prompt/index";
import { MultipleChoice } from "./MultipleChoice/index";
import { Background } from "../../_components/shared/Background/Background";
import { Navbar } from "../../_components/shared/Navbar/Navbar";

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
