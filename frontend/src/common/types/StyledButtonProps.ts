import {
  BorderProps,
  BoxShadowProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ColorProps,
  BackgroundProps,
} from "styled-system";

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  BoxShadowProps &
  ColorProps &
  BackgroundProps;
