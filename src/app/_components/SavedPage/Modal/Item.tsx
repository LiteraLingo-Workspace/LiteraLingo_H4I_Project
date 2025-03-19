import styles from "./Modal.module.css";
import { VscKebabVertical } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";

interface ItemProps {
  id: number;
  textEntered: string;
  outputText: string;
}

export const Item: React.FC<ItemProps> = ({ id, textEntered, outputText }) => {
  return (
    <div className={styles.savedItem} key={id}>
      <div className={styles.top}>
        <div className={styles.itemActions}>
          <CiStar size={24} color={"gold"} />
          <VscKebabVertical />
        </div>
      </div>
      <div className={styles.itemType}>{textEntered}</div>
      <div className={styles.itemText}>{outputText}</div>
    </div>
  );
};
