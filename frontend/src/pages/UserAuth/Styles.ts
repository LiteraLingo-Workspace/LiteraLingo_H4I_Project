import styled from "styled-components";
import { theme } from "../../styles/index";

const Container = styled.div`
  background-color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container };
