import styles from "./Modal.module.css";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

export const Modal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.loginButton} onClick={() => navigate("/login")}>
        <p className={styles.buttonText}>{t("landingPage.signIn")}</p>
      </button>
      <div className={styles.break} />
      <p className={styles.question}>{t("landingPage.new")}</p>
      <button
        className={styles.signupButton}
        onClick={() => navigate("/signup")}
      >
        <p className={styles.buttonText}>{t("landingPage.createAccount")}</p>
      </button>
    </div>
  );
};
