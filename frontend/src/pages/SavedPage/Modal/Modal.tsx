import * as S from "./Styles";
import React from "react";
import { Item } from "./Item";

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
    <S.SavedPage>
      <S.SavedItems>
        {items.map((item, index) => (
          <Item key={index} id={item.id} type={item.type} text={item.text} />
        ))}
      </S.SavedItems>
    </S.SavedPage>
  );
};

export default Modal;
