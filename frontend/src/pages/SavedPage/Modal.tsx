import React from "react";
import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { Item } from "./Item";

const SavedPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  padding-top: 68px;
  padding-left: 30px;
  position: fixed;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 24px;
`;

const SavedItems = styled.div`
  flex: 1;
  margin: 16px;
  top: 94px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

//might have to adjust the height to account of the navbar
const Space = styled.div`
  width: 100%;
  height: 150px;
`;

export const Modal: React.FC = () => {
  const items = [
    { id: 1, type: "Metonymy", text: "Use soft words and hard argument" },
    { id: 2, type: "Simile", text: "This winter is as cold as death" },
    { id: 3, type: "Simile", text: "This winter is as cold as death" },
    { id: 4, type: "Simile", text: "This winter is as cold as death" },
    { id: 5, type: "Simile", text: "This winter is as cold as death" },
    { id: 6, type: "Proverb", text: "Use soft words and hard argument" },
    { id: 1, type: "Metonymy", text: "Use soft words and hard argument" },
    { id: 2, type: "Simile", text: "This winter is as cold as death" },
    { id: 3, type: "Simile", text: "This winter is as cold as death" },
    { id: 4, type: "Simile", text: "This winter is as cold as death" },
    { id: 5, type: "Simile", text: "This winter is as cold as death" },
    { id: 6, type: "Proverb", text: "Use soft words and hard argument" },
    { id: 1, type: "Metonymy", text: "Use soft words and hard argument" },
    { id: 2, type: "Simile", text: "This winter is as cold as death" },
    { id: 3, type: "Simile", text: "This winter is as cold as death" },
    { id: 4, type: "Simile", text: "This winter is as cold as death" },
    { id: 5, type: "Simile", text: "This winter is as cold as death" },
    { id: 6, type: "Proverb", text: "Use soft words and hard argument" },
    { id: 1, type: "Metonymy", text: "Use soft words and hard argument" },
    { id: 2, type: "Simile", text: "This winter is as cold as death" },
    { id: 3, type: "Simile", text: "This winter is as cold as death" },
    { id: 4, type: "Simile", text: "This winter is as cold as death" },
    { id: 5, type: "Simile", text: "This winter is as cold as death" },
    { id: 6, type: "Proverb", text: "Use soft words and hard argument" },
  ];

  return (
    <SavedPage>
      <Header>
        <HeaderTitle>Saved</HeaderTitle>
      </Header>
      <SavedItems>
        {items.map((item, index) => (
          <Item key={index} id={item.id} type={item.type} text={item.text} />
        ))}
        <Space></Space>
      </SavedItems>
    </SavedPage>
  );
};

export default Modal;
