import Link from "next/link";
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
        <button className={styles.logoutBtn}> 
          <Link
            style={{ textDecoration: "none" }}
            href={"/api/auth/signout"}
          >
            <p className={styles.logoutText}>
              Logout  
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};
