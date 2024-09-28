"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";
import { getServerAuthSession } from "~/server/auth";

export const Modal: React.FC = async () => {
  const session = await getServerAuthSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.loginButton}
        onClick={() =>
          router.push(session ? "/api/auth/signout" : "/api/auth/signin")
        }
      >
        <p className={styles.buttonText}>{session ? "Sign out" : "Sign in"}</p>
      </button>
      <div className={styles.break} />
      <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
    </div>
  );
};
