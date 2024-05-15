import styled from "styled-components";
import { theme } from "../../common/styles";
import { FaArrowRightLong } from "react-icons/fa6";

const Container = styled.div`
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 16px;
  height: 64px;
  width: 100%;
  padding: 16px 24px;
  box-shadow: 0px 0px 40px 0px rgba(152, 168, 186, 0.2);
  box-sizing: border-box;
`;

export const TranslationBar: React.FC = () => {
  return (
    <Container>
      <p
        style={{
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "32.04px",
        }}
      >
        Figurative
      </p>
      <div
        style={{
          height: "32px",
          width: "48px",
          borderRadius: "16px",
          backgroundColor: `${theme.colors.faintBlue}`,
          padding: "4px 12px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowRightLong size={15} />
      </div>
      <p
        style={{
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "32.04px",
        }}
      >
        Literal
      </p>
    </Container>
  );
};
