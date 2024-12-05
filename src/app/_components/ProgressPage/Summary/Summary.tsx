import styles from "./Summary.module.css";
import { Level } from "./Level";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { labelStyles } from "../../../../styles";

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
          color={labelStyles.metaphor.color}
          bg={labelStyles.metaphor.bg}
          text="Metaphor"
        />
      </div>
    </div>
  );
};
