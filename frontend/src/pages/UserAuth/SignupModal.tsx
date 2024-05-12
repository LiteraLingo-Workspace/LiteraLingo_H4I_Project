import { t } from "i18next";
import { BsX } from "react-icons/bs";
import { theme } from "../../common/styles/index";
import { useNavigate } from "react-router-dom";
import { Container, FlexRow, Title, Label, InputField, Button } from "./Modal";

export const SignupModal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FlexRow>
        <Title>{t("signupPage.title")}</Title>
        <BsX
          style={{
            width: "40px",
            height: "40px",
            transform: "translate(10px)",
            cursor: "pointer",
          }}
          color={theme.colors.primary}
          onClick={() => navigate("/")}
        ></BsX>
      </FlexRow>
      <Label>{t("signupPage.name")}</Label>
      <InputField placeholder="Jane Doe" />
      <Label>{t("signupPage.email")}</Label>
      <InputField type="email" placeholder="bbl.drizzy@gmail.com" />
      <Label>{t("signupPage.password")}</Label>
      <InputField type="password" />
      <Label>{t("signupPage.passwordConfirmation")}</Label>
      <InputField type="password" />
      <Button>{t("signupPage.button")}</Button>
    </Container>
  );
};
