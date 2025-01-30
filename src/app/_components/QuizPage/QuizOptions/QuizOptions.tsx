"use client";
import styles from "./QuizOptions.module.css";
import { Choice } from "../Choice";
import { useState } from "react";

interface QuizOptionsProps {
    isChecked: boolean;
    isClickable: boolean;
    onSelection?: (choice:string) => void; // return the selected choice
    isReview?: boolean;
    selected?: string | null; // send the selected choice
    description: string;
    choices: string[];
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({ 
    isChecked, 
    isClickable,
    isReview,
    onSelection,
    selected, // Pre-select a choice (optionally)
    description,
    choices,
}) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleChoiceClick = (choice: string) => {
        setSelectedChoice(choice);
        if (onSelection) {
          onSelection(choice); // send choice back to parent component
        }
    };

    return (
    <div className={styles.container}>
        <p className={styles.questionLabel}>What does this mean?</p>
        <div className={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <Choice
              key={index}
              text={choice}
              isCorrect={choice === description}
              isChecked={isChecked}
              isReview={isReview}
              selected={selected ? selected === choice : selectedChoice === choice}
              onClick={() => handleChoiceClick(choice)}
              disabled={!isClickable}
            />
          ))}
        </div>
    </div>
  );
};
