import styles from "./FocalPoint.module.css";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { TitleContainer } from "../TitleContainer";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { labelStyles } from "../../../../styles/index";

export const FocalPoint: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitleContainer
        title="Focal Point"
        icon={<PiMagnifyingGlassBold size={24} />}
      />
      <div className={styles.overviewLabelsContainer}>
        <TypeLabel
          color={labelStyles.simile.color}
          bg={labelStyles.simile.bg}
          text="Simile"
        />
        <TypeLabel
          color={labelStyles.metonymy.color}
          bg={labelStyles.metonymy.bg}
          text="Metonymy"
        />
        <TypeLabel
          color={labelStyles.hyperbole.color}
          bg={labelStyles.hyperbole.bg}
          text="Hyperbole"
        />
        <TypeLabel
          color={labelStyles.proverb.color}
          bg={labelStyles.proverb.bg}
          text="Proverb"
        />
        <TypeLabel
          color={labelStyles.idiom.color}
          bg={labelStyles.idiom.bg}
          text="Idiom"
        />
      </div>
    </div>
  );
};
