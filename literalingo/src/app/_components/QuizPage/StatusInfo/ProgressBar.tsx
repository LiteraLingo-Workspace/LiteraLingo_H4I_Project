import styles from "./StatusInfo.module.css";

export const ProgressBar: React.FC = () => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progress}>
        <div className={styles.shine} />
      </div>
    </div>
  );
};
