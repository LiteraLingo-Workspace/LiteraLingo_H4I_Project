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
`;

Label.defaultProps = {
  display: "inline-block",
  border: "none",
  borderRadius: "30px",
  textAlign: "center",
  verticalAlign: "middle",
  padding: "10px 15px",
};
