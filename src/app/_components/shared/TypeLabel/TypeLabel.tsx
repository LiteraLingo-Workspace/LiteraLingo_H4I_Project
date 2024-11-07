import styles from "./TypeLabel.module.css";
import { theme } from "../../../../styles/index";
import { typeColors } from "../../QuizPage/index";

interface TypeLabelProps {
  text: keyof typeof typeColors; 
}

export const TypeLabel: React.FC<TypeLabelProps> = ({ text }) => {
  const { label, background } = typeColors[text];

  return (
    <div
      className={styles.typeLabel}
      style={{ color: label, backgroundColor: background }}
    >
      {text}
    </div>
  );
};
