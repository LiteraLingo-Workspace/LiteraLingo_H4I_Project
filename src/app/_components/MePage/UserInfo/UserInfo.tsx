import styles from "./UserInfo.module.css";
import { avatar } from "../../../assets/index";
import Image from "next/image";

export const UserInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        style={{ height: "112px", width: "105.49px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <div className={styles.userIdentityContainer}>
        <p className={styles.handle}>@Raven1234</p>
        <p className={styles.name}>Anna Collin</p>
      </div>
    </div>
  );
};
