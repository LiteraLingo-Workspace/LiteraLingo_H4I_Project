import styled, { css } from "styled-components";
import {
  color,
  type ColorProps,
  flexbox,
  type FlexboxProps,
  layout,
  type LayoutProps,
  space,
  type SpaceProps,
  typography,
  type TypographyProps,
} from "styled-system";

import { theme } from "../styles";

export type TextVariant =
  | "title"
  | "landingSubtitle"
  | "landingSubtext"
  | "button";

type StyledTextProps = {
  variant: TextVariant;
} & ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const StyledText = styled.text<StyledTextProps>`
  ${({ variant }) => {
    switch (variant) {
      case "title":
        return css`
          color: white;
          font-family: "Baloo 2", sans-serif;
          font-size: 40px;
          line-height: 88px;
          font-weight: bold;
        `;
      case "landingSubtitle":
        return css`
          color: ${theme.colors.primary};
          font-family: "Baloo 2", sans-serif;
          font-size: 32px;
          line-height: 51px;
          font-weight: bold;
        `;
      case "landingSubtext":
        return css`
          color: lightgrey;
          font-family: "Baloo 2", sans-serif;
          font-size: 22px;
          line-height: 51px;
        `;
      case "button":
        return css`
          color: white;
          font-family: "Baloo 2", sans-serif;
          font-size: 20px;
          line-height: 51px;
          font-weight: bold;
        `;
      default:
        return css`
          font-family: "Baloo 2", sans-serif;
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }}

  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
