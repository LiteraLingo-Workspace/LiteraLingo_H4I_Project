"use client";
import styles from "./Welcome.module.css";
import { avatar } from "../../../assets/index";
import Image from "next/image";
import useCurrentUser from "~/app/LoadUser";

export const Welcome: React.FC = () => {

  const currentUser = useCurrentUser();

  return (
    <div className={styles.container}>
      <Image
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
        alt="User Avatar"
      />
      <div className={styles.nameContainer}>
        <p className={styles.welcomeLabel}>Welcome</p>
        {// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        currentUser && currentUser.data && <p className={styles.nameLabel}>{currentUser.data.name.split(" ")[0]}</p>}
      </div>
    </div>
  );
};
