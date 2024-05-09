import styled from "styled-components";
import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
  background,
} from "styled-system";
import { StyledButtonProps } from "../types";

export const StyledButton = styled.button<StyledButtonProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
  ${background}
  &:hover {
    cursor: pointer;
  }
`;
