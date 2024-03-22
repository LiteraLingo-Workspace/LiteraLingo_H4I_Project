import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system";

import { ColorSystem } from "../styles";

export type StyledDivProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  BoxShadowProps &
  ColorProps & {
    color?: ColorSystem;
  };
