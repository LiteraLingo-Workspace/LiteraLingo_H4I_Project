import * as S from "./Styles";
import { Header } from "../../_components/shared/Header/Header";
import { UserInfo } from "./UserInfo/index";
import { Overview } from "./Overview/index";
import { FocalPoint } from "./FocalPoint/index";
import { Settings } from "./Settings/index";
import { Background } from "../../_components/shared/Background/Background";
import { Navbar } from "../../_components/shared/Navbar/Navbar";
import { theme } from "../../../styles/index";

export const MePage: React.FC = () => {
  return (
    <S.Container>
      <Background />
      <Header title="Your Profile" color={theme.colors.primary} />
      <S.SubContainer>
        <UserInfo />
        <Overview />
        <FocalPoint />
        <Settings />
      </S.SubContainer>
      <Navbar />
    </S.Container>
  );
};
