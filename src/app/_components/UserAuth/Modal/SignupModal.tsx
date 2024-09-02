"use client";

import { BsX } from "react-icons/bs";
import { theme } from "../../../../styles/index";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation";

export const SignupModal: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <p className={styles.title}>Create an account</p>
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
      <p className={styles.label}>What should we call you? (Your name)</p>
      <input className={styles.inputField} placeholder="Jane Doe" />
      <p className={styles.label}>Enter your email</p>
      <input
        className={styles.inputField}
        type="email"
        placeholder="bbl.drizzy@gmail.com"
      />
      <p className={styles.label}>Enter your password</p>
      <input className={styles.inputField} type="password" />
      <p className={styles.label}>Re-enter your password</p>
      <input className={styles.inputField} type="password" />
      <button className={styles.button}>Sign up</button>
    </div>
  );
};
