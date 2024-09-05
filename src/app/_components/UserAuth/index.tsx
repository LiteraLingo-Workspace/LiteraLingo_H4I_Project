import styles from "./index.module.css";
import { Background } from "./Background/index";
import { LoginModal, SignupModal } from "./Modal/index";

interface UserAuthPageProps {
  type: string;
}

export const UserAuthPage: React.FC<UserAuthPageProps> = ({ type }) => {
  return (
    <div className={styles.container}>
      <Background />
      {(type === "login" && <LoginModal />) ||
        (type === "signup" && <SignupModal />)}
    </div>
  );
};
