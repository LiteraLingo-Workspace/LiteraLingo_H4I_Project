import * as S from "./Styles";
import { Background } from "./Background/index";
import { Modal } from "./Modal/index";

export const LandingPage: React.FC = () => {
  return (
    <S.Container>
      <Background />
      <Modal />
    </S.Container>
  );
};
