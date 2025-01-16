"use client";

import { useState, useEffect } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";
import { QuizOptions } from "../QuizOptions/QuizOptions";

interface MultipleChoiceProps {
  description: string;
  choices: string[];
  currentQuestionNumber: number;
  onQuestionCheck: (
    currentQuestionNumber: number,
    choice: string | null
  ) => void; // return whether user got it right
  onNextQuestion: () => void;
  shouldDisable?: boolean; // prevent question from being submitted, only displayed
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  description,
  choices,
  currentQuestionNumber,
  onQuestionCheck,
  onNextQuestion,
  shouldDisable,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrectChoice, setIsCorrectChoice] = useState<boolean | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [randomizedChoices, setRandomizedChoices] = useState<string[]>([]);

  const randomizeChoices = (description: string, choices: string[]) => {
    const updatedChoices = [...choices];
    // shuffle the array
    let currentIndex = updatedChoices.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const currentChoice = updatedChoices[currentIndex];
      const randomChoice = updatedChoices[randomIndex];

      updatedChoices[currentIndex] = randomChoice!;
      updatedChoices[randomIndex] = currentChoice!;
    }

    updatedChoices.splice(0, 1); // randomly discard the last element
    const insertIndex = Math.floor(Math.random() * (updatedChoices.length + 1));
    updatedChoices.splice(insertIndex, 0, description);

    return updatedChoices;
  };

  useEffect(() => {
    setRandomizedChoices(randomizeChoices(description, choices));
  }, [description, choices]);

  const handleSelection = (choice: string) => {
    setSelectedChoice(choice);
    setIsCorrectChoice(selectedChoice === description);
  };

  const handleSubmit = (choice: string | null) => {
    if (selectedChoice === null) {
      return;
    }
    setIsChecked(true);
    // Send the send the user choice back to the parent
    // component
    onQuestionCheck(currentQuestionNumber, choice);
  };

  const handleNext = () => {
    setIsChecked(false);
    onNextQuestion();
  };

  return (
    <>
      <QuizOptions 
        isChecked={isChecked} 
        isClickable={!isChecked} 
        onSelection={handleSelection} 
        description={description} 
        choices={randomizedChoices}
      />
      {isChecked ? (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            disabled={shouldDisable}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleSubmit(selectedChoice)}>
            Check Answer
          </button>
        </div>
      )}
    </>
  );
};
