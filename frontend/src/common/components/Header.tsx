import styled from "styled-components";
import { theme } from "../styles";

const Container = styled.div`
  position: fixed;
  height: 104px;
  width: 100%;
  z-index: 100;
`;

const Text = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 24px;
  position: relative;
  top: 68px;
  left: 36px;
`;

interface TitleProps {
  title: string;
}

export const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};
