export type ColorSystem =
  | "primary"
  | "secondary"
  | "veryLight"
  | "white"
  | "coolDark"
  | "coolAccentBg"
  | "coolLight"
  | "warm"
  | "warmLight"
  | "warmYellow"
  | "failure"
  | "success"
  | "faintBlue"
  | "faintYellow"
  | "faintWarm"
  | "faintCoolDark"
  | "faintCoolLight"
  | "faintGrey"
  | "faintPurple"
  | "faintPrimary";

export const theme = {
  colors: {
    primary: "#163968",
    secondary: "#98A8BA",
    veryLight: "#D8E7EC",
    white: "#FFFFFF",
    coolDark: "#467ABE",
    coolAccentBg: "#64AEC6",
    coolLight: "#86DFD4",
    warm: "#F37576",
    warmLight: "#F7A4A6",
    warmYellow: "#F1B950",
    failure: "#D53132",
    success: "#45CB73",
    faintBlue: "rgba(100, 174, 198, 0.2)",
    faintYellow: "rgba(241, 185, 80, 0.2)",
    faintWarm: "rgba(243, 117, 118, 0.2)",
    faintCoolDark: "rgba(70, 122, 190, 0.2)",
    faintCoolLight: "rgba(134, 223, 212, 0.2)",
    faintGrey: "rgba(152, 168, 186, 0.2)",
    faintPurple: "rgba(105, 65, 198, 0.2)",
    faintPrimary: "rgba(22, 57, 104, 0.2)",
  },
};
