import * as S from "./Styles";
import { avatar } from "../../../assets/index";
import Image from "next/image";

export const Welcome: React.FC = () => {
  return (
    <S.Container>
      <Image
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <S.NameContainer>
        <S.WelcomeLabel>Welcome</S.WelcomeLabel>
        <S.NameLabel>Anna</S.NameLabel>
      </S.NameContainer>
    </S.Container>
  );
};
