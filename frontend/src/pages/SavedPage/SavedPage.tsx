import React, { useState } from 'react';
import './SavedPage.css';
import { VscKebabVertical } from "react-icons/vsc";
import { FaStar, FaRegStar } from "react-icons/fa6";

export const SavedPage: React.FC = () => {
  const items = [
    { id: 1, type: 'Metonymy', text: 'Use soft words and hard argument' },
    { id: 2, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 3, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 4, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 5, type: 'Simile', text: 'This winter is as cold as death' },
    { id: 6, type: 'Proverb', text: 'Use soft words and hard argument' },
  ];

  return (
    <div className="saved-page">
      <header className="header">
        <h1>Saved</h1>
      </header>
      <div className="saved-items">
        {items.map((item, index) => (
          <Item key={index} item={item}/>
         
        ))}
      </div>

    </div>
  );
};


const Item: React.FC<{ item: { id: number, type: string, text: string } }> = ({ item }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div key={item.id} className="saved-item">

            <div className="top">

                <div className="item-type">{item.type}</div>


                <div className="item-actions">
                {saved ? (<FaStar  style={{ color: '#F1B950'}} onClick={() => setSaved(!saved)}/>) : (<FaRegStar onClick={() => setSaved(!saved)}/>)}
      
                <VscKebabVertical />
                </div>

            </div>


            <div className="item-text">{item.text}</div>
          </div>
  );
};

export default SavedPage;
