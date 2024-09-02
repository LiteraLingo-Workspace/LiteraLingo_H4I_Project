import * as S from "./Styles";

interface TypeLabelProps {
  color: string;
  bg: string;
  text: string;
}

export const TypeLabel: React.FC<TypeLabelProps> = ({ color, bg, text }) => {
  return (
    <S.TypeLabel color={color} bg={bg}>
      {text}
    </S.TypeLabel>
  );
};
