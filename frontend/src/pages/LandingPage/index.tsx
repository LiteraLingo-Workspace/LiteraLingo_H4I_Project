import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { Background } from "./Background";
import { Modal } from "./Modal";
import { Navbar } from "../../common/components/Navbar";

const Container = styled.div`
  background-color: ${theme.colors.coolAccentBg};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Modal />
      <Navbar />
    </Container>
  );
};
