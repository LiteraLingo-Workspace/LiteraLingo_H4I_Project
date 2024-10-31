"use client";

import { useState } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";
import { text } from "stream/consumers";

interface MultipleChoiceProps {
  description: string;
  choices: string[];
  onQuestionSubmit: () => void;
}

const randomizeChoices = (description: string, choices: string[]) => {
  const updatedChoices = [...choices];
  
  updatedChoices.splice(0, 0, description); // add correct choice

  if (typeof description === 'string') {
    updatedChoices.unshift(description); // add correct choice at the start
  }

  // shuffle the array
  let currentIndex = updatedChoices.length, randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const currentChoice = updatedChoices[currentIndex] as string;
      const randomChoice = updatedChoices[randomIndex] as string;
  
      updatedChoices[currentIndex] = randomChoice;
      updatedChoices[randomIndex] = currentChoice;
    }
  
    return updatedChoices;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({  description, choices, onQuestionSubmit }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrectChoice, setIsCorrectChoice] = useState<boolean | null>(null);

  const handleChoiceClick = (choice: string, isCorrect: boolean) => {
    setSelectedChoice(choice);
    setIsCorrectChoice(isCorrect);
  };

  const handleSubmit = () => {
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
          <Choice
            text={choices[0]!}
            isCorrect={choices[0] === description}
            selected={selectedChoice === choices[0]}
            onClick={() => handleChoiceClick(choices[0]!, true)}
          />
          <Choice
            text={choices[1]!}
            isCorrect={choices[0] === description}
            selected={selectedChoice === choices[1]}
            onClick={() => handleChoiceClick(choices[1]!, false)}
          />
          <Choice
            text={choices[2]!}
            isCorrect={choices[0] === description}
            selected={selectedChoice === choices[2]}
            onClick={() => handleChoiceClick(choices[2]!, false)}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>
          Check Answer
        </button>
      </div>
    </>
  );
};
