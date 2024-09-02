import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-bottom: 3.52%;
`;

const NameContainer = styled.div`
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 98px;
  height: 74px;
  text-align: right;
`;

const WelcomeLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;

const NameLabel = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 500;
  font-size: 32px;
  margin-top: -10px;
`;

export { Container, NameContainer, WelcomeLabel, NameLabel };
