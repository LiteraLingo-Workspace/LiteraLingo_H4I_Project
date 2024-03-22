import styled from "styled-components";
import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
  textAlign,
  fontSize,
  fontFamily,
} from "styled-system";

import { LabelProps } from "../types";

export const Label = styled.div<LabelProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
  ${textAlign}
  ${fontSize}
  ${fontFamily}
`;

Label.defaultProps = {
  fontFamily: "'Poppins', sans-serif",
  display: "inline-block",
  border: "none",
  borderRadius: "30px",
  textAlign: "center",
  verticalAlign: "middle",
  padding: "8px 16px",
};
