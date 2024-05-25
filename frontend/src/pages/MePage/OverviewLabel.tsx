import styled from "styled-components";
import { theme } from "../../common/styles";

export const OverviewLabel = styled.div`
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
