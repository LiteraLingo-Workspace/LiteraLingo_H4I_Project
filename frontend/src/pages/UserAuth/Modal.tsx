import styled from "styled-components";
import { theme } from "../../common/styles/index";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;

const Label = styled.p`
  color: ${theme.colors.primary};
  padding: 0;
  margin: 0;
`;

const Title = styled(Label)`
  font-size: 24px;
  flex-grow: 1;
  font-weight: 700;
  text-align: left;
  line-feight: 40px;
`;

const Container = styled.div`
  background: white;
  width: 344px;
  border-radius: 16px;
  padding: 24px;
  padding-top: 15px;
  box-sizing: border-box;
  z-index: 1;
`;

export { FlexRow, Label, Title, Container };
