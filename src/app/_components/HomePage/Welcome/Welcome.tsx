import styles from "./Welcome.module.css";
import { avatar } from "../../../assets/index";
import Image from "next/image";

export const Welcome: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <div className={styles.nameContainer}>
        <p className={styles.welcomeLabel}>Welcome</p>
        <p className={styles.nameLabel}>Anna</p>
      </div>
    </div>
  );
};
