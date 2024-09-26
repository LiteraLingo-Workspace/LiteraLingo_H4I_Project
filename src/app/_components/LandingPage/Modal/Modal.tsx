"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

export const Modal: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.loginButton}
        onClick={() => router.push("/login")}
      >

        <p className={styles.buttonText}>Sign In</p>
      </button>
      <div className={styles.break} />
      <p className={styles.question}>New to LiteraLingo?</p>
      <button
        className={styles.signupButton}
        onClick={() => router.push("/signup")}
      >
        <p className={styles.buttonText}>Create Account</p>
      </button>
    </div>
  );
};
