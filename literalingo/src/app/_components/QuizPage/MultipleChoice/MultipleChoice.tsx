import styles from "./MultipleChoice.module.css";

export const MultipleChoice: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.questionLabel}>What does this mean?</p>
        <div className={styles.choicesContainer}>
          <div className={styles.choiceContainer}>
            <p className={styles.choiceText}>Her promises can be believed.</p>
          </div>
          <div className={styles.choiceContainer}>
            <p className={styles.choiceText}>Her promises cannot be trusted.</p>
          </div>
          <div className={styles.choiceContainer}>
            <p className={styles.choiceText}>
              Her words sound challenging to understand.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Check answer</button>
      </div>
    </>
  );
};
