import * as S from "./Styles";
import { avatar } from "../../../assets/index";

export const Welcome: React.FC = () => {
  return (
    <S.Container>
      <img
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
      />
      <S.NameContainer>
        <S.WelcomeLabel>Welcome</S.WelcomeLabel>
        <S.NameLabel>Anna</S.NameLabel>
      </S.NameContainer>
    </S.Container>
  );
};
