import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 344px;
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 344px;
  gap: 25px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95px;
  width: 344px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.colors.coolDark};
  border-radius: 16px;
  box-shadow: 0px 4px 0px 0px rgba(100, 174, 198, 1);
`;

const ChoiceText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${theme.colors.primary};
`;

export const MultipleChoice: React.FC = () => {
  return (
    <Container>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "33px",
          color: `${theme.colors.primary}`,
          textAlign: "left",
        }}
      >
        What does this mean?
      </p>
      <ChoicesContainer>
        <ChoiceContainer>
          <ChoiceText>Her promises can be believed.</ChoiceText>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoiceText>Her promises cannot be trusted.</ChoiceText>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoiceText>Her words sound challenging to understand.</ChoiceText>
        </ChoiceContainer>
      </ChoicesContainer>
    </Container>
  );
};
