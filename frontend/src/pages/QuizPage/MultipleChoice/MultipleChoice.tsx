import * as S from "./Styles";
import { theme } from "../../../styles/index";

export const MultipleChoice: React.FC = () => {
  return (
    <>
      <S.Container>
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
        <S.ChoicesContainer>
          <S.ChoiceContainer>
            <S.ChoiceText>Her promises can be believed.</S.ChoiceText>
          </S.ChoiceContainer>
          <S.ChoiceContainer>
            <S.ChoiceText>Her promises cannot be trusted.</S.ChoiceText>
          </S.ChoiceContainer>
          <S.ChoiceContainer>
            <S.ChoiceText>
              Her words sound challenging to understand.
            </S.ChoiceText>
          </S.ChoiceContainer>
        </S.ChoicesContainer>
      </S.Container>
      <S.ButtonContainer>
        <S.Button>Check answer</S.Button>
      </S.ButtonContainer>
    </>
  );
};
