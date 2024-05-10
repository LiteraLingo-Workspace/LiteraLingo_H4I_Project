import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { Background } from "./Background";
import { Modal } from "./Modal";

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

export const LoginPage = () => {
  return (
    <Container>
      <Background />
      <Modal />
    </Container>
  );
};
