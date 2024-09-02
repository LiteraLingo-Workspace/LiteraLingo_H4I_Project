import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  background-color: ${theme.colors.coolAccentBg};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container };
