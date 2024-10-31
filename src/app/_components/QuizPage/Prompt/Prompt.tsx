import styles from "./Prompt.module.css";

interface PromptProps {
  description: string;
}

export const Prompt: React.FC<PromptProps> = ({ description }) => {
  return (
    <div className={styles.container}>
      <p className={styles.prompt}>{description}</p>
    </div>
  );
};
