import styled from "styled-components";
import { theme } from "../../../../styles/index";

interface Props {
  expanded: boolean;
}

const Container = styled.div<Props>`
  position: absolute;
  height: 723px;
  width: 100%;
  z-index: 1;
  overflow: scroll;
  top: ${(p) => (p.expanded ? 656 : 68)}px;
`;

const TabContainer = styled.div<Props>`
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.coolAccentBg};
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: ${(p) => (p.expanded ? 136 : 80)}px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 344px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
`;

const TitleContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: ${(p) => (p.expanded ? 0 : 15)}px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 32.04px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.veryLight};
`;

const HistoryItemContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 80px 24px;
  gap: 16px;
  min-height: 600px;
  border-bottom: 15px solid ${theme.colors.coolAccentBg};
  margin-top: ${(p) => (p.expanded ? 0 : 80)}px;
`;

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

const ItemType = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
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

export {
  Container,
  TextContainer,
  TabContainer,
  TitleContainer,
  Title,
  Description,
  HistoryItemContainer,
  Item,
  ItemTop,
  ItemType,
  ItemButtons,
  ItemBottom,
  ItemBottomText,
};
