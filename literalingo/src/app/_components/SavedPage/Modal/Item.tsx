import * as S from "./Styles";
import { VscKebabVertical } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";

interface ItemProps {
  id: number;
  type: string;
  text: string;
}

export const Item: React.FC<ItemProps> = ({ id, type, text }) => {
  return (
    <S.SavedItem key={id}>
      <S.Top>
        <S.ItemType>{type}</S.ItemType>
        <S.ItemActions>
          <CiStar size={24} />
          <VscKebabVertical />
        </S.ItemActions>
      </S.Top>
      <S.ItemText>{text}</S.ItemText>
    </S.SavedItem>
  );
};
