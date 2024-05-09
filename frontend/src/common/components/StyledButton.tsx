import styled from "styled-components";
import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";
import { StyledButtonProps } from "../types";

export const StyledButton = styled.div<StyledButtonProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
`;
