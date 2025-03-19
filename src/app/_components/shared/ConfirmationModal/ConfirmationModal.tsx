import styles from "./ConfirmationModal.module.css";
import globalStyles from "../../../index.module.css";

interface ConfirmationModalProps {
  title: string;
  description: string;
  confirm: string;
  cancel: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  confirm,
  cancel,
  onConfirm,
  onClose,
}) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <p className={styles.titleText}>{title}</p>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button
              className={globalStyles.secondaryOutlineButton}
              onClick={onConfirm}
              aria-label="Confirm"
            >
              {confirm}
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={globalStyles.secondaryGreyOutlineButton}
              onClick={onClose}
              aria-label="Cancel"
            >
              {cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
