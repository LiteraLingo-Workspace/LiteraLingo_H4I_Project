import styles from "./TypeLabel.module.css";

interface TypeLabelProps {
  color: string;
  bg: string;
  text: string;
}

export const TypeLabel: React.FC<TypeLabelProps> = ({ color, bg, text }) => {
  return (
    <div
      className={styles.typeLabel}
      style={{ color: color, backgroundColor: bg }}
    >
      {text}
    </div>
  );
};