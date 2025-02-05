import Link from "next/link";
import styles from "./UserInfo.module.css";
import { avatar } from "../../../assets/index";
import Image from "next/image";

interface UserInfoProps {
  name: string;
  email: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <div className={styles.container}>
      <Image
        style={{ height: "112px", width: "105.49px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <div className={styles.userIdentityContainer}>
        <p className={styles.handle}>{email}</p>
        <p className={styles.name}>{name}</p>
        <button className={styles.logoutBtn} aria-label="Logout">
          <Link style={{ textDecoration: "none" }} href={"/api/auth/signout"}>
            <p className={styles.logoutText}>Logout</p>
          </Link>
        </button>
      </div>
    </div>
  );
};
