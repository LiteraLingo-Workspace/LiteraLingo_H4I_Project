import Link from "next/link";
import styles from "./Modal.module.css";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export const Modal: React.FC = async () => {
  const session = await getServerAuthSession();

  if (session) redirect("/home");

  return (
    <div className={styles.container}>
      <button className={styles.loginButton} aria-label="Sign in or sign out">
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
    </div>
  );
};
