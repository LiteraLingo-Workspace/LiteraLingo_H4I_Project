import * as S from "./Styles";
import { FaArrowRightLong } from "react-icons/fa6";

export const TranslationBar: React.FC = () => {
  return (
    <S.Container>
      <S.Text>Figurative</S.Text>
      <S.ArrowContainer>
        <FaArrowRightLong size={15} />
      </S.ArrowContainer>
      <S.Text>Literal</S.Text>
    </S.Container>
  );
};
