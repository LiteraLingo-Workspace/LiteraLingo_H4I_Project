import styles from "./Header.module.css";

interface TitleProps {
  title: string;
  color: string;
  typeLabel?: JSX.Element;
}

export const Header: React.FC<TitleProps> = ({ title, color, typeLabel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <p className={styles.text} style={{ color: color }}>
          {title}
        </p>
        {typeLabel}
      </div>
    </div>
  );
};
