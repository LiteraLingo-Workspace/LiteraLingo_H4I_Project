import { t } from "i18next";
import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 64px;
  border-top-right-radius: 64px;
  width: 100%;
  height: 39%;
  background-color: white;
`;

const LoginButton = styled.button`
  background-color: ${theme.colors.coolAccentBg};
  border-radius: 32px;
  color: white;
  width: 300px;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const SignupButton = styled(LoginButton)`
  background: linear-gradient(180deg, #f37576 0%, #f1b950 160%);
`;

const ButtonText = styled.p`
  color: white;
  font-size: 32px;
  line-height: 51px;
  font-weight: 500;
`;

const Break = styled.div`
  height: 1px;
  width: 300px;
  background-color: ${theme.colors.faintGrey};
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Question = styled.p`
  color: ${theme.colors.secondary};
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  margin-bottom: 8px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const Modal = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginButton onClick={() => navigate("/login")}>
        <ButtonText>{t("landingPage.signIn")}</ButtonText>
      </LoginButton>
      <Break />
      <Question>{t("landingPage.new")}</Question>
      <SignupButton onClick={() => navigate("/signup")}>
        <ButtonText>{t("landingPage.createAccount")}</ButtonText>
      </SignupButton>
    </Container>
  );
};
