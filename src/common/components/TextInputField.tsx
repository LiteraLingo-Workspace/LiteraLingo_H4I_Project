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
  fontWeight,
} from "styled-system";

import { TextInputFieldProps } from "../types";
import { theme } from "../styles";

export const TextInputField = styled.input<TextInputFieldProps>`
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
  ${fontWeight}
  &::placeholder {
    color: ${theme.colors.secondary};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${theme.colors.coolDark};
  }
`;

TextInputField.defaultProps = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "21px",
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: "8px",
  padding: "5px 5px",
};
