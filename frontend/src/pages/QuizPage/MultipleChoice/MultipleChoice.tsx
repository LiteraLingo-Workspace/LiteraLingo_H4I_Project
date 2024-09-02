import * as S from "./Styles";

export const MultipleChoice: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.QuestionLabel>What does this mean?</S.QuestionLabel>
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
