import { t } from "i18next";
import { BsX } from "react-icons/bs";
import { theme } from "../../../../styles/index";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export const SignupModal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <p className={styles.title}>{t("signupPage.title")}</p>
        <BsX
          style={{
            width: "40px",
            height: "40px",
            transform: "translate(10px)",
            cursor: "pointer",
          }}
          color={theme.colors.primary}
          onClick={() => navigate("/")}
        ></BsX>
      </div>
      <p className={styles.label}>{t("signupPage.name")}</p>
      <input className={styles.inputField} placeholder="Jane Doe" />
      <p className={styles.label}>{t("signupPage.email")}</p>
      <input
        className={styles.inputField}
        type="email"
        placeholder="bbl.drizzy@gmail.com"
      />
      <p className={styles.label}>{t("signupPage.password")}</p>
      <input className={styles.inputField} type="password" />
      <p className={styles.label}>{t("signupPage.passwordConfirmation")}</p>
      <input className={styles.inputField} type="password" />
      <button className={styles.button}>{t("signupPage.button")}</button>
    </div>
  );
};
