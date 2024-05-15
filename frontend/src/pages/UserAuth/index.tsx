import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { Background } from "./Background";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

interface UserAuthPageProps {
  type: string;
}

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

export const UserAuthPage: React.FC<UserAuthPageProps> = ({ type }) => {
  return (
    <Container>
      <Background />
      {(type === "login" && <LoginModal />) ||
        (type === "signup" && <SignupModal />)}
    </Container>
  );
};
