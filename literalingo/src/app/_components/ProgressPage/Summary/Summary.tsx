import styles from "./Summary.module.css";
import { Level } from "./Level";
import { TypeLabel } from "../../../_components/shared/TypeLabel/TypeLabel";
import { theme } from "../../../../styles";

export const Summary: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <Level />
        <div
          className={styles.experienceContainer}
          style={{
            width: "100px",
            alignItems: "center",
          }}
        >
          <p className={styles.experiencePercentLabel}>88%</p>
          <p className={styles.experienceLevelLabel}>Lvl 12</p>
        </div>
        <div className={styles.experienceContainer}>
          <p style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 700 }}>
            140 XP
          </p>
          <p style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700 }}>
            Collected
          </p>
        </div>
      </div>
      <div className={styles.mostPracticedContainer}>
        <p className={styles.mostPracticedLabel}>Most practiced:</p>
        <TypeLabel
          color={theme.colors.coolAccentBg}
          bg={theme.colors.veryLight}
          text="Metaphor"
        />
      </div>
    </div>
  );
};
