import styles from "./index.module.css";
import { Header } from "../../_components/shared/Header/Header";
import { Navbar } from "../../_components/shared/Navbar/Navbar";
import { Summary } from "./Summary/index";
import { Streak } from "./Streak/index";
import { BottomSheet } from "./BottomSheet/index";

export const ProgressPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header title="Your Progress" color="white" />
      <div className={styles.subContainer}>
        <Summary />
        <Streak />
        <BottomSheet />
      </div>
      <Navbar />
    </div>
  );
};
