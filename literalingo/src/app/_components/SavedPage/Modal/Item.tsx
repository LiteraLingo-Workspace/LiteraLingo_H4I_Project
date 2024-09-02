import styles from "./Modal.module.css";
import { VscKebabVertical } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";

interface ItemProps {
  id: number;
  type: string;
  text: string;
}

export const Item: React.FC<ItemProps> = ({ id, type, text }) => {
  return (
    <div className={styles.savedItem} key={id}>
      <div className={styles.top}>
        <div className={styles.itemType}>{type}</div>
        <div className={styles.itemActions}>
          <CiStar size={24} />
          <VscKebabVertical />
        </div>
      </div>
      <div className={styles.itemText}>{text}</div>
    </div>
  );
};
