import { t } from "i18next";
import {
  StyledDiv,
  StyledText,
  StyledButton,
} from "../../common/components/index";
import { theme } from "../../common/styles";
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderTopLeftRadius={64}
      borderTopRightRadius={64}
      width="100%"
      height="39%"
      bg="white"
    >
      <StyledButton
        bg={theme.colors.coolAccentBg}
        borderRadius={32}
        color="white"
        width="300px"
        height="67px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="none"
        onClick={() => navigate("/login")}
      >
        <StyledText
          color="white"
          fontSize="32px"
          lineHeight="51px"
          fontWeight="500"
        >
          {t("landingPage.signIn")}
        </StyledText>
      </StyledButton>
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
      <StyledButton
        background="linear-gradient(180deg, #F37576 0%, #F1B950 160%)"
        borderRadius={32}
        color="white"
        width="300px"
        height="67px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="none"
        onClick={() => navigate("/signup")}
      >
        <StyledText
          color="white"
          fontSize="32px"
          lineHeight="51px"
          fontWeight="500"
        >
          {t("landingPage.createAccount")}
        </StyledText>
      </StyledButton>
    </StyledDiv>
  );
};
