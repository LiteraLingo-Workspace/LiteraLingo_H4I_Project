import { t } from "i18next";
import { BsX } from "react-icons/bs";
import { theme } from "../../common/styles/index";
import { useNavigate } from "react-router-dom";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Container, FlexRow, Title, Label } from "./Modal";

export const SignupModal = () => {
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
      <InputField type="email" placeholder="janedoe@gmail.com" />
      <Label>{t("signupPage.password")}</Label>
      <InputField type="password" />
      <Label>{t("signupPage.passwordConfirmation")}</Label>
      <InputField type="password" />
      <Button>{t("signupPage.button")}</Button>
    </Container>
  );
};
