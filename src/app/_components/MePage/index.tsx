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
import useCurrentUser from "~/app/LoadUser";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export const MePage: React.FC = () => {
  const currentUser = useCurrentUser();

  const [visibleAccountDeletion, setVisibleAccountDeletion] =
    useState<boolean>(false);
  const router = useRouter();

  const deleteUser = api.user.deleteUserById.useMutation({
    onSuccess: async () => {
      console.log("User deleted succesffully.");
    },
    onError: () => {
      console.error("An error occurred.");
    },
  });

  const handleUserDelete = async () => {
    try {
      await deleteUser.mutateAsync();
      setVisibleAccountDeletion(false);
      router.replace("/");
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Background />
      {visibleAccountDeletion && (
        <ConfirmationModal
          title="Delete your account?"
          description="Be careful! You will not be able to undo this."
          confirm="Delete"
          cancel="Cancel"
          onConfirm={handleUserDelete}
          onClose={() => setVisibleAccountDeletion(false)}
        />
      )}
      <Header title="Your Profile" color={theme.colors.primary} />
      <div className={styles.subContainer}>
        {currentUser && currentUser.data && (
          <UserInfo name={currentUser?.data?.name ?? ""} email={currentUser?.data?.email ?? ""} />
        )}
        <Overview />
        <FocalPoint />
        <Settings onAccountDelete={() => setVisibleAccountDeletion(true)} />
      </div>
      <Navbar />
    </div>
  );
};
