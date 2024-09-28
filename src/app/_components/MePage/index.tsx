import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { UserInfo } from "./UserInfo/index";
import { Overview } from "./Overview/index";
import { FocalPoint } from "./FocalPoint/index";
import { Settings } from "./Settings/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { theme } from "../../../styles/index";

export const MePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background />
      <Header title="Your Profile" color={theme.colors.primary} />
      <div className={styles.subContainer}>
        <UserInfo />
        <Overview />
        <FocalPoint />
        <Settings />
      </div>
      <Navbar />
    </div>
  );
};
