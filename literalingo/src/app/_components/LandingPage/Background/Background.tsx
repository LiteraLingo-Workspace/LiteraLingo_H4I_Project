import styles from "./Background.module.css";
import { useTranslation } from "react-i18next";
import { landingGraphic, landingLogo } from "../../../assets/index";
import Image from "next/image";

export const Background: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <Image
          style={{ height: "86px", marginRight: "20px" }}
          src={landingLogo}
          alt="Landing Page LiteraLingo Logo"
        />
        <p className={styles.title}>{t("landingPage.title")}</p>
      </div>
      <div className={styles.flexColumn}>
        <p className={styles.slogan1}>{t("landingPage.subTitle1")}</p>
        <p className={styles.slogan2}>{t("landingPage.subTitle2")}</p>
      </div>
      <Image
        style={{ height: "260px" }}
        src={landingGraphic}
        alt="Landing Page LiteraLingo Graphic"
      />
    </div>
  );
};
