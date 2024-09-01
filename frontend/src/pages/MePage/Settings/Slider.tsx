import * as S from "./Styles";

export const Slider: React.FC = () => {
  return (
    <S.SliderContainer>
      <S.Button>-</S.Button>
      <S.Bar>0</S.Bar>
      <S.Button>+</S.Button>
    </S.SliderContainer>
  );
};
