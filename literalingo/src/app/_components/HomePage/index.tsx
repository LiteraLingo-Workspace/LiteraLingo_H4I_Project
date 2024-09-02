import styles from "./index.module.css";
import { Background } from "../shared/Background/Background";
import { Welcome } from "./Welcome/index";
import { TranslationBar, TranslationBox } from "./Translation/index";
import { History } from "./History/index";
import { Navbar } from "../shared/Navbar/Navbar";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.subContainer}>
        <Welcome />
        <TranslationBar />
        <TranslationBox />
      </div>
      <History />
      <div className={styles.temp} />
      <Navbar />
    </div>
  );
};
