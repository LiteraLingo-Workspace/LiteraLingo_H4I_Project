import styled from "styled-components";
import { theme } from "../../common/styles";
import { VscKebabVertical } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";

interface ItemProps {
  id: number;
  type: string;
  text: string;
}

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  justify-content: space-between;
`;

const SavedItem = styled.div`
  background-color: ${theme.colors.faintBlue};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const ItemType = styled.div`
  color: ${theme.colors.secondary};
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

const ItemText = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${theme.colors.primary};
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.secondary};
`;

export const Item: React.FC<ItemProps> = ({ id, type, text }) => {
  return (
    <SavedItem key={id}>
      <Top>
        <ItemType>{type}</ItemType>
        <ItemActions>
          <CiStar size={24} />
          <VscKebabVertical />
        </ItemActions>
      </Top>
      <ItemText>{text}</ItemText>
    </SavedItem>
  );
};
