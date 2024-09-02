import styled from "styled-components";
import { theme } from "../../../../styles/index";

const SavedPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 94px;
  padding: 24px 24px 80px 24px;
`;

const SavedItems = styled.div`
  overflow: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 600px;
  width: 341px;
`;

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

export {
  SavedPage,
  SavedItems,
  Top,
  SavedItem,
  ItemType,
  ItemText,
  ItemActions,
};
