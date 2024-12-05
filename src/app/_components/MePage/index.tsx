"use client";

import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { UserInfo } from "./UserInfo/index";
import { Overview } from "./Overview/index";
import { FocalPoint } from "./FocalPoint/index";
import { Settings } from "./Settings/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { theme } from "../../../styles/index";
import useCurrentUser from "~/app/LoadUser";

export const MePage: React.FC = () => {

  // load the current user
  const currentUser = useCurrentUser();

  console.log(currentUser?.data);

  return (
    <div className={styles.container}>
      <Background />
      <Header title="Your Profile" color={theme.colors.primary} />
      <div className={styles.subContainer}>
        <UserInfo />
        <Overview />
        <FocalPoint />
        <Settings />
      </div>
      <Navbar />
    </div>
  );
};
