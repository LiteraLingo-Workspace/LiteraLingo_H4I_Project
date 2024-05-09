import styled from "styled-components";
import { flexbox, layout, opacity, position, space } from "styled-system";
import { StyledImageProps } from "../types";

export const StyledImage = styled("img")<StyledImageProps>`
  ${flexbox}
  ${space}
  ${layout}
  ${position}
  ${opacity}
`;
