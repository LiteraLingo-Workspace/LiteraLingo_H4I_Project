import styles from "./Settings.module.css";

export const Slider: React.FC = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.button}>-</div>
      <div className={styles.bar}>0</div>
      <div className={styles.button}>+</div>
    </div>
  );
};
