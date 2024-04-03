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

export type TextVariant = "title";

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
          font-family: Helvetica, sans-serif;
          font-size: 66px;
          line-height: 88px;
          font-weight: bold;
        `;
      default:
        return css`
          font-family: Helvetica, sans-serif;
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
