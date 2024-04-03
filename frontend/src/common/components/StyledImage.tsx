import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

type StyledImageProps = SpaceProps &
  LayoutProps &
  PositionProps &
  OpacityProps &
  FlexboxProps;

export const StyledImage = styled("img")<StyledImageProps>`
  ${flexbox}
  ${space}
  ${layout}
  ${position}
  ${opacity}
`;
