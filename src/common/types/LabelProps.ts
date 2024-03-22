import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  FontSizeProps,
  FontFamilyProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";

import { ColorSystem } from "../styles";

export type LabelProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  BoxShadowProps &
  TextAlignProps &
  FontSizeProps &
  FontFamilyProps &
  ColorProps & {
    color?: ColorSystem;
  };
