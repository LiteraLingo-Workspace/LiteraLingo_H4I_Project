import styles from "./Overview.module.css";
import { FaRegUser } from "react-icons/fa";
import { TitleContainer } from "../TitleContainer/index";
import useCurrentUser from "~/app/LoadUser";

export const Overview: React.FC = () => {
  
  const currentUser = useCurrentUser();

  return (
    <div className={styles.container}>
      <TitleContainer title="Overview" icon={<FaRegUser size={24} />} />
      <div className={styles.overviewLabelsContainer}>
        <div className={styles.overviewLabel}>{currentUser?.data.streakDays} day streak</div>
        {/* <div className={styles.overviewLabel}>243 hours spent</div>
        <div className={styles.overviewLabel}>13244 XP</div>
        <div className={styles.overviewLabel}>Lvl. 14</div> */}
      </div>
    </div>
  );
};
