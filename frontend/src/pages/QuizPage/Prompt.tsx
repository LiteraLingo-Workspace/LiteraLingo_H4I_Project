import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  height: 95px;
  width: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.coolAccentBg};
  margin-top: 15px;
  border-radius: 10px;
`;

export const Prompt: React.FC = () => {
  return (
    <Container>
      <p
        style={{
          fontFamily: "Baloo 2, sans-serif",
          fontWeight: 600,
          fontSize: "23px",
          lineHeight: "36.85px",
          textAlign: "center",
          color: "white",
        }}
      >
        Her word had the strength of titanium.
      </p>
    </Container>
  );
};
