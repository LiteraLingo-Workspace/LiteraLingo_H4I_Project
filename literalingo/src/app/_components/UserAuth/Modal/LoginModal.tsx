import { t } from "i18next";
import { BsX } from "react-icons/bs";
import { theme } from "../../../../styles/index";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export const LoginModal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <p className={styles.title}>{t("loginPage.title")}</p>
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
      <p className={styles.label}>{t("loginPage.email")}</p>
      <input
        className={styles.inputField}
        type="email"
        placeholder="p.drizzy@gmail.com"
      />
      <p className={styles.label}>{t("loginPage.password")}</p>
      <input className={styles.inputField} type="password" />
      <button className={styles.button}>{t("loginPage.button")}</button>
    </div>
  );
};
