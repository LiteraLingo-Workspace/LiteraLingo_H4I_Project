import styled from "styled-components";
import { color, flexbox, layout, space, typography } from "styled-system";
import { StyledTextProps } from "../types";

export const StyledText = styled.p<StyledTextProps>`
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
