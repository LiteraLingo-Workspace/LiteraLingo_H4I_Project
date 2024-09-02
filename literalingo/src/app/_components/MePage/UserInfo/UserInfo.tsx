import * as S from "./Styles";
import { avatar } from "../../../assets/index";
import Image from "next/image";

export const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <Image
        style={{ height: "112px", width: "105.49px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <S.UserIdentityContainer>
        <S.Handle>@Raven1234</S.Handle>
        <S.Name>Anna Collin</S.Name>
      </S.UserIdentityContainer>
    </S.Container>
  );
};
