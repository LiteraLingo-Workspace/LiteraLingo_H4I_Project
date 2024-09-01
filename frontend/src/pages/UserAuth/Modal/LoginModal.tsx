import { t } from "i18next";
import { BsX } from "react-icons/bs";
import { theme } from "../../../styles/index";
import { useNavigate } from "react-router-dom";
import { Container, FlexRow, Title, Label, InputField, Button } from "./Styles";

export const LoginModal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FlexRow>
        <Title>{t("loginPage.title")}</Title>
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
      <Label>{t("loginPage.email")}</Label>
      <InputField type="email" placeholder="p.drizzy@gmail.com" />
      <Label>{t("loginPage.password")}</Label>
      <InputField type="password" />
      <Button>{t("loginPage.button")}</Button>
    </Container>
  );
};
