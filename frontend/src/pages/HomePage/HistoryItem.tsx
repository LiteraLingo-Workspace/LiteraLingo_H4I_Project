import styled from "styled-components";
import { theme } from "../../common/styles";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HistoryItemProps {
  text: string;
  type: string;
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.faintBlue};
  height: 86px;
  width: 344px;
  border-radius: 12px;
`;

const ItemTop = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  height: 32px;
  width: 325px;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  color: ${theme.colors.secondary};
`;

const ItemButtons = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  gap: 4px;
`;

const ItemBottom = styled.div`
  background-color: transparent;
  height: 30px;
  width: 311px;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  color: ${theme.colors.primary};
  font-family: "Poppins", sans-serif;
`;

const ItemBottomText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-geight: 30px;
`;

export const HistoryItem: React.FC<HistoryItemProps> = ({ text, type }) => {
  return (
    <Item>
      <ItemTop>
        <p
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "22px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {type}
        </p>
        <ItemButtons>
          <CiStar size={24} />
          <BsThreeDotsVertical size={18} />
        </ItemButtons>
      </ItemTop>
      <ItemBottom>
        <ItemBottomText>{text}</ItemBottomText>
      </ItemBottom>
    </Item>
  );
};
