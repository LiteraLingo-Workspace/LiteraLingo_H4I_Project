import React, { useState } from 'react';
import { VscKebabVertical } from "react-icons/vsc";
import { FaStar, FaRegStar } from "react-icons/fa6";
import styled from 'styled-components';
import { theme } from "../../common/styles/index";


const SavedPage = styled.div`
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

//might have to adjust the height to account of the navbar 
const Space = styled.div `
  width: 100%;
  height: 150px;

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
          <Item key={index} id = {item.id} type = {item.type} text = {item.text} />
         
        ))}
        <Space>

        </Space>
      </SavedItems>

    </SavedPage>
  );
};

interface itemProps  {
  id: number; 
  type: string; 
  text: string; 
}
const Item: React.FC<itemProps> = ({ id, type, text }) => {
  const [saved, setSaved] = useState(false);

  return (
    <SavedItem key={id}>

            <Top>

                <ItemType>{type}</ItemType>


                <ItemActions>
                {saved ? (<FaStar  style={{ color: '#F1B950'}} onClick={() => setSaved(!saved)}/>) : (<FaRegStar onClick={() => setSaved(!saved)}/>)}
      
                <VscKebabVertical />
                </ItemActions>

            </Top>


            <ItemText className="item-text">{text}</ItemText>
          </SavedItem>
  );
};

export default Modal;
