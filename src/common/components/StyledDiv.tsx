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

import { StyledDivProps } from "../types";

export const StyledDiv = styled.div<StyledDivProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
`;
