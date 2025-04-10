import styles from "./StatusInfo.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { theme } from "../../../../styles/index";
import { ProgressBar } from "./ProgressBar";
import { StarInfo } from "./StarInfo";
import Link from 'next/link'

interface StatusInfoProps {
  completed: number;
  total: number;
}

export const StatusInfo: React.FC<StatusInfoProps> = ({ completed, total }) => {
  return (
    <div className={styles.container}>
      <Link href="/quiz">
        <IoCloseOutline
          size={50}
          style={{ color: `${theme.colors.secondary}` }}
        />
      </Link>
      <ProgressBar completed={completed} total={total} />
      <StarInfo />
    </div>
  );
};
