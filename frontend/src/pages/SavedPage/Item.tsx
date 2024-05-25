import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../common/styles";
import { VscKebabVertical } from "react-icons/vsc";
import { FaStar, FaRegStar } from "react-icons/fa6";

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
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const ItemType = styled.div`
  color: ${theme.colors.secondary}
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

const ItemText = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 500;
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
`;

export const Item: React.FC<ItemProps> = ({ id, type, text }) => {
  const [saved, setSaved] = useState(false);

  return (
    <SavedItem key={id}>
      <Top>
        <ItemType>{type}</ItemType>
        <ItemActions>
          {saved ? (
            <FaStar
              style={{ color: "#F1B950" }}
              onClick={() => setSaved(!saved)}
            />
          ) : (
            <FaRegStar onClick={() => setSaved(!saved)} />
          )}
          <VscKebabVertical />
        </ItemActions>
      </Top>
      <ItemText className="item-text">{text}</ItemText>
    </SavedItem>
  );
};
