import * as S from "./Styles";

interface TitleContainerProps {
  title: string;
  icon: JSX.Element;
}

export const TitleContainer: React.FC<TitleContainerProps> = ({
  title,
  icon,
}) => {
  return (
    <S.Container>
      {icon}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
