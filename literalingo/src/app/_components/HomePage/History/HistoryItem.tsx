import styles from "./History.module.css";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HistoryItemProps {
  text: string;
  type: string;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ text, type }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTop}>
        <p className={styles.itemType}>{type}</p>
        <div className={styles.itemButtons}>
          <CiStar size={24} />
          <BsThreeDotsVertical size={18} />
        </div>
      </div>
      <div className={styles.itemBottom}>
        <p className={styles.itemBottomText}>{text}</p>
      </div>
    </div>
  );
};
