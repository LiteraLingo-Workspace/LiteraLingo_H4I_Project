import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  height: 16px;
  width: 234px;
  justify-content: center;
  align-items: center;
  border-radius: 38px;
  background-color: rgba(229, 229, 229, 1);
`;

const Progress = styled.div`
  height: 100%;
  width: 37.17%;
  margin-right: auto;
  border-radius: 38px;
  background-color: ${theme.colors.coolAccentBg};
`;

const Shine = styled.div`
  height: 5px;
  width: 37.17%;
  position: relative;
  top: 4px;
  left: 9px;
  border-radius: 38px;
  background-color: rgba(90, 198, 234, 1);
`;

export const ProgressBar: React.FC = () => {
  return (
    <Container>
      <Progress>
        <Shine />
      </Progress>
    </Container>
  );
};
