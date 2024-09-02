import * as S from "./Styles";

interface TitleProps {
  title: string;
  color: string;
  typeLabel?: JSX.Element;
}

export const Header: React.FC<TitleProps> = ({ title, color, typeLabel }) => {
  return (
    <S.Container>
      <S.SubContainer>
        <S.Text color={color}>{title}</S.Text>
        {typeLabel}
      </S.SubContainer>
    </S.Container>
  );
};
