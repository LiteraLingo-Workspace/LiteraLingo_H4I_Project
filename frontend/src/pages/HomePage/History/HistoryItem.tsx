import * as S from "./Styles";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HistoryItemProps {
  text: string;
  type: string;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ text, type }) => {
  return (
    <S.Item>
      <S.ItemTop>
        <S.ItemType>{type}</S.ItemType>
        <S.ItemButtons>
          <CiStar size={24} />
          <BsThreeDotsVertical size={18} />
        </S.ItemButtons>
      </S.ItemTop>
      <S.ItemBottom>
        <S.ItemBottomText>{text}</S.ItemBottomText>
      </S.ItemBottom>
    </S.Item>
  );
};
