"use client"

import styles from "./Streak.module.css";
import { Date } from "./Date";
import useCurrentUser from "~/app/LoadUser";

export const Streak: React.FC = () => {
  const user = useCurrentUser();

  return (
    <div className={styles.container}>
      <p className={styles.streakLabel}>{user?.data?.streakDays} Day Streak!</p>
      <div className={styles.subContainer}>
        <Date month="Nov" day={23} streakActive={true} today={false} />
        <Date month="Nov" day={24} streakActive={true} today={false} />
        <Date month="Nov" day={25} streakActive={true} today={true} />
        <Date month="Nov" day={26} streakActive={false} today={false} />
        <Date month="Nov" day={27} streakActive={false} today={false} />
      </div>
    </div>
  );
};
