import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
  margin-top: 20px;
`;

const OverviewLabelsContainer = styled.div`
  flex-wrap: wrap;
  position: relative;
  width: 363px;
  left: 23px;
  display: flex;
  row-gap: 8px;
  column-gap: 8px;
`;

export { Container, OverviewLabelsContainer };
