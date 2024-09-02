import styles from "./Translation.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const TranslationBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Figurative</p>
      <div className={styles.arrowContainer}>
        <FaArrowRightLong size={15} />
      </div>
      <p className={styles.text}>Literal</p>
    </div>
  );
};
