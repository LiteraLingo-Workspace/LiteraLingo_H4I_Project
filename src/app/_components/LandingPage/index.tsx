import styles from "./index.module.css";
import { Background } from "./Background/index";
import { Modal } from "./Modal/index";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background />
      <Modal />
    </div>
  );
};
