import * as S from "./Styles";
import { Background } from "./Background/index";
import { LoginModal, SignupModal } from "./Modal/index";

interface UserAuthPageProps {
  type: string;
}

export const UserAuthPage: React.FC<UserAuthPageProps> = ({ type }) => {
  return (
    <S.Container>
      <Background />
      {(type === "login" && <LoginModal />) ||
        (type === "signup" && <SignupModal />)}
    </S.Container>
  );
};
