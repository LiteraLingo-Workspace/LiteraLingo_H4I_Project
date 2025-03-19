"use client";

import { useState, useEffect } from "react";
import styles from "./MultipleChoice.module.css";
import { QuizOptions } from "../QuizOptions/QuizOptions";

interface MultipleChoiceProps {
  description: string;
  choices: string[];
  currentQuestionNumber: number;
  onQuestionCheck: (
    currentQuestionNumber: number,
    choice: string | null,
  ) => void; // return whether user got it right
  onNextQuestion: () => void;
  shouldDisable?: boolean; // prevent question from being submitted, only displayed
  forceSelectedChoice?: string | null;
  forceIsChecked?: boolean;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  description,
  choices,
  currentQuestionNumber,
  onQuestionCheck,
  onNextQuestion,
  shouldDisable,
  forceSelectedChoice,
  forceIsChecked,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(
    forceSelectedChoice ?? null,
  );
  const [isChecked, setIsChecked] = useState<boolean>(forceIsChecked ?? false);

  const handleSelection = (choice: string) => {
    setSelectedChoice(choice);
  };

  useEffect(() => {
    setSelectedChoice(forceSelectedChoice ?? null);
    setIsChecked(forceIsChecked ?? false);
  }, [forceSelectedChoice, forceIsChecked]);

  const handleSubmit = (choice: string | null) => {
    console.log(selectedChoice);
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
        isClickable={!isChecked || !shouldDisable}
        onSelection={handleSelection}
        isReview={false}
        description={description}
        choices={choices}
        selected={forceSelectedChoice && forceSelectedChoice}
      />
      {isChecked ? (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            disabled={shouldDisable}
            onClick={handleNext}
            aria-label="Next Question"
          >
            Next
          </button>
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => handleSubmit(selectedChoice)}
            aria-label="Check Answer"
          >
            Check Answer
          </button>
        </div>
      )}
    </>
  );
};
