"use client";

import { useState, useEffect } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";
import { text } from "stream/consumers";

interface MultipleChoiceProps {
  description: string;
  choices: string[];
  onQuestionSubmit: () => void;
  shouldDisable?: boolean; // prevent question from being submitted, only displayed
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({  description, choices, onQuestionSubmit, shouldDisable }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrectChoice, setIsCorrectChoice] = useState<boolean | null>(null);
  const [randomizedChoices, setRandomizedChoices] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState(false); 

  const randomizeChoices = (description: string, choices: string[]) => {
    const updatedChoices = [...choices];  
    // shuffle the array
    let currentIndex = updatedChoices.length, randomIndex;
    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const currentChoice = updatedChoices[currentIndex];
      const randomChoice = updatedChoices[randomIndex];
  
      updatedChoices[currentIndex] = randomChoice!;
      updatedChoices[randomIndex] = currentChoice!;
    }

    updatedChoices.splice(0, 1); // take only first 2 elements
    const insertIndex = Math.floor(Math.random() * (updatedChoices.length + 1));
    updatedChoices.splice(insertIndex, 0, description);

    console.log(updatedChoices, description);
    
    return updatedChoices;
  }

  useEffect(() => {
    setRandomizedChoices(randomizeChoices(description, choices));
    setIsSelected(false);
  }, [description, choices]);


  const handleChoiceClick = (choice: string, isCorrect: boolean) => {
    setIsSelected(true);
    setSelectedChoice(choice);
    setIsCorrectChoice(isCorrect);
  };

  const handleSubmit = () => {
    if (!isSelected) {
      return;
    }
    handleCheckAnswer();
    onQuestionSubmit();
  }

  const handleCheckAnswer = () => {
    if (isCorrectChoice) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.questionLabel}>What does this mean?</p>
        <div className={styles.choicesContainer}>
        {randomizedChoices.map((choice, index) => (
          <Choice
            key={index}
            text={choice}
            isCorrect={choice === description}
            selected={selectedChoice === choice}
            onClick={() => handleChoiceClick(choice, choice === description)}
          />
        ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} disabled={shouldDisable} onClick={handleSubmit}>
          Check Answer
        </button>
      </div>
    </>
  );
};
