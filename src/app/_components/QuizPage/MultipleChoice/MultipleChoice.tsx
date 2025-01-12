"use client";

import { useState, useEffect } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";

interface MultipleChoiceProps {
  description: string;
  choices: string[];
  currentQuestionNumber: number;
  onQuestionCheck: (
    currentQuestionNumber: number,
    isQuestionCorrect: boolean
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
  const [isSelected, setIsSelected] = useState(false);

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
    setIsChecked(true);
    // callback to send if choice is correct back to parent component
    onQuestionCheck(currentQuestionNumber, isCorrectChoice!);
  };

  const handleNext = () => {
    setIsChecked(false);
    onNextQuestion();
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
              isChecked={isChecked}
              selected={selectedChoice === choice}
              onClick={() => handleChoiceClick(choice, choice === description)}
              disabled={isChecked}
            />
          ))}
        </div>
      </div>
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
          <button className={styles.button} onClick={handleSubmit}>
            Check Answer
          </button>
        </div>
      )}
    </>
  );
};
