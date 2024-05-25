import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  justify-content: center;
`;

const Bar = styled.div`
  background-color: white;
  color: ${theme.colors.secondary};
  height: 17px;
  width: 160px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`;

export const Slider: React.FC = () => {
  return (
    <Container>
      <Button>-</Button>
      <Bar>0</Bar>
      <Button>+</Button>
    </Container>
  );
};
