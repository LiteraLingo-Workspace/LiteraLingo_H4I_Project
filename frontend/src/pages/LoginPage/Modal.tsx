import { t } from "i18next";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { theme } from "../../common/styles/index";
import { useNavigate } from "react-router-dom";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;

const Button = styled.button`
  float: right;
  border: none;
  border-radius: 24px;
  gap: 4px;
  height: 48px;
  padding: 8px 16px 8px 16px;
  min-width: 96px;
  background: linear-gradient(180deg, #64aec6 0%, #5a8bca 100%);
  color: white;
`;

const Text = styled.p`
  padding: 0;
  color: ${theme.colors.primary};
  margin: 0;
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

const InputField = styled.input`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  padding: 5px 6px;
  border-width: 1px;
  margin-bottom: 48px;
  width: calc(100% - 16px);
  &::placeholder {
    color: ${theme.colors.secondary};
    font-family: Poppins, sans-serif;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${theme.colors.coolDark};
  }
`;

export const Modal = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FlexRow>
        <Text
          style={{
            fontSize: "24px",
            flexGrow: 1,
            fontWeight: 700,
            textAlign: "left",
            lineHeight: "40px",
          }}
        >
          {t("loginPage.title")}
        </Text>
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
      {t("loginPage.email")}
      <Text></Text>
      <InputField type="email" placeholder="janedoe@gmail.com" />
      {t("loginPage.password")}
      <Text></Text>
      <InputField type="password" />
      <Button>
        <Text
          style={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            color: "white",
          }}
        >
          {t("loginPage.button")}
        </Text>
      </Button>
    </Container>
  );
};
