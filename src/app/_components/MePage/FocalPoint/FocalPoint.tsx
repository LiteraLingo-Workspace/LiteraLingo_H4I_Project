import styles from "./FocalPoint.module.css";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { TitleContainer } from "../TitleContainer";
import { theme } from "../../../../styles/index";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { labelStyleType, labelStyles } from "../../../../styles/index";

export const FocalPoint: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitleContainer
        title="Focal Point"
        icon={<PiMagnifyingGlassBold size={24} />}
      />
      <div className={styles.overviewLabelsContainer}>
        <TypeLabel
          color={theme.colors.warmYellow}
          bg={theme.colors.faintYellow}
          text="Simile"
        />
        <TypeLabel
          color={theme.colors.warm}
          bg={theme.colors.faintWarm}
          text="Metonymy"
        />
        <TypeLabel
          color={theme.colors.coolDark}
          bg={theme.colors.faintCoolDark}
          text="Hyperbole"
        />
        <TypeLabel
          color={theme.colors.coolLight}
          bg={theme.colors.faintCoolLight}
          text="Proverb"
        />
        <TypeLabel
          color={theme.colors.primary}
          bg={theme.colors.faintPrimary}
          text="Idiom"
        />
      </div>
    </div>
  );
};
