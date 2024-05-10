import { t } from "i18next";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { theme } from "../../common/styles/index";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../common/components/InputField";
import { UserAuthButton } from "../../common/components/UserAuthButton";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;

const Text = styled.p`
  color: ${theme.colors.primary};
  padding: 0;
  margin: 0;
`;

const Title = styled(Text)`
  font-size: 24px;
  flex-grow: 1;
  font-weight: 700;
  text-align: left;
  line-feight: 40px;
`;

const Container = styled.div`
  background: white;
  width: 344px;
  border-radius: 16px;
  padding: 24px;
  padding-top: 15px;
  box-sizing: border-box;
  z-index: 1;
`;

export const Modal = () => {
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
      <Text>{t("loginPage.email")}</Text>
      <InputField type="email" placeholder="janedoe@gmail.com" />
      <Text>{t("loginPage.password")}</Text>
      <InputField type="password" />
      <UserAuthButton text={t("loginPage.button")} />
    </Container>
  );
};
