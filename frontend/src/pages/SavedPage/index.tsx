import styled from "styled-components";
import { Background } from "./Background";
import { Modal } from "./Modal";

const Container = styled.div`

`;

export const SavedPage: React.FC = () => {
  return (
    <Container>
      <Background/>
      <Modal />
    </Container>
  );
};
