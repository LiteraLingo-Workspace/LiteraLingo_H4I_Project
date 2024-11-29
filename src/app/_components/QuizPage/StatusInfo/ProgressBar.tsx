import styles from "./StatusInfo.module.css";

interface ProgressBar {
  completed: number,
  total: number,
}

export const ProgressBar: React.FC<ProgressBar> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progress}
        style={{ width: `${percentage}%` }}
      >
        <div className={styles.shine} />
      </div>
    </div>
  );
};
