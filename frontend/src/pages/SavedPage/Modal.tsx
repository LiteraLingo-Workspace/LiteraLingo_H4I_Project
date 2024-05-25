import React from "react";
import styled from "styled-components";
import { Item } from "./Item";

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
      <SavedItems>
        {items.map((item, index) => (
          <Item key={index} id={item.id} type={item.type} text={item.text} />
        ))}
      </SavedItems>
    </SavedPage>
  );
};

export default Modal;
