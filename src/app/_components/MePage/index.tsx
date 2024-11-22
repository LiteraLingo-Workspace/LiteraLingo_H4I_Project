"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { UserInfo } from "./UserInfo/index";
import { Overview } from "./Overview/index";
import { FocalPoint } from "./FocalPoint/index";
import { Settings } from "./Settings/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { ConfirmationModal } from "../shared/ConfirmationModal/ConfirmationModal";
import { theme } from "../../../styles/index";

export const MePage: React.FC = () => {
  const [visibleAccountDeletion, setVisibleAccountDeletion] = useState<boolean>(false);

  const deleteAccount = async () => {

  }

  return (
    <div className={styles.container}>
      <Background />
      {visibleAccountDeletion &&
        <ConfirmationModal
          title="Delete your account?"
          description="Be careful! You will not be able to undo this."
          confirm="Delete"
          cancel="Cancel"
          onConfirm={deleteAccount}
          onClose={() => setVisibleAccountDeletion(false)}
        />
      }
      <Header title="Your Profile" color={theme.colors.primary} />
      <div className={styles.subContainer}>
        <UserInfo />
        <Overview />
        <FocalPoint />
        <Settings onAccountDelete={() => setVisibleAccountDeletion(true)}/>
      </div>
      <Navbar />
    </div>
  );
};
