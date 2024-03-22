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
  FontWeightProps,
  LineHeightProps,
} from "styled-system";

import { ColorSystem } from "../styles";

export type TextInputFieldProps = SpaceProps &
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
