import * as S from "./Styles";
import { avatar } from "../../../assets/index";
import { theme } from "../../../styles/index";

export const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <img
        style={{ height: "112px", width: "105.49px", borderRadius: "100px" }}
        src={avatar}
      />
      <S.UserIdentityContainer>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: `${theme.colors.secondary}`,
          }}
        >
          @Raven1234
        </p>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: `${theme.colors.primary}`,
          }}
        >
          Anna Collin
        </p>
      </S.UserIdentityContainer>
    </S.Container>
  );
};
