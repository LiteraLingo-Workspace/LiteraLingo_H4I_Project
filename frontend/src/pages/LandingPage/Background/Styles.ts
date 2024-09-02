import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60%;
  margin-bottom: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Title = styled.p`
  color: white;
  font-size: 40px;
  line-height: 88px;
  font-weight: 600;
`;

const Slogan1 = styled.p`
  color: ${theme.colors.primary};
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
`;

const Slogan2 = styled(Slogan1)`
  font-weight: 700;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -75px;
`;

export { Container, FlexRow, Title, Slogan1, Slogan2, FlexColumn };
