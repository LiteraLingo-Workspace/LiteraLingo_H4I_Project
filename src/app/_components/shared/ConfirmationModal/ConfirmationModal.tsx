import styles from "./ConfirmationModal.module.css";

interface TitleProps {
  title: string;
  description: string;
  confirm: string;
  cancel: JSX.Element;
}

export const ConfirmationModal: React.FC<TitleProps> = ({
  title,
  description,
  confirm,
  cancel,
}) => {
  return <div className={styles.container}></div>;
};
