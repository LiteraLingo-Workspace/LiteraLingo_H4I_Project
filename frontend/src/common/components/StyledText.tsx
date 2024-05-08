import styled from "styled-components";
import { color, flexbox, layout, space, typography } from "styled-system";
import { StyledTextProps } from "../types/StyledTextProps";

export const StyledText = styled.text<StyledTextProps>`
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
