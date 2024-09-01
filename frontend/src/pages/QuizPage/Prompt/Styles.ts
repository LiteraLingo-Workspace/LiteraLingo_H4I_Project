import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  height: 95px;
  width: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.coolAccentBg};
  margin-top: 15px;
  border-radius: 10px;
`;

export { Container };
