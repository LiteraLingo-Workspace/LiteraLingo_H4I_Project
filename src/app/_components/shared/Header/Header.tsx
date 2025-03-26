import styles from "./Header.module.css";

interface TitleProps {
  title: string;
  color: string;
  subtitle?: string;
  typeLabel?: JSX.Element;
}

export const Header: React.FC<TitleProps> = ({ title, color, typeLabel, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
        <p className={styles.text} style={{ color: color }}>
          {title}
        </p>
        <p className={styles.text} style={{ color: color }}>
          {subtitle}
        </p>
        </div>
        {typeLabel}
      </div>
    </div>
  );
};
