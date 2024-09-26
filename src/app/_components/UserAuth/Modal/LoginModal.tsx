"use client";

import { BsX } from "react-icons/bs";
import { theme } from "../../../../styles/index";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation";

export const LoginModal: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <p className={styles.title}>Sign in to your account</p>
        <BsX
          style={{
            width: "40px",
            height: "40px",
            transform: "translate(10px)",
            cursor: "pointer",
          }}
          color={theme.colors.primary}
          onClick={() => router.push("/")}
        ></BsX>
      </div>
      <p className={styles.label}>Enter your email</p>
      <input
        className={styles.inputField}
        type="email"
        placeholder="p.drizzy@gmail.com"
      />
      <p className={styles.label}>Enter your password</p>
      <input className={styles.inputField} type="password" />
      <button
        className={styles.button}
        onClick={() => router.push("/home")}>Sign in
      </button>
    </div>
  );
};
