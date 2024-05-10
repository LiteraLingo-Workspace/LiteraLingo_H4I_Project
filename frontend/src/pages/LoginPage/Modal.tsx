import { BsX } from "react-icons/bs";
import { theme } from "../../common/styles";
import { useNavigate } from "react-router-dom";
import { TextInputField } from "../../common/components/index";
import styled from "styled-components";

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

const Dialogue = styled.div`
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
    <Dialogue>
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
          Sign in to your account
        </Text>
        <BsX
          style={{
            width: "40px",
            height: "40px",
            transform: "translate(10px)",
          }}
          color={theme.colors.primary}
          onClick={() => navigate("/")}
        ></BsX>
      </FlexRow>
      <Text>Enter your email</Text>
      <TextInputField
        width={"calc(100% - 16px)"}
        style={{ marginBottom: "48px", borderWidth: "1px" }}
        type="email"
        placeholder="janedoe@gmail.com"
      />
      <Text>Enter your password</Text>
      <TextInputField
        width={"calc(100% - 16px)"}
        style={{ marginBottom: "48px", borderWidth: "1px" }}
        type="password"
      />
      <Button>
        <Text
          style={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            color: "white",
          }}
        >
          Sign in
        </Text>
      </Button>
    </Dialogue>
  );
};
