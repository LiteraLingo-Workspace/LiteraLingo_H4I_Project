import styled from "styled-components";

interface TitleContainerProps {
  title: string;
  icon: JSX.Element;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-left: 14px;
`;

const Title = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 31.2px;
`;

export const TitleContainer: React.FC<TitleContainerProps> = ({
  title,
  icon,
}) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};
