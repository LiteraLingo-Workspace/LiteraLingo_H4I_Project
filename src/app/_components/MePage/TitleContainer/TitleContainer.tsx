import styles from "./TitleContainer.module.css";

interface TitleContainerProps {
  title: string;
  icon: JSX.Element;
}

export const TitleContainer: React.FC<TitleContainerProps> = ({
  title,
  icon,
}) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.title}>{title}</p>
    </div>
  );
};
