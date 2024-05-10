import { t } from "i18next";
import { StyledDiv, StyledText } from "../../common/components/index";
import { theme } from "../../common/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

export const Modal = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginButton onClick={() => navigate("/login")}>
        <StyledText
          color="white"
          fontSize="32px"
          lineHeight="51px"
          fontWeight="500"
        >
          {t("landingPage.signIn")}
        </StyledText>
      </LoginButton>
      <StyledDiv
        height="1px"
        width="300px"
        bg={theme.colors.faintGrey}
        marginTop="20px"
        marginBottom="10px"
      />
      <StyledText
        color={theme.colors.secondary}
        fontSize="20px"
        lineHeight="30px"
        fontWeight="400"
        marginBottom="8px"
        textAlign="center"
        fontFamily="Poppins"
      >
        {t("landingPage.new")}
      </StyledText>
      <SignupButton onClick={() => navigate("/signup")}>
        <StyledText
          color="white"
          fontSize="32px"
          lineHeight="51px"
          fontWeight="500"
        >
          {t("landingPage.createAccount")}
        </StyledText>
      </SignupButton>
    </Container>
  );
};
