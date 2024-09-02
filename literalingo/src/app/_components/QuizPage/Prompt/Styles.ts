import styled from "styled-components";
import { theme } from "../../../../styles";

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

const Prompt = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
  font-size: 23px;
  line-height: 36.85px;
  color: white;
  text-align: center;
`;

export { Container, Prompt };
