import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 2px solid ${theme.colors.coolDark};
  box-shadow: 0px 4px 0px 0px rgba(100, 174, 198, 1);
  height: 344px;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SubContainer = styled.div`
  width: 312px;
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${theme.colors.faintGrey};
`;

const Text = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32.04px;
`;

export const TranslationBox: React.FC = () => {
  return (
    <Container>
      <SubContainer>
        <TextArea>
          <p>sss</p>
        </TextArea>
        <ButtonArea>
          <p>aa</p>
        </ButtonArea>
      </SubContainer>
    </Container>
  );
};
