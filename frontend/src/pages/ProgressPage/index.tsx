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
      <div style={{ position: "absolute", top: "104px", width: "100%" }}>
        <Summary />
        <Streak />
        <BottomSheet />
      </div>
      <Navbar />
    </S.Container>
  );
};
