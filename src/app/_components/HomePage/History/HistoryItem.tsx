import styles from "./History.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";

interface HistoryItemProps {
  id: number;
  text: string;
  type: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: number, newState: boolean) => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  id,
  text,
  type,
  isFavorite,
  onFavoriteToggle,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTop}>
        <p className={styles.itemType}>{type}</p>
        <div className={styles.itemButtons} aria-label="History items">
          {isFavorite ? (
            <FaStar
              size={24}
              color="#EFB951"
              onClick={() => onFavoriteToggle(id, !isFavorite)}
              style={{ cursor: "pointer" }}
              className={styles.starIcon}
            />
          ) : (
            <FaRegStar
              size={24}
              onClick={() => onFavoriteToggle(id, !isFavorite)}
              style={{ cursor: "pointer" }}
              className={styles.starIcon}
            />
          )}
          <BsThreeDotsVertical size={18} />
        </div>
      </div>
      <div className={styles.itemBottom}>
        <p className={styles.itemBottomText}>{text}</p>
      </div>
    </div>
  );
};
