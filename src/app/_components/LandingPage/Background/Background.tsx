"use client";

import styles from "./Background.module.css";
import { landingGraphic, landingLogo } from "../../../assets/index";
import Image from "next/image";

export const Background: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <Image
          height={86}
          style={{ marginRight: "20px" }}
          src={landingLogo}
          alt="Landing Page LiteraLingo Logo"
        />
        <p className={styles.title}>LiteraLingo</p>
      </div>
      <div className={styles.flexColumn}>
        <p className={styles.slogan1}>Unlock English</p>
        <p className={styles.slogan2}>Literally!</p>
      </div>
      <Image
        height={260}
        src={landingGraphic}
        alt="Landing Page LiteraLingo Graphic"
      />
    </div>
  );
};
