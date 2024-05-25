import styled from "styled-components";
import { theme } from "../styles";

const Container = styled.div`
  position: fixed;
  height: 104px;
  z-index: 100;
`;

const Text = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 24px;
`;

interface TitleProps {
  title: string;
  typeLabel?: JSX.Element;
}

export const Header: React.FC<TitleProps> = ({ title, typeLabel }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          height: "38px",
          alignItems: "center",
          position: "relative",
          top: "68px",
          left: "36px",
          gap: "15px",
        }}
      >
        <Text>{title}</Text>
        {typeLabel}
      </div>
    </Container>
  );
};
