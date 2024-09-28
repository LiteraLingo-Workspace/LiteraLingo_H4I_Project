import Link from "next/link";
import styles from "./Modal.module.css";
import { getServerAuthSession } from "~/server/auth";

export const Modal: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <div className={styles.container}>
      <button className={styles.loginButton}>
        <Link
          style={{ textDecoration: "none" }}
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
        >
          <p className={styles.buttonText}>
            {session ? "Sign out" : "Sign in"}
          </p>
        </Link>
      </button>
      <div className={styles.break} />
      <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
    </div>
  );
};
