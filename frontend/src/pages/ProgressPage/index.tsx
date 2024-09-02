import * as S from "./Styles";
import { Header } from "../../components/Header/index";
import { Navbar } from "../../components/Navbar/index";
import { Summary } from "./Summary/index";
import { Streak } from "./Streak/index";
import { BottomSheet } from "./BottomSheet/index";

export const ProgressPage: React.FC = () => {
  return (
    <S.Container>
      <Header title="Your Progress" color="white" />
      <S.SubContainer>
        <Summary />
        <Streak />
        <BottomSheet />
      </S.SubContainer>
      <Navbar />
    </S.Container>
  );
};
