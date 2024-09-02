import styled from "styled-components";
import { theme } from "../../../../styles/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
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

const OverviewLabel = styled.div`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.faintGrey};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  border: none;
  border-radius: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 8px 16px;
  line-height: 22px;
`;

export { Container, OverviewLabelsContainer, OverviewLabel };
