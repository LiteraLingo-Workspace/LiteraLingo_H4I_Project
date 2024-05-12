import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { Background } from "./Background";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

const Container = styled.div`
  background-color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <Container>
      <Background />
      <LoginModal />
    </Container>
  );
};

const SignupPage = () => {
  return (
    <Container>
      <Background />
      <SignupModal />
    </Container>
  );
};

export { LoginPage, SignupPage };
