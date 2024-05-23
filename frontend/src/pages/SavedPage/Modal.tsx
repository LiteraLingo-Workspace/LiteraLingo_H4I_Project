import React, { useState } from 'react';
import { VscKebabVertical } from "react-icons/vsc";
import { FaStar, FaRegStar } from "react-icons/fa6";
import styled from 'styled-components';
import { theme } from "../../common/styles/index";


const SavedPage = styled.div`

  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
  position: relative;
  overflow: hidden

`;

const Header = styled.div`
  padding-top: 68px;
  padding-left: 30px;

  position:fixed;

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
  top:94px;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;


`;

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
  color: #98A8BA;
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




export const Modal: React.FC = () => {
  const items = [
    { id: 1, type: 'Metonymy', text: 'Use soft words and hard argument' },
    { id: 2, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 3, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 4, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 5, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 6, type: 'Proverb', text: 'Use soft words and hard argument' },
    { id: 1, type: 'Metonymy', text: 'Use soft words and hard argument' },
    { id: 2, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 3, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 4, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 5, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 6, type: 'Proverb', text: 'Use soft words and hard argument' },
    { id: 1, type: 'Metonymy', text: 'Use soft words and hard argument' },
    { id: 2, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 3, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 4, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 5, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 6, type: 'Proverb', text: 'Use soft words and hard argument' },
    { id: 1, type: 'Metonymy', text: 'Use soft words and hard argument' },
    { id: 2, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 3, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 4, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 5, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 6, type: 'Proverb', text: 'Use soft words and hard argument' },
  ];

  return (
    <SavedPage>
      <Header>
        <HeaderTitle>Saved</HeaderTitle>
      </Header>
      <SavedItems>
        {items.map((item, index) => (
          <Item key={index} item={item}/>
         
        ))}
      </SavedItems>

    </SavedPage>
  );
};


const Item: React.FC<{ item: { id: number, type: string, text: string } }> = ({ item }) => {
  const [saved, setSaved] = useState(false);

  return (
    <SavedItem key={item.id}>

            <Top>

                <ItemType>{item.type}</ItemType>


                <ItemActions>
                {saved ? (<FaStar  style={{ color: '#F1B950'}} onClick={() => setSaved(!saved)}/>) : (<FaRegStar onClick={() => setSaved(!saved)}/>)}
      
                <VscKebabVertical />
                </ItemActions>

            </Top>


            <ItemText className="item-text">{item.text}</ItemText>
          </SavedItem>
  );
};

export default Modal;
