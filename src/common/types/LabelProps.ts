import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
  LineHeightProps,
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
  FontWeightProps &
  LineHeightProps &
  ColorProps & {
    color?: ColorSystem;
  };
