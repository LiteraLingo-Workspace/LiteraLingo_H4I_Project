import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 104px;
  z-index: 100;
`;

const Text = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

interface TitleProps {
  title: string;
  color: string;
  typeLabel?: JSX.Element;
}

export const Header: React.FC<TitleProps> = ({ title, color, typeLabel }) => {
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
        <Text style={{ color: color }}>{title}</Text>
        {typeLabel}
      </div>
    </Container>
  );
};
