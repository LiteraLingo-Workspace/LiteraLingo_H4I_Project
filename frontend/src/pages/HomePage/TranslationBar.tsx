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

const Text = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32.04px;
`;

const ArrowContainer = styled.div`
  height: 32px;
  width: 48px;
  border-radius: 16px;
  background-color: ${theme.colors.faintBlue};
  padding: 4px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TranslationBar: React.FC = () => {
  return (
    <Container>
      <Text>Figurative</Text>
      <ArrowContainer>
        <FaArrowRightLong size={15} />
      </ArrowContainer>
      <Text>Literal</Text>
    </Container>
  );
};
