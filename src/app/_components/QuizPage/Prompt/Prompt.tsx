import styles from "./Prompt.module.css";

interface PromptProps {
  expression: string;
}

export const Prompt: React.FC<PromptProps> = ({ expression }) => {
  return (
    <div className={styles.container}>
      <p className={styles.prompt}>{expression}</p>
    </div>
  );
};
