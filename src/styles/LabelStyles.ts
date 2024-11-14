import { theme, ColorSystem } from "./ColorStyles";

export type labelStyleType = {
  color: ColorSystem;
  background: ColorSystem;
};

export const labelStyles = {
  simile: {
    color: theme.colors.warmYellow,
    bg: theme.colors.faintYellow,
  },
  metonymy: {
    color: theme.colors.warm,
    bg: theme.colors.faintWarm,
  },
  idiom: {
    color: theme.colors.primary,
    bg: theme.colors.faintPrimary,
  },
  proverb: {
    color: theme.colors.coolLight,
    bg: theme.colors.faintCoolLight,
  },
  hyperbole: {
    color: theme.colors.coolDark,
    bg: theme.colors.faintCoolDark,
  },
  metaphor: {
    color: theme.colors.coolDark,
    bg: theme.colors.faintBlue,
  },
  sarcasm: {
    color: theme.colors.purple,
    bg: theme.colors.faintPurple,
  },
  Loading: {
    color: theme.colors.coolDark,
    bg: theme.colors.faintGrey,
  },
};
