import * as S from "./Styles";
import { Background } from "../shared/Background/Background";
import { Welcome } from "./Welcome/index";
import { TranslationBar, TranslationBox } from "./Translation/index";
import { History } from "./History/index";
import { Navbar } from "../shared/Navbar/Navbar";

export const HomePage: React.FC = () => {
  return (
    <S.Container>
      <Background />
      <S.SubContainer>
        <Welcome />
        <TranslationBar />
        <TranslationBox />
      </S.SubContainer>
      <History />
      <S.Temp />
      <Navbar />
    </S.Container>
  );
};
