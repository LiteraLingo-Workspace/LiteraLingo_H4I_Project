import * as S from "./Styles";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

export const Modal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LoginButton onClick={() => navigate("/login")}>
        <S.ButtonText>{t("landingPage.signIn")}</S.ButtonText>
      </S.LoginButton>
      <S.Break />
      <S.Question>{t("landingPage.new")}</S.Question>
      <S.SignupButton onClick={() => navigate("/signup")}>
        <S.ButtonText>{t("landingPage.createAccount")}</S.ButtonText>
      </S.SignupButton>
    </S.Container>
  );
};
