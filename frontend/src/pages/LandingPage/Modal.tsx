import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import { StyledDiv, StyledText } from "../../common/components";
import { theme } from "../../common/styles";

type ButtonProps = {
  color: string;
  text: string;
  route: string;
};

const Button = ({ color, text, route }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <StyledDiv
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={100}
      bg={color}
      width="200px"
      p="12px"
      onClick={() => navigate(route)}
    >
      <StyledText color="white" fontSize="20px" lineHeight="51px">
        {text}
      </StyledText>
    </StyledDiv>
  );
};

export const Modal = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    borderTopLeftRadius={64}
    borderTopRightRadius={64}
    width="100%"
    height="40%"
    py="20px"
    bg="white"
  >
    <Button
      color={theme.colors.coolAccentBg}
      text={t("landingPage.signIn")}
      route="/login"
    />
    <StyledDiv height="0.5px" width="300px" bg="lightGrey" my="30px" />
    <StyledText color="lightgrey" fontSize="22px" lineHeight="51px">
      {t("landingPage.new")}
    </StyledText>
    <Button
      color={theme.colors.warm}
      text={t("landingPage.createAccount")}
      route="/signup"
    />
  </StyledDiv>
);
